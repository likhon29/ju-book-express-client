// import React from 'react';

// const Payment = () => {
//     return (
//         <div>
//              <h3 className="text-4xl text-warning">Payment for </h3>
//         </div>
//     );
// };

// export default Payment;








import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    // const navigation = useNavigation();
    const { bookName, price, bookingDate } = booking;
    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }
    return (
        <div className="flex  items-center justify-center mt-20  mx-auto  " >
            <div className="3/4 rounded shadow-xl bg-slate-200 p-10">
            <h3 className="text-4xl text-warning">Payment for {bookName}</h3>
            <p className="text-xl mt-5">Please pay <strong className="text-primary">Tk. {price}</strong> for your booking on {bookingDate.split('T')[0]}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
            </div>
           
        </div>
    );
};

export default Payment;