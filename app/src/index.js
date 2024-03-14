import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import {createBrowserRouter, Form, RouterProvider,} from "react-router-dom";
import Booking from './pages/Booking';
import Indicator from './pages/Indicator';
import Finance from './pages/Finance';
import Manual from './pages/Manual';
import DataForms from './pages/DataForms';
import Policy from './pages/Policy';
import Agency from './pages/Agency';
import UploadNews from './pages/UploadNews';
import NewsList from './pages/NewsList';
import NewsList1 from './pages/NewsList1';
import NewsList2 from './pages/NewsList2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/booking",
    element: <Booking />,
  },{
    path: "/indicator",
    element: <Indicator />,
  },{
    path: "/finance",
    element: <Finance />,
  },{
    path: "/manual",
    element: <Manual />,
  },{
    path: "/dataforms",
    element: <DataForms />,
  },{
    path: "/policy",
    element: <Policy />,
  },{
    path: "/agency",
    element: <Agency />,
  },{
    path: "/uploadnews",
    element: <UploadNews />,
  },{
    path: "/newlist",
    element: <NewsList />,
  },{
    path: "/newlist2",
    element: <NewsList1 />,
  },{
    path: "/newlist3",
    element: <NewsList2 />,
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
