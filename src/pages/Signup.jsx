import React from 'react'
import { Template } from '../components/Template'

export const Signup = ({setIslogin}) => {
    const signupProps = {
        title: "Join Trend Hatch Today",
        dec1: "Discover, explore, and stay ahead with trending topics.",
        dec2: "Create an account to get personalized recommendations and updates.",
        formType: "Signup",
      };
  return (
    <div><Template
    title={signupProps.title} 
    dec1={signupProps.dec1} 
    dec2={signupProps.dec2} 
    formType={signupProps.formType} 
    setIsLogin={setIslogin}/></div>
  )
}
