import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../BookDetails/Utilitiy/addToDB';
import Book from '../Book/Book';

const Readlist = () => {
    const [readList,setReadList] =useState([]);
    const Data = useLoaderData();
     
    const [sort,setSort] = useState("");
    const handleSort = (type)=>
    {
      setSort(type);
       if(type==='pages')
      {
                    const sortedBooksBypage = [...readList.sort((a,b)=>a.totalPages-b.totalPages)]
              setReadList(sortedBooksBypage);
            
      }
       if(type==='ratings')
      {
                    const sortedBooksByRatings = [...readList.sort((a,b)=>a.rating-b.rating)]
              setReadList(sortedBooksByRatings);
        
      }
    }

    
    useEffect(()=>{
        const storedBookData = getStoredBook();
        const convertedStoredBook = storedBookData.map(id=>parseInt(id));
        const myReadList = Data.filter(book=>convertedStoredBook.includes(book.bookId));
        setReadList(myReadList);
    },[])
    return (
      
        <div>
          <div className="dropdown items-center">
  <div tabIndex={0} role="button" className="btn m-1">Sort By : {sort?sort:""}</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("pages")}>Sort By Pages</a></li>
    <li><a onClick={()=>handleSort("ratings")}>Sort By Ratings</a></li>
  </ul>
</div>
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