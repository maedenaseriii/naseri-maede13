import React from "react";
import { useNavigate } from "react-router-dom";
import psp from "../../assets/psp.png";

const Paymentgateway = () => {
  const navigate = useNavigate();
  return (
    <div className="flex ">
      <p
        onClick={() => {
          navigate("/");
        }}
        className="text-pink-800 mr-10 font-bold mt-10"
      >
        بازگشت به سایت
      </p>
      <img
        src={psp}
        alt="paymentgateway"
        className="w-[40%] h-[100vh] m-auto"
      />
    </div>
  );
};

export default Paymentgateway;
