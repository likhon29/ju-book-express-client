import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertisementItem from "./AdvertisementItem";

const Advertisement = () => {
  const url = `https://ju-book-express-server.vercel.app/products?isAdvertised=yes`;

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
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
  return (
    <div>
      {/* <h1 className="text-5xl mt-10">Advertisement Product</h1> */}
      <div className="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map(
          (product) =>
            product.productStatus === "available" && (
              <AdvertisementItem
                product={product}
                key={product._id}
              ></AdvertisementItem>
            )
        )}
      </div>
    </div>
  );
};

export default Advertisement;
