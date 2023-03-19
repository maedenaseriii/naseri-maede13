import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../config/constants";
import { fetchTodos } from "../../redux/feature/cart-slice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const EditModal = ({ item }) => {

 
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  console.log(`${BASE_URL}/files/${item.image}`);


  const modalSchema = yup.object({
    image: yup.mixed().required("الزامی هست"),
    name: yup.string().required("الزامی هست"),
    price: yup.number().required("الزامی هست"),
    quantity: yup.number().required("الزامی هست"),
    category: yup.number().required("الزامی هست"),
    description: yup.string().required("الزامی هست")
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(modalSchema), mode: "onChange" });
  console.log("error", errors);
  const [value, setValue] = useState({
    name: item.name,
    description: item.description,
    category: item.category,
    quantity: item.quantity,
    price:item.price,
    showOnPage: false
  });

  const handleSave = (e) => {
    e.preventDefault();
    axios.patch(`${BASE_URL}/products/${item.id}`, value);
    setModal(false);
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [value]);

  const EditHandler = (item) => {
    setModal(!modal);
  };

  const HandleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <p
        onClick={() => EditHandler(item)}
        className="font-medium text-pink-600 dark:text-pink-500 hover:underline"
      >
        ویرایش
      </p>

      <div
        className={
          modal
            ? "bg-modal fixed w-[100%] top-0 right-0 h-[100vh] bg-pink-200 bg-opacity-80 grid place-items-center z-50 "
            : "hidden"
        }
      >
        <div className="modal w-[40vw] p-4 bg-gray-100 shadow-2xl rounded-lg space-y-9  ">
          <div className="modal-header space-y-4 ">
            <div className="flex justify-between ">
              <p className="text-[1.5rem] font-bold text-pink-800 ">
                افزودن/ویرایش کالا
              </p>
              <div className="icon grid place-items-center cursor-pointer">
                <AiOutlineClose onClick={HandleModal} />
              </div>
            </div>
            <hr />
            <div>
              <form onSubmit={(e) => handleSubmit(handleSave(e))}>
                <div className="modal-body ">
                  <div>
                    <div className="grid grid-cols-2 gap-x-9">
                      <div className="flex-col">
                        <lable
                          htmlFor="img"
                          className="block mb-2  text-sm font-medium text-pink-900 dark:text-white"
                        >
                          تصویر کالا:
                        </lable>
                        <div className="">
                          <input
                            value={value.image}
                            onChange={(e) =>
                              setValue({ ...value, image: e.target.value })
                            }
                            type="file"
                            id="img"
                            className="block p-2  w-full mb-5 text-xs text-pink-900 border border-pink-300
                       rounded-lg cursor-pointer bg-white dark:text-pink-400
                       focus:outline-pink-500 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-black"
                          />
                          <img src={`${BASE_URL}/files/${item.image}` }/>
                        </div>
                      </div>
                      <div className="flex-col">
                        <lable
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-pink-900 dark:text-white"
                        >
                          نام کالا:
                        </lable>
                        <div>
                          <input
                            value={value.name}
                            onChange={(e) =>
                              setValue({ ...value, name: e.target.value })
                            }
                            type="text"
                            placeholder="نام کالا را وارد کنید"
                            id="name"
                            className="block w-full p-1 text-pink-900 border
                       border-pink-300 rounded-lg bg-white sm:text-sm
                       focus:ring-pink-500 focus:border-pink-500 dark:bg-pink-700 dark:border-pink-600
                       dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-9">
                      <div className="flex-col">
                        <lable className="block mb-2  text-sm font-medium text-pink-900 dark:text-white">
                          قیمت کالا:
                        </lable>

                        <div className="">
                          <input
                            value={value.price}
                            onChange={(e) =>
                              setValue({ ...value, price: e.target.value })
                            }
                            name="price"
                            type="number"
                            className="block p-2  w-full mb-5 text-xs text-pink-900 border border-pink-300
                       rounded-lg cursor-pointer bg-white dark:text-pink-400
                       focus:outline-pink-500 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-black"
                          />
                        </div>
                      </div>

                      <div className="flex-col">
                        <lable className="block mb-2  text-sm font-medium text-pink-900 dark:text-white">
                          موجودی :
                        </lable>

                        <div className="">
                          <input
                            value={value.quantity}
                            onChange={(e) =>
                              setValue({ ...value, quantity: e.target.value })
                            }
                            name="quantity"
                            type="number"
                            className="block p-2  w-full mb-5 text-xs text-pink-900 border border-pink-300
                       rounded-lg cursor-pointer bg-white dark:text-pink-400
                       focus:outline-pink-500 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-black"
                          />
                        </div>
                      </div>
                    </div>
                    <lable
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-pimk-900 dark:text-white"
                    >
                      دسته بندی:
                    </lable>
                    <div>
                      <select
                        value={value.category}
                        onChange={(e) =>
                          setValue({ ...value, category: e.target.value })
                        }
                        name="category"
                        id="category"
                        className="bg-pimk-50 border border-pimk-300 text-pimk-900 
                      text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block 
                      w-full p-2.5 dark:bg-pimk-700 dark:border-pimk-600
                       dark:placeholder-black dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                      >
                        <option value="3">بهاره</option>
                        <option value="2">تابستانه</option>
                        <option value="4">پاییزه</option>
                        <option value="1">زمستانه</option>
                      </select>
                    </div>
                    <lable
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-pimk-900 dark:text-white"
                    >
                      توضیحات:
                    </lable>
                    <div>
                      <textarea
                        value={value.description}
                        onChange={(e) =>
                          setValue({ ...value, description: e.target.value })
                        }
                        name="description"
                        rows="2"
                        id="text"
                        className="block p-2.5 w-full text-sm text-pimk-900 bg-pimk-50 outline-none
                        rounded-lg border border-pimk-300 focus:ring-pink-500
                         focus:border-pink-500 dark:bg-pimk-700 dark:border-pimk-600
                          dark:placeholder-black dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                        placeholder="......توضیحات"
                      ></textarea>
                    </div>

                    <div className="flex items-center justify-center gap-3 mt-4">
                      <lable className="block mb-2  text-sm font-medium text-pink-900 dark:text-white">
                        نمایش در صفحه اصلی :
                      </lable>

                      <div className="">
                        <input
                          value={value.showOnPage}
                          onChange={(e) =>
                            setValue({
                              ...value,
                              showOnPage: !value.showOnPage
                            })
                          }
                          name="showonpage"
                          type="checkbox"
                          className="block p-2  w-full mb-2 text-xs text-pink-900 border border-pink-300
                       rounded-lg cursor-pointer bg-white dark:text-pink-400
                       focus:outline-pink-500 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-black"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer space-y-5 ">
                  <hr />
                  <div className="flex justify-between">
                    <button
                      type="submit"
                      className="bg-green-700 w-[8rem] p-2 rounded-md text-[1.2rem] text-white  focus:border-pink-500"
                    >
                      ذخیره
                    </button>
                    <button
                      onClick={HandleModal}
                      className="bg-red-800 w-[8rem] p-2 rounded-md text-[1.2rem] text-white  focus:border-pink-500"
                    >
                      بستن
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
