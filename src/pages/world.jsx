import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../common/news-cards';



const World = () => {
  const data = useLoaderData();
  
  return (<>
          <div className='grid  grid-flow-row gap-4 auto-rows-min xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

  <NewsCard 
     data={data}
     />
    </div>
  </>
  )
}

export default World;