import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `https://ju-book-express-server.vercel.app/myProducts?email=${user?.email}`;

  const { data: allProducts = [], refetch } = useQuery({
    queryKey: ["allProducts", user?.email],
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
  console.log(allProducts);
  const [products, setProducts] = useState(allProducts);
  const handleAdvertisement = (id) => {
    fetch(`https://ju-book-express-server.vercel.app/seller/myProduct/${id}`, {
      method: "PATCH",
      // headers: {
      //     authorization: `bearer ${localStorage.getItem('accessToken')}`
      // }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Add Product for Advertisement successfully.");
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete your product?"
    );
    if (proceed) {
      fetch(
        `https://ju-book-express-server.vercel.app/seller/myProduct/${id}`,
        {
          method: "DELETE",
          authorization: `Bearer ${localStorage.getItem("tourist-man-token")}`,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((pd) => pd._id !== id);
            setProducts(remaining);
            alert("Product deleted successfully");
            refetch();
          }
        });
    }
  };
  return (
    <div className="mx-20">
      <h3 className="text-3xl mb-5">My Products</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Advertisement</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allProducts &&
              allProducts?.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>
                    {" "}
                    <img
                      src={product.image}
                      alt=""
                      width="50px"
                      height=""
                      className=""
                    />{" "}
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.productStatus}</td>

                  <td>
                    {product.isAdvertised === "no" ? (
                      <>
                        <Link>
                          <button
                            onClick={() => handleAdvertisement(product._id)}
                            className="btn btn-primary btn-sm"
                          >
                            Make Advertisement
                          </button>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link>
                          <button className="btn btn-success btn-sm" disabled>
                            Advertised
                          </button>
                        </Link>
                      </>
                    )}

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
                  <td>
                    <button
                      onClick={() => handleDelete(product._id)}
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

export default MyProducts;
