import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const NavigationBar = () => {
    const[isNavOpen,setIsNavOpen]=useState(false);
    const handlenavbar=()=>{
        setIsNavOpen(!isNavOpen)
    }
    return(
        <nav className= " w-[100vw] h-16 bg-black">
        <div className=' flex  justify-center items-center mr-12 relative top-4  md:justify-end'>
               <h1 className=' text-white flex text-2xl ml-9 font-bold '>Tech Anatix</h1>
            <button type="button" className=" absolute right-[-2rem] sm:absolute sm:right-0  items-center p-2 w-10 h-10 justify-end text-sm text-gray-500 md:hidden  focus:ring-2 " onClick={handlenavbar}>     
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          
        <div className={` z-20 md:hidden absolute top-[3rem] right-[-3rem] bg-black w-[27vw] ${isNavOpen ? 'block' : 'hidden'}`}>
          <Link className=" text-white p-2 flex justify-center  " onClick={handlenavbar} to="/">Home</Link>
          <Link className=" text-white  p-2  flex  justify-center" onClick={handlenavbar} to="/AddProductForm">AddProductForm</Link>
          <Link className=" text-white p-2 flex justify-center" onClick={handlenavbar} to="/SalesPage">SalesPage</Link>
        </div>
        <div className='hidden md:flex flex-1 justify-end items-end space-x-12 mb-1 text-xl font-medium'>
          <Link className="text-white cursor-pointer" to="/">Home</Link>
          <Link className='text-white cursor-pointer' to="/AddProductForm">AddProductForm</Link>
          <Link className="text-white cursor-pointer" to="/SalesPage">SalesPage</Link>
        </div>
        </div>
    </nav>
    )
}
export default NavigationBar