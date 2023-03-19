import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Basket = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="mt-5">
      <p className="text-pink-800 mr-64 mb-10 text-3xl ">سبد خرید</p>
      <div className="w-[70%] relative overflow-x-auto shadow-xl sm:rounded-lg dir-rtl m-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px- py-3 pl-6">
                کالا
              </th>
              <th scope="col" className="px-6 py-3">
                قیمت
              </th>
              <th scope="col" className="px-6 py-3">
                تعداد
              </th>
              <th scope="col" className="px-3 py-3 text-center pl-3">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td className="px-6 py-4 ">{item.name}</td>
                <td className="px-6 py-4">${item.price}</td>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4 text-center pl-3">
                  <a
                    href="#"
                    className="font-medium text-pink-600 dark:text-pink-500 hover:underline ml-3"
                  >
                    حذف
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between   text-pink-800  text-xl w-[70%] mt-28 m-auto ">
        <p>جمع: 1{}تومان</p>
        <Link to="/finaAuth">
          <button
            className="py-2.5 px-14 text-center mr-32 mb-11 text-sm 
                    font-medium  focus:outline-none
                     bg-pink-400  rounded-full border border-none
                      hover:bg-pink-300 hover:text-pink-700 
                      focus:z-10 focus:ring-4 focus:ring-pink-200
                       dark:focus:ring-pink-700 dark:bg-pink-800
                        dark:text-pink-400
                     dark:border-pink-600 dark:hover:text-white
                      dark:hover:bg-pink-700
                      text-white"
          >
            نهایی کردن سبد خرید
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Basket;
