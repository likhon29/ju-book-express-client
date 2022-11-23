import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BookCategories from '../BookCategories/BookCategories';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <BookCategories></BookCategories>
            <About></About>
        </div>
    );
};

export default Home;