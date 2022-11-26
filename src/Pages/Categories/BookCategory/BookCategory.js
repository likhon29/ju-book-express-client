import React from 'react';

import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import CategoryCard from '../../Home/BookCategories/CategoryCard';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
const BookCategory = () => {
    

    const {data: categoriesName =[] ,refetch, isLoading} = useQuery({
        queryKey: ['categoriesName'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoryName');
            const data = await res.json();
            return data
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className="">
            <h1 className="text-5xl">Book Categories</h1>
            <div className="flex">
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 m-5'>
            {
                categoriesName.map(card => <CategoryCard
                    key={card._id}
                    card={card}
                ></CategoryCard>)
            }
                </div>
                <div className="">
                   
                </div>
            </div>
        </div>
    );
};

export default BookCategory;