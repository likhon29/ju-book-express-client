import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const ReportedItem = () => {
  const { user } = useContext(AuthContext);

  const url = `https://ju-book-express-server.vercel.app/admin/reportedProducts?isReported=yes`;

  const { data: allProducts = [], refetch } = useQuery({
    queryKey: ["allProducts"],
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

  const [products, setProducts] = useState(allProducts);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete reported product?"
    );
    if (proceed) {
      fetch(
        `https://ju-book-express-server.vercel.app/admin/reportedProducts/${id}`,
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
          }
        });
    }
  };
  return (
    <div className="mx-20">
      <h3 className="text-3xl mb-5">Reported Products</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
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
                  <td>{product.seller_name}</td>
                  <td>{product.seller_email}</td>

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

export default ReportedItem;

// {allProducts &&
//     allProducts?.map((product, i) => (
//       <tr key={product._id}>
//         <th>{i + 1}</th>
//         <td>
//           {" "}
//           <img
//             src={product.image}
//             alt=""
//             width="50px"
//             height=""
//             className=""
//           />{" "}
//         </td>
//         <td>{product.name}</td>
//         <td>{product.price}</td>
//         <td>{product.productStatus}</td>

//         <td>
//           {product.isAdvertised==='no' ?<>
//             <Link>
//             <button

//               className="btn btn-primary btn-sm"
//             >
//               Make Advertisement
//             </button>
//             </Link>
//           </> : <>

//           <Link>
//             <button

//               className="btn btn-success btn-sm"
//             disabled>
//               Advertised
//             </button>
//           </Link></>}

//           {/* {
//                           booking.price && !booking.paid && <Link
//                               to={`/dashboard/payment/${booking._id}`}
//                           >
//                               <button
//                                   className='btn btn-primary btn-sm'
//                               >Pay</button>
//                           </Link>
//                       }
//                       {
//                           booking.price && booking.paid && <span className='text-green-500'>Paid</span>
//                       } */}
//         </td>
//         <td>
//           <button  className="btn btn-warning btn-sm">Delete</button>
//         </td>
//       </tr>
//     ))}
