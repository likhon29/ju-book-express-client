import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const AddProduct = () => {
  const [cid, setCid] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);
  console.log(user);
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const handleAddProduct = (data) => {
    const cat_name = data.category;
    console.log(cat_name);
    if (cat_name === "Job Preparation") {
        
          setCid(1);
          console.log(cid,"true")
      }
      console.log(cid,"cid")
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const date = new Date();
          const bookInfo = {
            seller_name: user.displayName,
            seller_email: user.email,
            name: data.bookName,
            image: imgData.data.url,
            price: data.price,
            oldPrice: data.oldPrice,
            location: data.location,
            time: data.time,
            date: date,
            number: data.number,
            category: data.category,
            
            condition: data.condition,
            description: data.description,
          };

          // save doctor information to the database
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(bookInfo),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.bookName} is added successfully`);
              navigate("/dashboard/myProducts");
            });
        }
      });
  };

  //   if (isLoading) {
  //     return <Loading></Loading>;
  //   }

  return (
    <div className="mx-auto w-3/4 p-7">
      <h2 className="text-4xl">Add A Book For Sale</h2>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="w-full mx-auto"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Book Name</span>
          </label>
          <input
            type="text"
            {...register("bookName", {
              required: "Book Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.bookName && (
            <p className="text-red-500">{errors.bookName.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Book Resale Price (Tk.)</span>
          </label>
          <input
            type="text"
            {...register("price", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="text"
            {...register("oldPrice", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.oldPrice && (
            <p className="text-red-500">{errors.oldPrice.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="text"
            {...register("number", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.number && (
            <p className="text-red-500">{errors.number.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Select Category</span>
          </label>
          <select
            {...register("category", { required: true })}
            className="select select-bordered w-full max-w-xs mt-3"
            //   defaultValue={"Select Book Category"}
          >
            <option value="" disabled>
              Select Book Category
            </option>
            <option onChange={() => setCid("1")} value="Job Preparation">
              Job Preparation
            </option>
            <option onChange={() => setCid("5")} value="Admission Test">
              Admission Test
            </option>

            <option onChange={() => setCid("2")} value="University Academic">
              University Academic
            </option>
            <option onChange={() => setCid("3")} value="Science Fiction">
              Science Fiction
            </option>
            <option onChange={() => setCid("4")} value="Novel and Story">
              Novel and Story
            </option>
            <option onChange={() => setCid("6")} value="Others">
              Others
            </option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Book Condition</span>
          </label>
          <select
            {...register("condition", { required: true })}
            className="select select-bordered w-full max-w-xs mt-3"
            defaultValue={"Good"}
          >
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
        </div>
        {/* <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Category ID</span>
          </label>
          <input
            type="text"
            {...register("cid", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.cid && <p className="text-red-500">{errors.cid.message}</p>}
        </div> */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Year of Purchase (Month)</span>
          </label>
          <input
            type="text"
            {...register("time", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.time && <p className="text-red-500">{errors.time.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description", {
              required: true,
            })}
            placeholder="About your product"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        <input
          className="btn btn-accent w-full mt-4"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
