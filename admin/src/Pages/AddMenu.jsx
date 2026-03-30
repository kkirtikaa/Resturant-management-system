import React, { useState } from "react";
import upload_img from "../assets/upload_img.png";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const AddMenu = ({ token }) => {

  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("");

  const OnSubmitHandler = async (e) => {
    e.preventDefault();

    if (!name || !description || !price) {
      toast.error("Please fill all fields");
      return;
    }

    try {

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);

      if (image) {
        formData.append("image", image);
      }

      console.log("Sending data to:", backendUrl);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        {
          headers: {
            token: token,
          },
        }
      );

      console.log("Response:", response.data);

      if (response.data.success) {
        toast.success("Menu Added Successfully");

        setName("");
        setDescription("");
        setPrice("");
        setCategory("All");
        setImage(false);

      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log("Error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-[70%] ml-[max(5vw,25px)] mt-[50px] text-gray-600 text-[16px]">

      <form onSubmit={OnSubmitHandler} className="flex flex-col gap-5">

        <div>
          <p className="mb-2">Upload Image</p>

          <label htmlFor="image">
            <img
              src={!image ? upload_img : URL.createObjectURL(image)}
              alt=""
              className="w-[120px] cursor-pointer"
            />

            <input
              type="file"
              id="image"
              hidden
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
        </div>

        <div>
          <p className="mb-2">Product Name</p>

          <input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[max(40vw,280px)] border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <p className="mb-2">Product Description</p>

          <input
            type="text"
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-[max(40vw,280px)] border border-gray-300 rounded p-2"
          />
        </div>

        <div className="flex gap-6">

          <div>
            <p className="mb-2">Product Category</p>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded p-2"
            >
              <option value="All">All</option>
              <option value="Spaghetti">Spaghetti</option>
              <option value="Pizza">Pizza</option>
              <option value="Rice">Rice</option>
              <option value="Noodles">Noodles</option>
              <option value="Chicken">Chicken</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>

          <div>
            <p className="mb-2">Product Price</p>

            <input
              type="number"
              placeholder="40"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border border-gray-300 rounded p-2 w-[120px]"
            />
          </div>

        </div>

        <button
          type="submit"
          className="w-[160px] h-[40px] bg-orange-500 text-white rounded"
        >
          Add Menu
        </button>

      </form>

    </div>
  );
};

export default AddMenu;