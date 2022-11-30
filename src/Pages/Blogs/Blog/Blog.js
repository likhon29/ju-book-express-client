import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
    return (
        <div className="card card-compact w-100 bg-base-100 shadow-xl">
        <figure>
          <img src={blog.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">{blog.title}</h2>
                
                <p>{ blog.description?.length>1000 ?<><span> {blog.description.slice(0,1200)}</span><Link to={``}><button className="btn btn-link">Learn More</button></Link> </>:  blog.description    }</p>
             <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>
    );
};

export default Blog;