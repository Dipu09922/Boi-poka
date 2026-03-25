import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Errorpage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        path:'/',
        loader:()=>fetch("boiPokaData.json"),
        Component:Home
      },
      {
        path:'/about',
        Component:About
      },
      {
        path:'/bookdetails/:id',
        Component:BookDetails
      }
    ]
  },
]);