import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ProductGender = () => {
  const [product, setProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("/filters-gender.json")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col justify-center border-t border-b">
      <div
        className="hover:bg-gray-50 w-48 flex justify-between items-center py-3 cursor-pointer"
        onClick={toggleDropdown}
      >
        <h3 className="font-muslih font-bold text-sm text-gray-800">
          {" "}
          Cinsiyet
        </h3>
        <IoIosArrowDown
          className={`${
            isOpen ? "text-orange-500" : "text-gray-500"
          } font-extrabold`}
        />{" "}
      </div>
      {isOpen && (
        <div className="pb-3 w-48 max-h-12">
          <div className="flex flex-col gap-1">
            {product &&
              product.map((product) => (
                <div className="flex flex-row items-center gap-1">
                  <input
                    className="form-checkbox h-4 w-4 text-sm"
                    type="checkbox"
                  />
                  <label
                    className="font-muslih font-light text-sm"
                    htmlFor="urunadi"
                  >
                    {product.title}
                  </label>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGender;
