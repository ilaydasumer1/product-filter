import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaCircle } from "react-icons/fa";

const ProductCard = () => {
  const [productData, setProductData] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    fetch('/product.json')
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center items-center">
      {productData &&
        productData.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-4 border-thickness rounded"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex flex-col gap-1">
              <img
                className="w-60 h-60 mx-auto"
                src={
                  hoveredId === product.id
                    ? "/images/tshirtback.jpg"
                    : "/images/tshirt.jpg"
                }
                alt="T-Shirt"
              />
              <span className="pt-3 pr-3 pl-3 w-60 flex">
                <h3 className="text-sm  font-mulish font-bold text-gray-800">
                  {product.title}{" "}
                  <span className="text-sm font-mulish font-medium text-gray-800">
                    {product.description}
                  </span>
                </h3>
              </span>
              <span className="pr-3 pl-3 flex flex-row gap-1">
                <FaCircle className="text-lime-100 text-base" />
                <FaCircle className="text-orange-100 text-base" />
                <FaCircle className="text-red-100 text-base" />
                <FaCircle className="text-orange-100 text-base" />
                <FaCircle className="text-sky-100	 text-base" />
              </span>
              <div className="pr-3 pl-3 flex flex-row font-mulish gap-1">
                <span className="text-sm font-mulish font-medium">4.4</span>
                <span className="text-sm flex flex-row items-center justify-center">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                </span>
                <span className="text-xs text-gray-400 font-mulish">
                  ({product.comments})
                </span>
              </div>
            </div>
            <div>
              <p className="pr-3 pl-3 pb-3 font-muslih font-bold text-base text-orange-500">
                {product.price} TL
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductCard;
