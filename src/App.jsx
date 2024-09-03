import { useEffect, useState } from "react"
import axios from 'axios';
import Header from "./components/Header"
import MainCard from "./components/MainCard"

export default function App() {

  const url="https://arthurfrost.qflo.co.za/php/getTimeline.php";
  //state variable to store the data from the api call
  //const [mainData,setMainData]=useState();
  //const [footerData,setFooterData]=useState();
  const [error,setError]=useState();
  //make the api call after the first mount
  
  useEffect(()=>{
    axios.get(url).then((response)=>{
      console.log(response.data);
    }
    ).catch((error)=>{
      console.error({message:error.message})
      setError(error);
    })
  },[]);

  if(error){
    return(
      <div className="flex justify-center items-center">
        <h1>Error....</h1>
      </div>
    )
  }
 
  return (
    <main className="flex justify-center items-center flex-col px-5 py-5 gap-8">
      <div className="flex justify-center items-center flex-col gap-5">
        <Header/>
        <section className="flex justify-center items-center">
          <MainCard/>
        </section>
      </div>
    </main>
  )
}