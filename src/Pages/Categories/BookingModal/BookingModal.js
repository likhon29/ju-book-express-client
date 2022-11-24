import React from 'react';

const BookingModal = () => {
    const handleBooking = () => {
        console.log("handle Booking");
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">title</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled  className="input w-full input-bordered " />
                        <select name="slot" className="select select-bordered w-full">
                            {
                               
                            }
                        </select>
                        <input name="name" type="text"  disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email"  disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;