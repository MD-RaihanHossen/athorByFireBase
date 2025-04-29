import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//for react router dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Registration from './Components/Registration/Registration.jsx';


const router = createBrowserRouter([
  {
    path : "/",
    element: <App></App>, 
    children: [
      {
        path : "/",
        element: <Home></Home>,
      },
      {
        path : "/Registration",
        element: <Registration></Registration>
      },
      {
        path : "/about",
        element: <Home></Home>,
      },
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
