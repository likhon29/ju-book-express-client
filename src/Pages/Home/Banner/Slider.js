import React from 'react';
import img2 from '../../../Assets/images/bcs.jpg';
import img1 from '../../../Assets/images/HP_4-scaled-e1656494430709.jpg';
import img3 from '../../../Assets/images/fitted.jpg';
import img4 from '../../../Assets/images/c-book.jpg';
import img5 from '../../../Assets/images/compact.jpg';
import img6 from '../../../Assets/images/dsa.jpg';
import SliderItem from './SliderItem';
const Slider = () => {
    const sliderData = [
        {
            image: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: img5,
            prev: 4,
            id: 5,
            next: 6
        },
        {
            image: img6,
            prev: 5,
            id: 6,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full py-10">
        {
            sliderData.map(slide => <SliderItem
                key={slide.id}
                slide={slide}
            ></SliderItem>)
        }
        
    </div>
    );
};

export default Slider;