import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast from 'react-hot-toast';

export const LoginForm = ({ setIsLogin }) => {
  const [formData, setFormdata] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();

  function changeHandler(event) {
    setFormdata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLogin(true);
    toast.success('Logged In Successfully');
    console.log('Printing formData:', formData);
    navigate('/Dashboard');
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full max-w-md mx-auto gap-y-4 mt-6 p-6 bg-gray-800 rounded-lg shadow-lg">
      {/* Email Input */}
      <label className="w-full">
        <p className="text-sm text-gray-300 mb-1">Email <sup className="text-red-400">*</sup></p>
        <input 
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={changeHandler}
          className="w-full bg-gray-700 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </label>

      {/* Password Input */}
      <label className="w-full relative">
        <p className="text-sm text-gray-300 mb-1">Password <sup className="text-red-400">*</sup></p>
        <div className="relative">
          <input 
            type={showPassword ? 'text' : 'password'}
            required
            name="password"
            value={formData.password}
            onChange={changeHandler}
            className="w-full bg-gray-700 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          {/* Eye Icon for Toggle */}
          <span 
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-3 cursor-pointer text-gray-400 hover:text-white transition"
          >
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </span>
        </div>
        <NavLink to="#" className="text-xs mt-1 text-blue-400 hover:underline block text-right">
          Forgot Password?
        </NavLink>
      </label>

      {/* Sign In Button */}
      <button className="bg-yellow-400 text-gray-900 font-semibold p-3 rounded-md mt-4 hover:bg-yellow-300 transition">
        Sign In
      </button>
    </form>
  );
};
