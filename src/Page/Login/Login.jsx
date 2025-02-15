import React from 'react'
import PageHeader from '../../Components/PageHedar/PageHeader'

const Login = () => {
  return (
    <>
    <div className='mt-[100px]'>
    <PageHeader HeaderText="My Account" PageName="My Account"/>
    </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
      <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
      <p className="text-gray-500 text-center mb-6">
        Please login using account details below.
      </p>

      <form>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="text-right mb-4">
          <a href="#" className="text-sm text-gray-500 hover:underline">
            Forgot your password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
        >
          Sign In
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-4">
        Don't have an account?{" "}
        <a href="#" className="text-pink-500 font-medium hover:underline">
          Create account
        </a>
      </p>
    </div>
  </div>
    </>
  
  )
}

export default Login