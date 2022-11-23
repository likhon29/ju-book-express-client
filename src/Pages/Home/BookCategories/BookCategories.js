import React from 'react';
import CategoryCard from './CategoryCard';
import clock from '../../../Assets/images/logo1.png';
import marker from '../../../Assets/images/logo1.png';
import phone from '../../../Assets/images/logo1.png';
const BookCategories = () => {
    const categoriesData = [
        {
            id: 1,
            name: 'Job Preparation Book',
            // description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Academic Books',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Skill Development Book',
            // description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 4,
            name: 'English Novel Book',
            // description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-accent'
        },
        {
            id: 5,
            name: 'Science Fiction Book',
            // description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 6,
            name: 'Admission Test Book',
            // description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-accent'
        },

    ]

    return (
        <div className="">
            <h1 className="text-5xl">Book Categories</h1>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                categoriesData.map(card => <CategoryCard
                    key={card.id}
                    card={card}
                ></CategoryCard>)
            }
        </div>
        </div>
    );
};

export default BookCategories;