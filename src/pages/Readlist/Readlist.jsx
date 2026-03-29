import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../BookDetails/Utilitiy/addToDB';
import Book from '../Book/Book';

const Readlist = () => {
    const [readList,setReadList] =useState([]);
    const Data = useLoaderData();
    
    useEffect(()=>{
        const storedBookData = getStoredBook();
        const convertedStoredBook = storedBookData.map(id=>parseInt(id));
        const myReadList = Data.filter(book=>convertedStoredBook.includes(book.bookId));
        setReadList(myReadList);
    },[])
    return (
        <div>
              <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>My Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I Read {readList.length}</h2>
      <div className='max-w-3xl mx-auto space-y-4'>
        {
       readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
      }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>My wishList</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Readlist;