import React from "react";
import SideItem from "./SideItem";
import { navItems } from "../data/NavItemData";

const SideBar = () => {
  return (
    <div className=" p-5 h-[90%] w-64 bg-gray-300 fixed border-pink-500 right-0 text-right  ">
      {navItems.map((navItem, index) => {
        return <SideItem key={index} items={navItem} />;
      })}
    </div>
  );
};

export default SideBar;
