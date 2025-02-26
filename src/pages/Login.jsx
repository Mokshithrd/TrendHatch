import React from 'react'
import { Template } from '../components/Template';

export const Login = (props) => {
    let setIsLogin=props.setIslogin;
    const loginProps = {
        title: "Welcome Back to Trend Hatch",
        dec1: "Stay updated with the latest trends and insights.",
        dec2: "Log in to access personalized content and exclusive features.",
        formType: "Login"
      };
  return (
    <div><Template
    title={loginProps.title} 
    dec1={loginProps.dec1} 
    dec2={loginProps.dec2} 
    formType={loginProps.formType}
    setIsLogin={setIsLogin}/></div>
  )
}
