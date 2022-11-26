import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/myProducts?email=${user?.email}`;

  const { data: products = [] } = useQuery({
    queryKey: ["products", user?.email],
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
  console.log(products);
  return (
    <div>
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
            {products &&
              products?.map((product, i) => (
                <tr key={products._id}>
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
                  <td>Available</td>

                  <td>
                    <button className="btn btn-primary btn-sm">Advertised</button>
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
                      <td><button className="btn btn-warning btn-sm">Delete</button></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
