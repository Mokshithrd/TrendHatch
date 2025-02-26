import React from 'react'
import { SignupForm } from './SignupForm'
import { LoginForm } from './LoginForm'


export const Template = ({ title, dec1, dec2, formType, setIsLogin }) => {
  return (
    <div className='flex flex-wrap lg:justify-between justify-center w-11/12 max-w-[1160px] py-12 mx-auto gap-12'>

      {/* Title & Description */}
      <div>
        <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>
          {title}
        </h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
          <span className='text-slate-100'>{dec1}</span>
          <br />
          <span className='text-blue-100 italic'>{dec2}</span>
        </p>
      </div>

      {/* Form */}
      {formType === "Signup" ? (
        <SignupForm setIsLogin={setIsLogin} />
      ) : (
        <LoginForm setIsLogin={setIsLogin} />
      )}

      
    </div>
  )
}
