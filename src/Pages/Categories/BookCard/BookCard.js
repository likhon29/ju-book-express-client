import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import icon from "../../../Assets/images/images.png";
const BookCard = ({ book, setSelectedBook }) => {
  const { user } = useContext(AuthContext);
  // console.log("from book card", user);

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
    seller_email,

    date,
    time,
  } = book;
  const {
    data: userInfo = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/user/${user.email}`);
      const data = await res.json();
      return data;
    },
  });
  const { data: sellerInfo = [] } = useQuery({
    queryKey: ["sellerInfo"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/user/${seller_email}`);
      const data = await res.json();
      return data;
    },
  });
  console.log(sellerInfo);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      {/* <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div> */}

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
          <div className="flex items-center justify-between">
            <p className="px-2">Seller: {seller_name}</p>{" "}
            {sellerInfo.status === "Verified" && (
              <span>
                <img src={icon} width="25px" alt="" />
              </span>
            )}{" "}
          </div>

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
