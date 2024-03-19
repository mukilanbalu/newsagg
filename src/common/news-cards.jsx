
import React, { useState } from "react";
const NewsCard = ({ data }) => {
    const [showStates, setShowStates] = useState(Array(data?.articles?.length).fill(false));

    const handleShowToggle = (index) => {
        const newShowStates = [...showStates];
        newShowStates[index] = !newShowStates[index];
        setShowStates(newShowStates);
    };

    return data?.articles?.map((article, index) => <> <div
        className={`bg-gray-100  border-solid
 text-black hover:shadow-md  hover:shadow-green-300 max-h-93
 flex flex-col align-middle justify-evenly rounded-md transition-all ease-linear  ${!showStates[index] ? "visible" : "hidden"}`}
        key={Math.random() + index}>

        <div className=' w-full '>
            <img className='max-w-full max-h-40  min-h-40 mx-auto px-4' src={article.urlToImage} />
        </div>
        <div className='p-2 h-max bg-slate-400'>
            <div className='text-center  overflow-ellipsis  w-full  min-h-fit text-4l text-wrap '>
                {article.title}<br></br>
                - <span className='font-extralight italic text-right' > {article?.publishedAt.split('T')[0]} {article.source.name}</span>
            </div>
            <span onClick={() => { handleShowToggle(index) }} className='text-right underline italic font-extralight w-1/12 float-right mx-3 hover:cursor-pointer'>
                Read
            </span>
        </div>
    </div>


        <div
            className={` bg-gray-100  border-solid
          text-black hover:shadow-md  hover:shadow-green-300  h-93 max-h-93
            flex flex-col align-middle justify-evenly rounded-md transition-all ease-linear ${showStates[index] ? "visible" : "hidden"}`}
            key={`desc` + index}>
            <p className='text-left font-medium text-wrap p-2 h-40'>
                {article.description}
            </p>


            <div className='p-2 h-max bg-slate-400 flex justify-end '>
                <div onClick={() => { handleShowToggle(index) }} className=' text-right underline italic font-extralight  float-right mx-3 hover:cursor-pointer'>
                    Read less
                </div>
                <a href={article.url} target='_blank' className=' text-right underline italic font-extralight  float-right mx-3 hover:cursor-pointer'>
                    Read More...
                </a>
            </div>
        </div>
    </>)
}



export default NewsCard;