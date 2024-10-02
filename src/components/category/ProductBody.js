import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ProductBody = () => {
  const [product, setProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
     fetch("/filters-body.json")
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
          Ürün Bedeni
        </h3>
        <IoIosArrowDown
          className={`${
            isOpen ? "text-orange-500" : "text-gray-500"
          } font-extrabold`}
        />{" "}
      </div>
      {isOpen && (
        <div className="w-48 pb-3">
          <input
            placeholder="Kategori ara"
            className="mb-2 bg-gray-100 focus:outline-none p-1 font-muslih font-normal rounded text-gray-600 text-sm w-full"
          />
          <div className="flex flex-col gap-1 overflow-y-scroll max-h-40  custom-scrollbar">
            {product &&
              product.map((product) => (
                <div
                  className="flex flex-row items-center gap-1"
                  key={product.id}
                >
                  <input
                    className="form-checkbox h-4 w-4 text-sm"
                    type="checkbox"
                    id={product.id}
                  />
                  <label
                    className="font-muslih font-light text-sm"
                    htmlFor={product.id}
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

export default ProductBody;
