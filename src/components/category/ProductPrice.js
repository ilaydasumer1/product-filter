import React, { useState } from "react";
import { Range } from "react-range";
import { IoIosArrowDown } from "react-icons/io";


const ProductPrice = () => {
  // baslık asağısında 3, input aşağısında 2 lik boşluk
  const [values, setValues] = useState([50, 80]);
  const [isOpen, setIsOpen] = useState(false);

 const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col justify-center  border-t border-b">
      <div
        className=" hover:bg-gray-50 w-48 flex justify-between items-center py-3 cursor-pointer"
        onClick={toggleDropdown}
      >
        <h3 className="font-muslih font-bold text-sm text-gray-800"> Fiyat</h3>
        <IoIosArrowDown
          className={`${
            isOpen ? "text-orange-500" : "text-gray-500"
          } font-extrabold`}
        />{" "}
      </div>
      {isOpen && (
        <div className="pb-3 w-48 max-h-12 custom-scrollbar">
          <div className="flex flex-row justify-center gap-2">
            <input
              type="text"
              className=" mb-2 w-24 gray-background focus:outline-none p-1 font-muslih font-normal rounded text-gray-600 text-sm"
              value={values[0].toFixed(1)}
              readOnly
            />
            <input
              type="text"
              className="mb-2 w-24 gray-background focus:outline-none p-1 font-muslih font-normal rounded text-gray-600 text-sm"
              value={values[1].toFixed(1)}
              readOnly
            />
          </div>
          <div className="flex justify-center">
            <Range
              step={0.1}
              min={0}
              max={100}
              values={values}
              onChange={(newValues) => setValues(newValues)}
              renderTrack={({ props, children }) => (
                <div
                  className="little-height w-full bg-slate-900 rounded"
                  {...props}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  className="bg-white h-3 w-3 border-thickness border-orange-600 rounded-xl shadow-black"
                  {...props}
                />
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPrice;
