import React from 'react'

const Navbar = () => {
  return (
   
<nav id="header" className="w-full z-30 top-10 py-1 bg-white shadow-lg border-b border-blue-400 ">
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
         <label for="menu-toggle" className="cursor-pointer md:hidden block">
            <svg className="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>menu</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label>
         <input className="hidden" type="checkbox" id="menu-toggle"/>
         
         <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
               <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                  <li><a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Home</a></li>
                  <li><a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">About</a></li>
               </ul>
            </nav>
         </div>
      
      </div>
   </nav>
  )
}

export default Navbar;