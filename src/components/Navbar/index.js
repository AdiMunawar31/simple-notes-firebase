import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="hidden md:flex flex-row items-center p-3 md:p-1 justify-between bg-gradient-to-bl from-blue-500 to-blue-700 shadow-md">
            <div className="ml-8 text-gray-700 hidden md:flex">
                <span className="font-bold text-yellow-200 text-lg mx-10">REACT-FIREBASE</span>
                <Link to="/" className="font-medium text-sm mx-3 mt-1 text-gray-100 hover:text-yellow-200">HOME</Link>
                <Link to="/" className="font-medium text-sm mx-3 mt-1 text-gray-100 hover:text-yellow-200">ABOUT</Link>
                <Link to="/" className="font-medium text-sm mx-3 mt-1 text-gray-100 hover:text-yellow-200">CONTACT</Link>
            </div>

            {/* <span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
                <input type="search" name="serch" placeholder="Search" className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none" />
                <i className="fas fa-search m-1 mr-5 ml-3 text-lg text-gray-700 w-4 h-4">
                </i>
            </span> */}
            <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
                <i className="fas fa-bars" />
            </div>
            <div className="mr-16 hidden md:flex">
                <Link to="/sign-in" className="text-yellow-300 font-semibold text-sm text-center border-r-2 px-5 py-1 m-2">SIGN IN</Link>
                <Link to="/sign-up" className="text-yellow-300 font-semibold text-sm text-center px-2 py-1 m-2">SIGN UP</Link>
            </div>
        </div>

    )
}
