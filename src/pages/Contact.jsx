import React from 'react'

export const Contact = () => {
  return (
    <div className='max-w-3xl mx-auto px-6 py-12 text-center'>
      <h1 className='text-3xl font-bold text-slate-100 mb-4'>Contact Us</h1>
      <p className='text-lg text-slate-300 mb-6'>
        Have any questions, suggestions, or business inquiries? We'd love to hear from you!
      </p>

      <form className='flex flex-col gap-4'>
        <input 
          type='text' 
          placeholder='Your Name' 
          className='bg-slate-800 text-slate-100 px-4 py-2 rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400'
          required 
        />
        <input 
          type='email' 
          placeholder='Your Email' 
          className='bg-slate-800 text-slate-100 px-4 py-2 rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400'
          required 
        />
        <textarea 
          placeholder='Your Message' 
          rows='4' 
          className='bg-slate-800 text-slate-100 px-4 py-2 rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400'
          required
        />
        <button 
          type='submit' 
          className='bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200'>
          Send Message
        </button>
      </form>
    </div>
  )
}
