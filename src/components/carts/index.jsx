import React, { useEffect, useState } from "react";
import Cart from "../cart";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../redux/feature/cart-slice";
import {IoIosArrowBack} from "react-icons/io"
import { useNavigate } from "react-router-dom";

const Carts = () => {
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate('/productCategory')
  }
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <section className="py-10 bg-gray-100  text-pink-800">
    <div className="flex gap-2 items-center cursor-pointer w-80" onClick={handleNavigate}>
    <h1 className="mr-56">شال بهاره</h1>
        <IoIosArrowBack/>
    </div>
        <div className=" mx-auto grid  max-w-6xl  grid-cols-1 gap-12 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          {products.map(
            (item) =>
              item.category === 3 &&
              item.showOnHomePage && (
                <Cart key={item.id} id={item.id} item={item} />
              )
          )}
        </div>
      </section>

      <section className="py-10 bg-gray-100 text-pink-800">
      <div className="flex gap-2 items-center cursor-pointer" onClick={handleNavigate}>
        <h1 className="mr-56 ">شال تابستانی</h1>
        <IoIosArrowBack/>
        </div>
        <div className=" mx-auto grid  max-w-6xl  grid-cols-1 gap-12 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          {products.map(
            (item) =>
              item.category === 2 && 
              item.showOnHomePage &&
              (
                <Cart key={item.id} id={item.id} item={item} />
              )
          )}
        </div>
      </section>

      <section className="py-10 bg-gray-100 text-pink-800">
      <div className="flex gap-2 items-center cursor-pointer " onClick={handleNavigate}>
        <h1 className="mr-56 ">شال پاییزه</h1>
        <IoIosArrowBack/>
        </div>
        <div className=" mx-auto grid  max-w-6xl  grid-cols-1 gap-12 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          {products.map(
            (item) =>
              item.category === 4 &&
              item.showOnHomePage && (
                <Cart key={item.id} id={item.id} item={item} />
              )
          )}
        </div>
      </section>

      <section className="py-10 bg-gray-100 text-pink-800">
      <div className="flex gap-2 items-center cursor-pointer" onClick={handleNavigate}>
        <h1 className="mr-56 ">شال زمستانه</h1>
        <IoIosArrowBack/>
        </div>
        <div className=" mx-auto grid  max-w-6xl  grid-cols-1 gap-12 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          {products.map(
            (item) =>
              item.category === 1 &&
              item.showOnHomePage && (
                <Cart key={item.id} id={item.id} item={item} />
              )
          )}
        </div>
      </section>
    </>
  );
};

export default Carts;
