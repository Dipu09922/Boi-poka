import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from './Utilitiy/addToDB';

const BookDetails = () => {
    const {id} = useParams();
    const ID = parseInt(id);
    // console.log(typeof ID);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId===ID);
    const {bookName , image} = singleBook;

    const handleMarkAsRead=(id)=>
    {
        addToStoredDB(id);
    }
    
    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h2>{bookName}</h2>
            <button onClick={()=>handleMarkAsRead(id)} class="btn btn-primary m-2">Mark As Read</button>
            <button class="btn btn-accent">Add To Wishlist</button>
        </div>
    );
};

export default BookDetails;