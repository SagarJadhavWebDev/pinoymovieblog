
import React, { useState } from 'react';
import Link from "next/link"

function Navbar() {
    const [mobilemenu , setMobilemenu] = useState(false)
    return (
       
<nav className="bg-gray-800">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button
        onClick={()=>{
          setMobilemenu(!mobilemenu)
        }}
        type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset " aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
         
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="flex-1  flex items-center justify-center sm:items-stretch ">
      <div className="flex-shrink-0 md:justify-start justify-center  cursor-pointer flex items-center">
          <div className="md:-ml-24">
          <Link href="/">
          <img className="block lg:hidden h-8 w-auto" src="/popcorn.svg" alt="Workflow"/>
          </Link>
         <Link href="/">
         <img className="hidden lg:block h-8 w-auto" src="/popcorn.svg" alt="Workflow"/>
         </Link>
          </div>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
          <Link href="/">
          <a href="#" className="hover:text-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
            </Link>
            <Link href="/about">
          <a href="#" className="hover:text-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">About Us</a>
            </Link>
            <Link href="/contact">
          <a href="#" className="hover:text-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Contact Us</a>
            </Link>
            <Link href="/disclaimer">
          <a href="#" className="hover:text-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Disclaimer</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">View notifications</span>
          
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        
       
      </div>
    </div>
  </div>

 
  {mobilemenu &&<div className="sm:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
    <Link href="/">
          <a href="#" className=" text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>
            </Link>
            <Link href="/about">
          <a href="#" className=" text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">About Us</a>
            </Link>
            <Link href="/contact">
          <a href="#" className=" text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Contact Us</a>
            </Link>
            <Link href="/disclaimer">
          <a href="#" className=" text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Disclaimer</a>
            </Link>
     
    </div>
  </div>}
</nav>

    );
}

export default Navbar;