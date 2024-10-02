import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

//no problem
const FilterTop = () => {
const [isOpen, setIsOpen] = useState(false);
const [selectedOption, setSelectedOption] = useState("Önerilen sıralama");

const options = [
  "En düşük fiyat",
  "En yüksek fiyat",
  "En yeniler",
  "En çok satanlar",
  "En çok beğenilenler",
  "En çok değerlendirilenler",
];
 
const toggleDropdown = () => setIsOpen(!isOpen);
const selectOption = (option) => {
  setSelectedOption(option);
  setIsOpen(false);
};

return (
  <div className="font-muslih text-sm justify-center items-center">
    <button
      onClick={toggleDropdown}
      className="text-sm font-semibold bg-white text-gray-600 py-2 px-4 gap-x-2 rounded-lg inline-flex items-center border border-gray-300"
    >
      <span className="text-sm">
        {isOpen ? (
          <CiMenuBurger className="font-extrabold text-orange-600" />
        ) : (
          <CiMenuBurger className="font-extrabold text-orange-600 rotate-180" />
        )}
      </span>
      {selectedOption}
    </button>
    {isOpen && (
      <ul className="absolute bg-white border border-gray-300 shadow-md rounded-lg mt-1">
        {options.map((option, index) => (
          <li
            key={index}
            className={`py-2 px-4 hover:bg-gray-100 hover:text-orange-600 hover:font-bold cursor-pointer text-gray-600 ${
              selectedOption === option ? "bg-gray-100 font-bold" : ""
            }`}
            onClick={() => selectOption(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    )}
  </div>
);
};

 export default FilterTop;
