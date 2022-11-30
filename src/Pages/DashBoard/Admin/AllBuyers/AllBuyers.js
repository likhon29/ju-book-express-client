import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
const AllBuyers = () => {
  const { user } = useContext(AuthContext);

  const url = "https://ju-book-express-server.vercel.app/allBuyers?role=buyer";

  const { data: allBuyers = [], refetch } = useQuery({
    queryKey: ["allBuyers", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(allBuyers);
  const [buyers, setBuyers] = useState(allBuyers);
  const handleMakeAdmin = (id) => {
    fetch(`https://ju-book-express-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successful.");
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this sellers?"
    );
    if (proceed) {
      fetch(`https://ju-book-express-server.vercel.app/users/admin/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = buyers.filter((seller) => seller._id !== id);
            setBuyers(remaining);
            alert("User deleted successfully");
          }
        });
    }
  };
  return (
    <div className="mx-20">
      <h3 className="text-3xl mb-5">All Buyers</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Buyer Name</th>
              <th>Email</th>
              <th>Status</th>
              {/* <th>Advertisement</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allBuyers &&
              allBuyers?.map((buyers, i) => (
                <tr key={buyers._id}>
                  <th>{i + 1}</th>
                  <td>
                    {" "}
                    <img
                      src={buyers.image}
                      alt=""
                      width="50px"
                      height=""
                      className=""
                    />{" "}
                  </td>
                  <td>{buyers.name}</td>
                  <td>{buyers.email}</td>
                  <td>
                    {buyers?.role !== "admin" && (
                      <button
                        onClick={() => handleMakeAdmin(buyers._id)}
                        className="btn btn-xs btn-primary"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>

                  {/* <td> */}
                  {/* <button className="btn btn-primary btn-sm">Advertised</button> */}
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
                  {/* </td> */}
                  <td>
                    <button
                      onClick={() => handleDelete(buyers._id)}
                      className="btn btn-warning btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
