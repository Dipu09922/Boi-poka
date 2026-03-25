import React from 'react';
import Banner from '../../components/banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const BookData = useLoaderData();
    // console.log(BookData)
    return (
        <div>
            <Banner></Banner>
            <Books BookData={BookData}></Books>
        </div>
    );
};

export default Home;