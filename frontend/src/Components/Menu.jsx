import React, { useContext, useState } from "react";
import { categoryItem } from "../assets/assets";
import { MenuContext } from "../Context/MenuContext.jsx";

const Menu = () => {
  const { products } = useContext(MenuContext);
  const [category, setCategory] = useState("All");

  return (
    <div className="px-4 py-16 max-w-7xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">
          Discover our Menu
        </h1>
      </div>

      {/* Categories */}
      <div className="text-center mb-12">
        <ul className="flex flex-wrap justify-center gap-6 list-none p-0 m-0">

          {categoryItem.map((item, index) => (
            <li
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.category_title ? "All" : item.category_title
                )
              }
              className={`cursor-pointer px-8 py-3 rounded-full text-sm font-medium transition-all duration-300
              border-2 border-dashed border-gray-500
              ${
                category === item.category_title
                  ? "bg-amber-400 text-black"
                  : "text-white hover:border-amber-400"
              }`}
            >
              {item.category_title}
            </li>
          ))}

        </ul>
      </div>

      {/* Menu Items */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {products.length > 0 ? (
          products
            .filter(
              (product) =>
                category === "All" || product.category === category
            )
            .map((product) => (
              <div
                key={product._id}
                className="flex items-center gap-6 p-6 border-2 border-dashed border-gray-600 rounded-2xl transition hover:shadow-lg"
              >

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-full"
                />

                {/* Content */}
                <div className="flex-1">

                  {/* Name + Line + Price */}
                  <div className="flex items-center w-full">
                    <h3 className="text-lg font-semibold text-white">
                      {product.name}
                    </h3>

                    <div className="flex-1 border-b border-amber-500 mx-4"></div>

                    <span className="text-lg font-semibold text-amber-500">
                      ${product.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                </div>
              </div>
            ))
        ) : (
          <p className="text-center text-gray-400 col-span-3">
            Nothing in the menu
          </p>
        )}

      </div>
    </div>
  );
};

export default Menu;