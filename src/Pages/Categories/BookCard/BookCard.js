import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const BookCard = ({ book }) => {
  const {
    img,
    book_name,
    date,
    location,
    orginal_price,
    resale_price,
    seller_dp,
    seller_name,
    years_of_use,
  } = book;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl m-5">
        <figure>
          <div className="w-1/2">
            <img src={img} alt="" />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book_name}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" htmlFor="booking-modal">
              Book Now
            </button>
          </div>
        </div>
      </div>
          
    </div>
  );
};

export default BookCard;
