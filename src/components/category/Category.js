import React, { useState, useEffect } from "react";
import ProductType from "./ProductType";
import ProductPrice from "./ProductPrice";
import ProductBody from "./ProductBody";
import ProductGender from "./ProductGender";
import { IoIosArrowDropdown } from "react-icons/io";


const Category = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      // 768px altında filtreyi kapalı tut, üstünde açık
      if (window.innerWidth < 768) {
        setIsFilterOpen(false);
      } else {
        setIsFilterOpen(true);
      }
    };

    // İlk yükleme ve her pencere boyutu değişikliğinde çalıştır
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isFilterOpen && (
        <div className="flex flex-col overflow-y-auto overflow-x-hidden max-h-screen">
          <ProductType className="py-2" />
          <ProductBody className="py-2" />
          <ProductPrice className="py-2" />
          <ProductGender className="py-2" />
        </div>
      )}
    </div>
  );
};

export default Category;
