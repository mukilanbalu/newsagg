import React,{useState, useEffect} from 'react'
import NewsCard from '../common/news-cards';
import { techNews } from '../API';

const Tech = () => {
  const [data, setdata] =useState([]);


  const getData = async()=> setdata(await  techNews());

  useEffect(()=>{
    getData()
  },[])

    return (
      <div className='grid  grid-flow-row gap-4 auto-rows-min xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

      <NewsCard
      data={data}
       />
      </div>
    )   
}

export default Tech;
