import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log(bookings);
    return (
        <div>
        <h3 className="text-3xl mb-5">My Orders</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Book Name</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Seller Name</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings &&
                        bookings?.map((booking, i) => <tr key={booking._id}>
                            <th>{i + 1}</th>
                            <td>{booking.bookName}</td>
                            <td>{booking.resale_price}</td>
                            <td>{booking.bookingDate}</td>
                            <td>{booking.seller_name}</td>
                            <td>
                            <button
                                            className='btn btn-primary btn-sm'
                                        >Pay</button>
                                {/* {
                                    booking.price && !booking.paid && <Link
                                        to={`/dashboard/payment/${booking._id}`}
                                    >
                                        <button
                                            className='btn btn-primary btn-sm'
                                        >Pay</button>
                                    </Link>
                                }
                                {
                                    booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                } */}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrders;