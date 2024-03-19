import { useState } from 'react';
import './App.css';
import NavBar from './layout/nav-bar';
import { Outlet} from 'react-router-dom';
import LiveData from './layout/live-datas';
import "./index.css"


function App() {
  
  return (
    <div className='w-full max-h-svh  px-2'>
      <LiveData/>

      <div className='flex justify-content-between h-[85vh]'>
      <aside className=" sticky bg-slate-700 shadow-sm md:w-1/12  sm:w-4/12" > 
      <NavBar/>
      </aside>

      <main className='h overflow-y-auto'>
        <article>
          <div className=' m-2 md:w-11/12  sm:w-8/12'> 
         <Outlet/>              
          </div>
        </article>
      </main>
      </div>
    </div>
  )
}

export default App;
