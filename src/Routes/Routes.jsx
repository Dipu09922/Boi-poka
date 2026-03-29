import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Errorpage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';
import Readlist from '../pages/Readlist/Readlist';

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
        loader:()=>fetch("boiPokaData.json"),
        Component:BookDetails
      },
      {
        path:'/readlist',
        Component:Readlist,
        loader:()=>fetch("boiPokaData.json")
      }
    ]
  },
]);