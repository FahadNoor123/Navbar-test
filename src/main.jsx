
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import About from './components/about/About'
import Home from './components/home/Home.jsx'
import Layout from './Layout.jsx';
import Contact from './components/contact/contact.jsx'
import { Route } from 'react-router-dom'




// const router=createBrowserRouter([
//   {
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path: "",
//       element:<Home/>
//     },{
//       path:"about",
//       element:<About/>
//     },{
//       path:"contact",
//       element:<Contact/>
//     }
//   ]
// }
// ])
   

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      

   
    
    
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
