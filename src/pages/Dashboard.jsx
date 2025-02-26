import React from 'react'

export const Dashboard = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-900 text-white'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to TrendHatch</h1>
      <p className='text-lg text-gray-300 mb-6'>Your personalized dashboard to manage your account and activities.</p>

      <div className='flex gap-4'>
        <button className='bg-blue-500 px-6 py-2 rounded-lg text-white font-medium hover:bg-blue-600 transition'>
          View Profile
        </button>
        <button className='bg-green-500 px-6 py-2 rounded-lg text-white font-medium hover:bg-green-600 transition'>
          Explore Trends
        </button>
      </div>
    </div>
  )
}
