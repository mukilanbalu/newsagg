import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page.jsx';
import World from './pages/world';
import India from './pages/india';
import Sports from './pages/sports';
import Tech from './pages/tech';
const API_END_POINT =  "https://newaggsrvr.onrender.com";
import "./index.css";


const newsFetch = async ()=>{
    let data = await fetch(
      `${API_END_POINT}/news`
    );
    return data.json();
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    loader: newsFetch,
    children:[
      {
        element: <World />,
        path: "/world",
        loader: newsFetch,
        errorElement: <ErrorPage />,
        shouldRevalidate: () => false,
      },
      {
        path: "/india",
        element: <India/>,
        errorElement: <ErrorPage/>
      },
      {
        path: "/sports",
        element: <Sports/>,
        errorElement: <ErrorPage/>
      },
      {
        path: "/tech",
        element: <Tech/>,
        errorElement: <ErrorPage/>
      },
    ]
  },
   
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
