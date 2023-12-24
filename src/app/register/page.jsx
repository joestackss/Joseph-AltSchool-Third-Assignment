// pages/register.js

import RegisterForm from "@/components/RegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <div className=" flex justify-center items-center h-screen  w-[80%] mx-auto">
      {/* Second Section */}
      <div className="w-full sm:w-1/2 h-fit flex justify-center items-center">
        <div className="sm:px-24">
          <div className=" bg-[#f7fdfc] flex items-center justify-center">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
