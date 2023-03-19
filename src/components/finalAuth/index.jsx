import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const FinalAuth = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      lastName: "",
      password: "",
      address:"",
      phoneNumber:"",
      dateofdelivery:""
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .required("نام کاربری الزامی است.")
        .max(15, "کاراکتر کمتر از 15")
        .min(3, "کاراکتر بیشتر از 3"),
        address: Yup.string()
        .required(" آدرس الزامی است."),
        lastName: Yup.string()
        .max(20, "کاراکتر کمتر از 20")
        .min(3, "کاراکتر بیشتر از 3")
        .required("نام خانوادگی الزامی است"),
      password: Yup.string()
        .required("رمز عبور الزامی است.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "رمز عبور باید شمامل 8 کاراکتر و یک حروف بزرگ و یک حروف کوچک و یک عدد و یک سمبل باشد."
        ),
        phoneNumber: Yup.string().matches(/^09\d{9}$/, 'Phone number is not valid')
        .required(" شماره تلفن الزامی است."),
        dateofdelivery: Yup.string()
        .required(" تاریخ تحویل الزامی است.")
     
 
    }),
    onSubmit: (values) => {
  
      localStorage.setItem("userdata", JSON.stringify(values));
      navigate("/panelAdmin");
    }
  });
  return (
    <div className="overscroll-y-none h-[18%] mt-3">
      <h1 className="text-pink-800 mr-96 font-bold">نهایی کردن خرید</h1>
      <div className=" flex flex-col px-6  mx-auto  lg:py-0 items-center ">
          <div className=" flex justify-center items-center p-6 space-y-4 md:space-y-6">
            <form
              onSubmit={formik.handleSubmit}
              className=" bg-pink-100 w-[48rem] rounded-lg shadow-2xl dark:border border-pink-400 
            border-2 md:mt-0 space-y-4   p-3 "
            >
              <div className="flex justify-around">
               <div className="flex-col w-[40%]">
               <label
                  htmlFor="userName"
                  className="block mb-2 text-sm font-medium text-pink-900 dark:text-white"
                >
                  نام کربری
                </label>
                <input
                  className="bg-pink-50 border mb-2 border-pink-300 text-pink-900 sm:text-sm rounded-lg
               focus:border-pink-600 focus:outline-none  block w-full p-2.5 
          dark:"
                  id="userName"
                  name="userName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userName}
                />
                {formik.touched.userName && formik.errors.userName ? (
                  <div>{formik.errors.userName}</div>
                ) : null}
               </div>

              <div className="flex-col w-[40%]">
              <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-pink-900 dark:text-white"
                >
            نام خانوادگی:
                </label>
                <input
                  className="bg-pink-50 mb-2 border border-pink-300 text-pink-900 sm:text-sm rounded-lg
                      focus:border-pink-600 focus:outline-none  block w-full p-2.5 
                 dark:"
                  id="lastName"
                  type="text"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div>{formik.errors.lastName}</div>
                ) : null}
              </div>
              </div>





              <div className="flex justify-around">
               <div className="flex-col w-[40%]">
               <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-pink-900 dark:text-white"
                >
                آدرس
                </label>
                <input
                  className="bg-pink-50 h-20 border mb-2 border-pink-300 text-pink-900 sm:text-sm rounded-lg
               focus:border-pink-600 focus:outline-none  block w-full p-2.5 
          dark:"
                  id="address"
                  name="address"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div>{formik.errors.address}</div>
                ) : null}
               </div>

              <div className="flex-col w-[40%]">
              <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium text-pink-900 dark:text-white"
                >
         تلفن همراه:
                </label>
                <input
                  className="bg-pink-50 mb-2 border border-pink-300 text-pink-900 sm:text-sm rounded-lg
                      focus:border-pink-600 focus:outline-none  block w-full p-2.5 
                 dark:"
                  id="phoneNumber"
                  type="text"
                  {...formik.getFieldProps("phoneNumber")}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div>{formik.errors.phoneNumber}</div>
                ) : null}
              </div>
              </div>
              <div className="flex mr-9">
              <div className="flex-col w-[41.5%]">
              <label
                  htmlFor="dateofdelivery"
                  className="block mb-2 text-sm font-medium text-pink-900 dark:text-white"
                >
         تاریخ تحویل :
                </label>
                <input
                  className="bg-pink-50 mb-2 border border-pink-300 text-pink-900 sm:text-sm rounded-lg
                      focus:border-pink-600 focus:outline-none  block w-full p-2.5 
                 dark:"
                  id="dateofdelivery"
                  type="text"
                  {...formik.getFieldProps("dateofdelivery")}
                />
                {formik.touched.dateofdelivery && formik.errors.dateofdelivery ? (
                  <div>{formik.errors.dateofdelivery}</div>
                ) : null}
              </div>
              </div>
           
              <button
              onClick={()=>{navigate('/paymentgateway')}}
                type="submit"
                className="py-2 px-24 text-center mr-[16rem] mb-11 text-sm 
                    font-medium  focus:outline-none
                     bg-pink-400  rounded-xl border border-none
                      hover:bg-pink-300 hover:text-pink-700 
                      focus:z-10 focus:ring-4 focus:ring-pink-200
                       dark:focus:ring-pink-700 dark:bg-pink-800
                        dark:text-pink-400
                     dark:border-pink-600 dark:hover:text-white
                      dark:hover:bg-pink-700
                      text-white"
              >
                پرداخت
              </button>
           <Link to='/'>
           <div className="container-login100-form-btn p-2 pt-12">
                <button
                  to="/"
                  className="flex flex-row-reverse
               items-end text-pink-900 hover:text-red-500"
                >
                  بازگشت به سایت
                </button>
              </div>
           </Link>
            </form>
          </div>
     
      </div>
    </div>
  );
};
export default FinalAuth;
