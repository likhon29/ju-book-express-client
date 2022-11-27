import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data  = useLoaderData();
    console.log("booking data",data)
    return (
        <div>
            <h3 className="text-4xl mx-20 my-5">Payment for <span className="text-5xl text-warning">{data.bookName }</span></h3>
        </div>
    );
};

export default Payment;