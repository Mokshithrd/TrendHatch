import React from 'react'

export const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white'>
      <h1 className='text-5xl font-bold mb-4'>Welcome to TrendHatch</h1>
      <p className='text-lg text-gray-200 mb-6 text-center'>
        Discover the latest trends and connect with like-minded people.
      </p>
      <div className='flex gap-6'>
        <button className='bg-yellow-500 px-8 py-3 rounded-lg text-white font-medium hover:bg-yellow-600 transition'>
          Get Started
        </button>
        <button className='bg-transparent border-2 border-white px-8 py-3 rounded-lg text-white font-medium hover:bg-white hover:text-black transition'>
          Learn More
        </button>
      </div>
    </div>
  )
}
  