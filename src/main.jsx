import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, json, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import Blog from './components/Blog/Blog.jsx'
import JobDetails from './components/JobDetails/JobDetails.jsx'
import JobCategoryDetails from './components/JobCategoryDetails/JobCategoryDetails.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    children:[
      {
        path:'/home',
        element: <Home></Home>
      },
      {
        path:'/applied-jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/jobs/:jobId',
        element: <JobDetails></JobDetails>,
        loader:()=>fetch('/jobs.json')
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
