import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisementItem = ({product}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        {
          product.productStatus !=='sold' && 
          
            <Link to={`/category/${product.category}`}>
            <figure><img src={product.image} width="80%" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {product.name}
                <div className="badge badge-secondary">Advertised</div>
              </h2>
              <p>{product.price} TK</p>
              <div className="card-actions justify-end">
                <div className="badge bg-neutral text-white badge-outline">{product.condition} Condition</div>
                <div className="badge badge-outline">{product.category}</div> 
              </div>
            </div>
          </Link>
           
          
        }
</div>
    );
};

export default AdvertisementItem;