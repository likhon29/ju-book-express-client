import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";

const BookCard = ({ book, setSelectedBook }) => {
  const { user } = useContext(AuthContext);
  console.log("from book card", user);

  const {data: userInfo =[] ,refetch, isLoading} = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/user/${user.email}`);
        const data = await res.json();
        return data
    }
})
if(isLoading){
  return <Loading></Loading>
}
  const {
    image,
    name,
    condition,
    location,
    price,
    number,
    description,
    oldPrice,
    seller_dp,
    seller_name,
    date,
    time,
  } = book;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl m-5">
        <figure className="w-1/4 p-3 rounded-sm">
          <img src={image} alt="" className="" />
        </figure>
        <div className="card-body   items-center justify-between">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>Old Price:{oldPrice} Tk</p>
          <p>Original Price: {price} Tk</p>
          <p>Contact Number: {number}</p>
          <p>Location: {location}</p>
          <p>Condition: {condition}</p>
          <p>Year of Use:{time} Month</p>
          <p>Published:{date}</p>
          <p>Seller: {seller_name}</p>
          <img
            src={seller_dp}
            width="10%"
            height=""
            className="rounded-full"
            alt=""
          />
          {userInfo?.role === "buyer" && (
            <label
              htmlFor="my-modal"
              className="btn"
              onClick={() => setSelectedBook(book)}
            >
              Book Now
            </label>
          )}
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
