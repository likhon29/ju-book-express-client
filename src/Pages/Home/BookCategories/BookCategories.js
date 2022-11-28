import React from "react";
import CategoryCard from "./CategoryCard";

import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
const BookCategories = () => {
  const {
    data: categoriesName = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["categoriesName"],
    queryFn: async () => {
      const res = await fetch(
        "https://ju-book-express-server.vercel.app/categoryName"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="">
      <h1 className="text-5xl">Book Categories</h1>
      <div className="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {categoriesName.map((card) => (
          <CategoryCard key={card._id} card={card}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
