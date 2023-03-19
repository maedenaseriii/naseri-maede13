import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../redux/feature/cart2-slice";

const Cart = ({ item ,setCart,product,name,price,id,description,image}) => {
  const dispatch=useDispatch()
  
  let localStorageCart=[]
  
  const handleAddToCart=()=>{
    dispatch(cartActions.addItemToCart({
      id,
      name,
      price
    }))
    localStorageCart=JSON.parse(localStorage.getItem("cartData"));
    localStorageCart=localStorageCart || [];

    const productFind=localStorageCart.findIndex((item)=>item.id==item.id)

    
    if(productFind >= 0){
      localStorageCart[productFind].count+=1
    }else{
      localStorageCart.push({...product, count: 1})
    }

    localStorage.setItem("cartData", JSON.stringify(localStorageCart));
    setCart(localStorageCart)
  }

  return (
    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <Link to="/productDetail" item={item}>
        <div
          className="relative flex  overflow-hidden rounded-xl gap-4 items-center justify-center">
          <img
            src={`http://localhost:3002/files/${item.image[0]}`}
            alt="close Photo"
            className="w-28 h-28 rounded-2"
          />
          <div>
            <h2 className="text-slate-700">{item.brand}</h2>
            <p className="mt-1 text-sm text-slate-400">{item.name}</p>
          </div>
        </div>
      </Link>
      <div className="mt-1 p-2">
        <div className="mt-3 flex items-center justify-center">
          <div className="flex items-center space-x-1.5 rounded-lg bg-pink-500 px-4 py-1.5 text-white duration-100 hover:bg-pink-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <button className="text-sm " onClick={handleAddToCart}>اضافه به سبد خرید</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Cart;
