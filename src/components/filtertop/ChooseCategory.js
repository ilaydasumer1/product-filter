import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
//no problem
const ChooseCategory = () => {
  const [category, setCategory] = useState(null);

   useEffect(() => {
     fetch("/category.json")
       .then((response) => response.json())
       .then((data) => setCategory(data));
   }, []);

  return (
    <div className="font-muslih font-muslih text-sm font-normal flex flex-row">
      {category &&
        category.map((category) => (
          <div
            className="flex flex-row justify-center items-center cursor-pointer	"
            key={category.id}
          >
            <a>{category.title}</a>
            <span>
              <MdKeyboardArrowRight className="text-xl text-orange-400 font" />
            </span>
          </div>
        ))}
    </div>
  );
};

export default ChooseCategory;
