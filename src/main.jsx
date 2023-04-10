import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './components/Home/Home';
// import ErrorPage from './components/ErrorPage/ErrorPage';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import FeatureJob from './components/FeatureJob/FeatureJob';
import JobDetails from './components/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("/featurejob.json")
      },
      {
        path: 'job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/featurejob.json")
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
