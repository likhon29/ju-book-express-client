import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import BookingModal from "../BookingModal/BookingModal";

const CategoryDetails = () => {
  const categoryData = useLoaderData();
  // console.log(categoryData);
  const { category } = categoryData[0];
  const [selectedBook, setSelectedBook] = useState(null);
  return (
    <div>
      <h1 className="text-primary text-5xl p-3">Book List for {category}</h1>
      <p className="text-secondary text-3xl p-4">
        Available Books:{categoryData.length}
      </p>

      <div className="w-3/4 mx-auto">
        {categoryData.map((book) => (
          <BookCard book={book} key={book._id} setSelectedBook={setSelectedBook}></BookCard>
        ))}
      </div>
      {/* {selectedBook && (
        <BookingModal selectedBook={selectedBook} setSelectedBook={setSelectedBook}></BookingModal>
      )} */}
      {
        selectedBook && 
        <BookingModal selectedBook={selectedBook} setSelectedBook={setSelectedBook}></BookingModal>
      }
      
    </div>
  );
};

export default CategoryDetails;
