import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import icon from "../../../Assets/images/images.png";
import toast from "react-hot-toast";
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

    seller_name,
    seller_email,
    seller_status,
    category,
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
      const res = await fetch(
        `https://ju-book-express-server.vercel.app/user/${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  const { data: sellerInfo = [] } = useQuery({
    queryKey: ["sellerInfo"],
    queryFn: async () => {
      const res = await fetch(
        `https://ju-book-express-server.vercel.app/user/${seller_email}`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(sellerInfo.status, "sellerInfo");
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleReportedItem = (id) => {
    fetch(`https://ju-book-express-server.vercel.app/addToReportedItem/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Report this item successfully.");
        }
      });
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} width="40%" alt="book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">Available</div>
          </h2>
          <p className="text-orange-500 text-3xl">{price} TK</p>
          <p>Old Price: {oldPrice} Tk</p>
          <p>{description}</p>

          <p className="flex">
            Seller: {seller_name + " " + sellerInfo.status}{" "}
            {sellerInfo.status === "Verified" && (
              <img
                src="https://e7.pngegg.com/pngimages/605/284/png-clipart-check-mark-computer-icons-green-tick-miscellaneous-angle-thumbnail.png"
                width="30px"
                alt=""
              />
            )}
          </p>

          <p>Seller Number: {number}</p>
          <p>Location: {location}</p>

          <p>
            Year of Use:
            {2022 - time ? (
              <>{2022 - time} years</>
            ) : (
              <>
                {" "}
                <span> lesser than 1 year</span>{" "}
              </>
            )}{" "}
            years
          </p>
          <p>Published:{date}</p>
          <div className="card-actions justify-end">
            <div className="badge  badge-outline">{condition} Condition</div>
            <div className="badge badge-outline">{category}</div>
          </div>
          <div className="flex justify-between">
            {book.isReported ? (
              <>
                <label className="btn btn-sm w-1/2" disabled>
                  Already Reported to Admin
                </label>
              </>
            ) : (
              <label
                className="btn btn-sm w-1/2"
                onClick={() => handleReportedItem(book._id)}
              >
                Report to Admin
              </label>
            )}

            {userInfo?.role === "buyer" && (
              <label
                htmlFor="my-modal"
                className="btn btn-sm "
                onClick={() => setSelectedBook(book)}
              >
                Book Now
              </label>
            )}
          </div>
        </div>
      </div>

      {/* <div className="card card-side bg-base-100 shadow-xl m-5">
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

          {book.isReported ? (
            <>
              <label className="btn" disabled>
                Already Reported to Admin
              </label>
            </>
          ) : (
            <label className="btn" onClick={() => handleReportedItem(book._id)}>
              Report to Admin
            </label>
          )}

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
      </div> */}

      {/* <div className="card w-96 bg-base-100 shadow-xl">
        {
          (product.productStatus ==='!sold') && 
          
            <>
            <figure><img src={product.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {product.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{product.price} TK</p>
              <div className="card-actions justify-end">
                <div className="badge bg-neutral text-white badge-outline">{product.condition} Condition</div>
                <div className="badge badge-outline">{product.category}</div> 
              </div>
            </div>
          </>
           
          
        }
</div> */}
    </div>
  );
};

export default BookCard;
