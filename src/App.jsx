import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Components/Home'
import About from './Components/About'
import User from './Components/User'
import Layout from './Components/Layout'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import './App.css'


const router = createBrowserRouter ([

{
  path: '/',
  element: <Layout/>,
  children:[
{
  path:'/',
  element:<Home/>
},
{
  path:'about',
  element:<About/>
},
{
  path:'user',
  element:<User/>
},

],
},
]);

function App() {

  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
