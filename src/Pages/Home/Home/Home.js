import React from 'react';
import About from '../About/About';
import Advertisement from '../Advertisement/Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import BookCategories from '../BookCategories/BookCategories';
import Contact from '../Contact.js/Contact';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <BookCategories></BookCategories>
            <Advertisement></Advertisement>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;