import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ card }) => {
  const { _id,category_name } = card;
  return (
    <div className={`card text-white p-4   md:card-side shadow-xl bg-gradient-to-r from-primary to-secondary`}>
          <Link to={`/category/${_id}`}>
          <h2 className="card-title">{category_name}</h2>
      </Link>
    </div>
  );
};
export default CategoryCard;
