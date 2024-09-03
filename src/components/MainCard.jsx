import  { useState,useEffect } from 'react';
import InformationCard from './InformationCard';

import axios from 'axios';
const url="https://arthurfrost.qflo.co.za/php/getTimeline.php";
/* interface itemProps{
    item:any[]
} */
const MainCard = () => {
    //fetch the data from the api
    const [dataItems, setDataItems] = useState([]);
    const [mainData,setMainData]=useState();

    useEffect(()=>{
        axios.get(url).then((response)=>{
            //console.log(response.data.Timeline)
            setDataItems(response.data.Timeline);
            setMainData(response.data);
        }).catch((error)=>{
            console.error({message:error.message})
        })
    },[])

    if(!mainData){
        return(
        <div className="flex justify-center items-center">
            <h1 className="text-xl font-bold text-[#442d63] line-clamp-1 w-full">Loading Summons....</h1>
        </div>
        )
    }
  return (
    <section className='flex flex-col gap-10 px-6 md:px-20 py-24'>
        <div className='flex flex-wrap gap-x-8 gap-y-16'>
           {dataItems?.map((dataItem)=>(
            <InformationCard key={dataItem.Id} {...dataItem}/>
           ))} 
        </div>
    </section>
  )
}

export default MainCard