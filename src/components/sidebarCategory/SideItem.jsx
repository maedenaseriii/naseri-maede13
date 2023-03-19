import React, { useState } from "react";

const SideItem = ({ items }) => {
  const { name, links, open } = items;
  const [isOpen, setIsOpen] = useState(open);
  const openSideNav=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div onClick={()=>{openSideNav()}} className=' mr-5 h-auto min-h-3 w-[60%] border-b-2 border-b-pink-600 text-pink-700 flex items-start flex-col'>
      <p className="m-2 text-600">{name}</p>
      {isOpen &&
        links.map((link, index) => {
          const { title, to } = link;
          return (
            <div className="h-auto w-40 border-t-pink-500 mt-2  text-gray-600">
              <a href={to}><p>{title}</p></a>
            </div>
          );
        })}
    </div>
  );
};

export default SideItem;
