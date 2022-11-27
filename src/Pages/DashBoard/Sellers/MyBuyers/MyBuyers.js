import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const MyBuyers = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/myBuyers?email=${user.email}`;

  const { data: myBuyers = [], refetch } = useQuery({
    queryKey: ["myBuyers", user?.email],
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
  //   const [sellers, setSellers] = useState(allSellers);

      console.log(myBuyers);
  return (
    <div className="mx-20">
      <h3 className="text-3xl mb-5">My Buyers</h3>
      <div className="overflow-x-auto">
        <table className="table w-full " >
          <thead >
            <tr >
              <th></th>
              
              
              {/* <th>Photo</th> */}
              <th>Buyer Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Product</th>
              {/* <th>Advertisement</th> */}
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {myBuyers &&
              myBuyers?.map((buyers, i) => (
                <tr key={buyers._id}>
                  <th>{i + 1}</th>
                  
                  
                  <td>{buyers.buyerName}</td>
                  <td>{buyers.buyerEmail}</td>
                  <td>{buyers.buyerPhone}</td>
                  <td>{buyers.buyerLocation}</td>
                  <td>{buyers.bookName}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBuyers;

//     const handleMakeAdmin = id => {
//         fetch(`http://localhost:5000/users/admin/${id}`, {
//             method: 'PUT',
//             headers: {
//                 authorization: `bearer ${localStorage.getItem('accessToken')}`
//             }
//         })
//         .then(res => res.json())
//         .then(data => {
//             if(data.modifiedCount > 0){
//                 toast.success('Make admin successful.')
//                 refetch();
//             }
//         })
//     }
//     const handleDelete = (id) => {
//         const proceed = window.confirm(
//           "Are you sure, you want to delete this sellers?"
//         );
//         if (proceed) {
//           fetch(`http://localhost:5000/users/admin/${id}`, {
//             method: "DELETE",
//             // authorization: `Bearer ${localStorage.getItem("tourist-man-token")}`,
//           })
//             .then((res) => res.json())
//             .then((data) => {
//               if (data.deletedCount > 0) {
//                 const remaining = sellers.filter((sellers) => sellers._id !== id);
//                 setSellers(remaining);
//                 alert("User deleted successfully");
//               }
//             });
//         }
//   };
//   const handleVerify=(id) => {
//     fetch(`http://localhost:5000/users/seller/${id}`, {
//       method: 'PUT',
//       // headers: {
//       //     authorization: `bearer ${localStorage.getItem('accessToken')}`
//       // }
//   })
//   .then(res => res.json())
//   .then(data => {
//     if (data.modifiedCount > 0) {

//           toast.success('User Verified successfully.')
//           refetch();
//       }
//   })
//   }
