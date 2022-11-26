import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ card }) => {
  const { _id,category } = card;
  return (
    <div className={`card text-white p-4   md:card-side shadow-xl bg-gradient-to-r from-primary to-secondary`}>
          <Link to={`/category/${category}`}>
          <h2 className="card-title">{category}</h2>
      </Link>
    </div>
  );
};
export default CategoryCard;
