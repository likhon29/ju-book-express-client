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
      {/* <p className="text-secondary text-3xl p-4">
        Available Books:{categoryData.length}
      </p> */}

     {categoryData.length ?  <div className="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5">
        
        {categoryData.map((book) => (
          book.productStatus !== 'sold' &&
          <BookCard book={book} key={book._id} setSelectedBook={setSelectedBook}></BookCard>
        ))}
      </div> :
        <>
          <h1 className="text-5xl">No Book available for sale</h1>
      </>}
      
      {
        selectedBook && 
        <BookingModal selectedBook={selectedBook} setSelectedBook={setSelectedBook}></BookingModal>
      }
      
    </div>
  );
};

export default CategoryDetails;
