import './App.css';
import React from "react";
import ProductCard from "./components/productcard/ProductCard";
import Category from "./components/category/Category";
import FilterTop from "./components/filtertop/FilterTop";
//category js içerisinde productType ve productPrice, productPrice, productGender adında  tane komponent var.
const ProductFilter = () => {
  return (
    <div className="flex flex-col justify-center">
      <FilterTop />
      <div className="flex flex-row justify-center gap-x-6">
        <Category />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductFilter;

