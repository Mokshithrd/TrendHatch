import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"

export const SignupForm = ({ setIsLogin }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    Createpassword: "",
    confirm: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData(prev => ({
      ...prev, [event.target.name]: event.target.value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    if (Object.values(formData).some(value => value.trim() === "")) {
      toast.error("All fields are required!");
      return;
    }

    if (formData.Createpassword !== formData.confirm) {
      toast.error("Passwords do not match!");
      return;
    }

    setIsLogin(true);
    toast.success("Account Created Successfully!");

    const finalData = { ...formData, accountType };
    console.log("Final Account Data:", finalData);

    navigate("/Dashboard");
  }

  return (
    <div className="bg-slate-900 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      
      {/* Account Type Toggle */}
      <div className="flex bg-gray-800 p-1 rounded-full max-w-max mx-auto mb-6">
        {["student", "instructor"].map(type => (
          <button 
            key={type}
            className={`py-2 px-5 rounded-full transition-all duration-200 
              ${accountType === type ? "bg-blue-600 text-white" : "bg-transparent text-gray-300"}`}
            onClick={() => setAccountType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Signup Form */}
      <form onSubmit={submitHandler}>

        <div className="flex flex-col md:flex-row gap-4">
          <label className="w-full">
            <p className="text-gray-300 text-sm mb-1">First Name <sup className="text-red-400">*</sup></p>
            <input 
              type="text" name="firstname" required value={formData.firstname} onChange={changeHandler}
              className="bg-gray-800 rounded-md text-gray-200 w-full p-3 outline-none border border-gray-700 focus:border-blue-500"
            />
          </label>

          <label className="w-full">
            <p className="text-gray-300 text-sm mb-1">Last Name <sup className="text-red-400">*</sup></p>
            <input 
              type="text" name="lastname" required value={formData.lastname} onChange={changeHandler}
              className="bg-gray-800 rounded-md text-gray-200 w-full p-3 outline-none border border-gray-700 focus:border-blue-500"
            />
          </label>
        </div>

        <label className="w-full mt-4">
          <p className="text-gray-300 text-sm mb-1">Email <sup className="text-red-400">*</sup></p>
          <input 
            type="email" name="email" required value={formData.email} onChange={changeHandler}
            className="bg-gray-800 rounded-md text-gray-200 w-full p-3 outline-none border border-gray-700 focus:border-blue-500"
          />
        </label>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* Create Password */}
          <label className="w-full relative">
            <p className="text-gray-300 text-sm mb-1">Create Password <sup className="text-red-400">*</sup></p>
            <input 
              type={showPassword ? "text" : "password"} name="Createpassword" required 
              value={formData.Createpassword} onChange={changeHandler}
              className="bg-gray-800 rounded-md text-gray-200 w-full p-3 outline-none border border-gray-700 focus:border-blue-500"
            />
            <span 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 cursor-pointer"
            >
              {showPassword ? <AiOutlineEyeInvisible size={24} color="#AFB2BF" /> : <AiOutlineEye size={24} color="#AFB2BF" />}
            </span>
          </label>

          {/* Confirm Password */}
          <label className="w-full relative">
            <p className="text-gray-300 text-sm mb-1">Confirm Password <sup className="text-red-400">*</sup></p>
            <input 
              type={showConfirmPassword ? "text" : "password"} name="confirm" required 
              value={formData.confirm} onChange={changeHandler}
              className="bg-gray-800 rounded-md text-gray-200 w-full p-3 outline-none border border-gray-700 focus:border-blue-500"
            />
            <span 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-10 cursor-pointer"
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible size={24} color="#AFB2BF" /> : <AiOutlineEye size={24} color="#AFB2BF" />}
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button 
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md mt-6 hover:bg-blue-700 transition"
          type="submit"
        >
          Create an Account
        </button>

        {/* OR Divider */}
      <div className='flex w-full items-center my-4 gap-x-2'>
        <div className='w-full h-[1px] bg-richblack-700'></div>
        <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
        <div className='w-full h-[1px] bg-richblack-700'></div>
      </div>

      {/* Google Signup Button */}
      <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
        <FcGoogle />
        <p>Sign Up with Google</p>
      </button>

      </form>
    </div>
  );
};
