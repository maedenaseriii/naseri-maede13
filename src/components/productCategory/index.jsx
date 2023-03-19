import React from "react";
import SideBar from "../sidebarCategory";
import CategoryProduct from "./CategoryProduct";

const ProductCategory = () => {
  return (
    <div className="w-screen justify-around flex">
      <CategoryProduct/>
      <SideBar />
    </div>
  );
};

export default ProductCategory;
