import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/Home/About.jsx'
import Class from './Components/Class/Class.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Teacher from './Components/Teacher/Teacher.jsx'


const routes=createBrowserRouter([
  {
    path: '/',
    element:<App></App>,
    children:[
      {
      path:'/',
      element:<Home></Home>
      },
      {
        path:'About',
        element:<About></About>
      },
      {
        path:'Class',
        element:<Class></Class>
      },
      {
        path:'Teacher',
        element:<Teacher></Teacher>
      },
      {
        path:'Contact',
        element:<Contact></Contact>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={routes}>

   </RouterProvider>
  </React.StrictMode>,
)
