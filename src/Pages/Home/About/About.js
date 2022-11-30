import React from 'react';
import person from '../../../Assets/images/logo1.png'
import parts from '../../../Assets/images/HP_4-scaled-e1656494430709.jpg'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={parts}  alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className="text-2xl font-bold text-orange-600">About Us</p>
                    <h1 className="my-5 text-5xl font-bold">
                        <span className="text-orange-600">JU BOOK EXPRESS</span>  <br />
                        resale your unusable book<br />
                        with trusted policy</h1>
                    <p className="py-6">This is a book resale platform where your can easily sale their books with secure policies.</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;