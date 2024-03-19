import React,{useEffect, useState} from 'react'
import { indiaNews } from '../API'
import NewsCard from '../common/news-cards';

const India = () => {
  const [data, setdata] =useState([]);


  const getData = async()=> setdata(await  indiaNews());

  useEffect(()=>{
    getData()
  },[])

    return (
      <div className='grid  grid-flow-row  gap-4 auto-rows-min xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
      <NewsCard
      data={data}
       />
      </div>
    )   
}

export default India;