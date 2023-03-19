import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../../tabs/productPagination.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ReactPaginate from "react-paginate";

const OrdersManaging = () => {
  const [order, setOrder] = useState([]);
  console.log("orderproduct", order.products);
  const [length, setLength] = useState(0);
  const [isDelivered, setIsDelivered] = useState(true);
  const [orderDate, setOrderData] = useState([]);
  const handleChange = (event) => {
    if (+event.target.value === 1) {
      setIsDelivered(true);
      setItemOffset(0);
    }
    if (+event.target.value === 2) {
      setIsDelivered(false);
      setItemOffset(0);
    }
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3002/orders?delivered=${isDelivered}`)
      .then((res) => setLength(res.data.length));
  }, [isDelivered]);
  const [modal, setModal] = useState(false);
  const HandleModal = (item) => {
  
    setOrder([item]);
    setModal(!modal);
  };
  //-----------------------------------------------------------
  const [itemOffset, setItemOffset] = useState(0);

  const currentItems = orderDate;

  const pageCount = Math.ceil(length / 3);
  const handlePageClick = (event) => {
    const newOffset = event.selected;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:3002/orders?_page=${
          itemOffset + 1
        }&_limit=${3}&&delivered=${isDelivered}`
      )
      .then((res) => setOrderData(res.data));
  }, [itemOffset, isDelivered]);
  // ----------------------------------------------------------

  return (
    <div>
      <div className="flex justify-between items-center text-pink-800  text-xl w-[70%] -mt-10 m-auto ">
        <p>مدیریت سفارش ها</p>
        <div>
          <FormControl className=" w-64">
            <FormLabel id="demo-radio-buttons-group-label"> </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="نشده تحویل"
              name="radio-buttons-group"
            >
              <div className="flex gap-3">
                <FormControlLabel
                  value={1}
                  checked={isDelivered && true}
                  control={<Radio onChange={handleChange} />}
                  label="تحویل شده"
                />
                <FormControlLabel
                  value={2}
                  control={<Radio onChange={handleChange} />}
                  label="تحویل نشده"
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <div className="w-[70%] mb-12 relative overflow-x-auto shadow-xl sm:rounded-lg dir-rtl m-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-500">
            <tr>
              <th scope="col" className="px- py-3 pl-6">
                نام کاربر
              </th>
              <th scope="col" className="px-6 py-3">
                مجموع مبلغ
              </th>
              <th scope="col" className="px-6 py-3">
                زمان ثبت سفارش
              </th>
              <th scope="col" className="px-3 py-3 text-center pl-3">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className="px-6 py-4">{item.username}</td>
                  <td className="px-6 py-4">{item.prices}تومان</td>
                  <td className="px-6 py-4">
                    {new Date(item.createdAt).toLocaleDateString("fa-Ir")}
                  </td>

                  <td className="px-6 py-4 text-center pl-3">
                    <div className="modal-container relative">
                      <p
                        onClick={() => HandleModal(item)}
                        className="font-medium text-pink-600 dark:text-pink-500 hover:underline ml-3"
                      >
                        بررسی سفارش
                      </p>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <ReactPaginate
          className="pagination flex gap-4 flex-row-reverse bg-slate-300 p-5 rounded-2xl "
          breakLabel="..."
          nextLabel="بعد > "
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< قبل"
          renderOnZeroPageCount={null}
          activeClassName="activePagination"
        />
      </div>
      {/* modal  */}
      <div
        className={
          modal
            ? "bg-modal absolute w-[100%] top-0 right-0 h-[100vh] bg-pink-200 bg-opacity-80 grid place-items-center z-50 "
            : "hidden"
        }
      >
        <div className="modal w-[30vw] p-4 bg-gray-100 shadow-2xl rounded-lg space-y-9 ">
          <div className="modal-header space-y-4 ">
            <div className="flex justify-between ">
              <p className="text-[1.5rem] font-bold text-pink-800 ">
                نمایش سفارش
              </p>
              <div className="icon grid place-items-center cursor-pointer">
                <AiOutlineClose onClick={HandleModal} />
              </div>
            </div>
            <hr />
            <div>
              <div className="modal-body ">
                <div className="flex gap-7  p-2">
                  <label>نام مشتری:</label>
                  <p>{order.username} </p>
                </div>
                <div className="flex gap-7  p-2">
                  <label> آدرس:</label>
                  <p>کرج </p>
                </div>
                <div className="flex gap-7 p-2">
                  <label> تلفن:</label>
                  <p>0910087373 </p>
                </div>
                <div className="flex gap-7  p-2">
                  <label> زمان تحویل:</label>
                  <label>2/4/1401 </label>
                </div>
                <div className="flex gap-7 p-2 mb-5">
                  <label> زمان سفارش:</label>
                  <label> 9/4/1401</label>
                </div>

                <div className="w-[84%] relative overflow-x-auto shadow-xl sm:rounded-lg dir-rtl m-auto ">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px- py-3 pl-6">
                          کالا
                        </th>
                        <th scope="col" className="px-6 py-3">
                          قیمت
                        </th>
                        <th scope="col" className="px-6 py-3">
                          موجودی
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.products.map((item) => {
                        return (
                          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="px-6 py-4 ">{item.name}</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">${item.price}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="flex gap-7 p-3 mr-24 mt-5">
                  <p> زمان تحویل:</p>
                  <p> 9/4/1401</p>
                </div>
              </div>
              <div className="modal-footer space-y-5 mt-5">
                <hr />
                <div className="flex justify-between">
                  <button
                    type=""
                    // onSubmit={}
                    className="bg-green-700 w-[8rem] p-2 rounded-md text-[1.2rem] text-white  focus:border-pink-500"
                  >
                    ذخیره
                  </button>
                  <button
                    onClick={HandleModal}
                    type="submit"
                    className="bg-red-800 w-[8rem] p-2 rounded-md text-[1.2rem] text-white  focus:border-pink-500"
                  >
                    بستن
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersManaging;
