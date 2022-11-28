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
                    <h1 className="text-5xl font-bold">Sold Your Book Here!</h1>
                    <p className="py-6">this is an exciting platform to sold your unusalble book and shared with everyone</p>
                    {/* <PrimaryButton>Getting Started</PrimaryButton> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;