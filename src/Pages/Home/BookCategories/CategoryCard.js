import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ card }) => {
  const { id,name, description, icon, bgClass } = card;
  return (
    <div className={`card text-white p-4   md:card-side shadow-xl ${bgClass}`}>
          <Link to={`/category/${id}`}>
          <h2 className="card-title">{name}</h2>
      </Link>
    </div>
  );
};
export default CategoryCard;
