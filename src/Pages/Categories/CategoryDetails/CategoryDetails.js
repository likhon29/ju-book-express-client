import React from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import BookingModal from "../BookingModal/BookingModal";

const CategoryDetails = () => {
  const categoryData = useLoaderData();
    console.log(categoryData);
    const {category_name,Books} = categoryData
  return (
    <div>
          <h1 className="text-primary text-5xl p-3">Book List for {category_name} </h1> 
          <p className="text-secondary text-3xl p-4">Available Books:{Books.length}</p>
          <div className="">
              {
                  Books.map(book=><BookCard book={book} key={book._id}></BookCard>)
              }
          </div>
          {
                
                <BookingModal
                    
                ></BookingModal>
            }
    </div>
  );
};

export default CategoryDetails;
