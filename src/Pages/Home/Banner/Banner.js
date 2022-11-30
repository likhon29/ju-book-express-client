import React from 'react';
import img from '../../../Assets/images/HP_4-scaled-e1656494430709.jpg'
import Slider from './Slider';
const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img src={img} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' /> */}
                <Slider></Slider>
                <div>
                    <h1 className="text-5xl font-bold text-orange-600 ">Resale Your Book Here!</h1>
                    <p className="py-6">This is an exciting platform to resale your unusable book and get a good experience.</p>
                    {/* <PrimaryButton>Getting Started</PrimaryButton> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;