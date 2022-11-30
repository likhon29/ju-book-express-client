import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const BookingModal = ({ selectedBook, setSelectedBook }) => {
  console.log("Modal info", selectedBook);
  const {
    _id,
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
  } = selectedBook;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const bookingDate = new Date();

    const bookingInfo = {
      book_id: selectedBook._id,
      bookName: selectedBook.name,
      image: selectedBook.image,
      buyerName: name,
      buyerEmail: email,
      buyerPhone: phone,
      buyerLocation: location,
      bookingDate,
      seller_name,
      seller_email,
      price,
    };
    console.log(bookingInfo);

    fetch("https://ju-book-express-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",

        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setSelectedBook(null);
          // setIsBooked(true);
          navigate("/dashboard/myOrders");
          toast.success("Booking confirmed");
          // refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setSelectedBook(null)}
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="email"
              type="text"
              disabled
              value={user?.email}
              className="input w-full input-bordered"
            />
            <input
              name="name"
              type="email"
              disabled
              value={user?.displayName}
              className="input w-full input-bordered"
            />
            <input
              name="bookName"
              type="text"
              defaultValue={name}
              readOnly={true}
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="price"
              defaultValue={price + " TK"}
              readOnly={true}
              className="input w-full input-bordered "
            />

            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
