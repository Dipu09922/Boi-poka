// import React, { useEffect, useState } from 'react';

import { Suspense } from "react";
import Book from "../Book/Book";


const Books = ({BookData}) => {
    // const [AllBooks,setAllBooks] = useState([]);

    // const BookPromise = fetch("boiPokaData.json")
    // .then (res=>res.json())
    
    return (
        <div>
            <h1 className='text-3xl font-bold text-center p-6'>Books</h1>
            <Suspense fallback={<p>loadi......</p>}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
             BookData.map(singleBook=><Book singleBook={singleBook} key={singleBook.bookId}></Book>)
            }
            </div>
            </Suspense>
            
        </div>
    );
};

export default Books;