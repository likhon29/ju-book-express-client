import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
const AllSellers = () => {
  const { user } = useContext(AuthContext);

  const url = "http://localhost:5000/allSellers?role=seller";

  const { data: allSellers = [] ,refetch} = useQuery({
    queryKey: ["allSellers", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        // headers: {
        //     authorization: `bearer ${localStorage.getItem('accessToken')}`
        // }
      });
      const data = await res.json();
      return data;
    },
  });
    const [sellers, setSellers] = useState(allSellers);
    console.log(allSellers);
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
            }
        })
    }
    const handleDelete = (id) => {
        const proceed = window.confirm(
          "Are you sure, you want to delete this sellers?"
        );
        if (proceed) {
          fetch(`http://localhost:5000/users/admin/${id}`, {
            method: "DELETE",
            // authorization: `Bearer ${localStorage.getItem("tourist-man-token")}`,
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const remaining = sellers.filter((sellers) => sellers._id !== id);
                setSellers(remaining);
                alert("User deleted successfully");
              }
            });
        }
      };
  return (
    <div>
      <h3 className="text-3xl mb-5">All Sellers</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Seller Name</th>
              <th>Email</th>
              <th>Verification</th>
              <th>Status</th>
              {/* <th>Advertisement</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allSellers &&
              allSellers?.map((sellers, i) => (
                <tr key={sellers._id}>
                  <th>{i + 1}</th>
                  <td>
                    {" "}
                    <img
                      src={sellers.image}
                      alt=""
                      width="50px"
                      height=""
                      className=""
                    />{" "}
                  </td>
                  <td>{sellers.name}</td>
                  <td>{sellers.email}</td>
                  <td>
                    <button className="btn btn-primary btn-sm">
                     Not Verified
                    </button>
                  </td>
                  <td>{ sellers?.role !== 'admin' && <button onClick={() => handleMakeAdmin(sellers._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>

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
                    <button onClick={()=>handleDelete(sellers._id)} className="btn btn-warning btn-sm">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
