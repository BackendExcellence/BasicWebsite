import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32 h-30">
                        <Link href='/' className='font-bold mt-2'>Home</Link>
                        <Link href='/pages/about' className='font-bold mt-2'>About</Link>
                        <Link href='/pages/contact' className='font-bold mt-2'>Contact</Link>
                        </ul>
                    </div>
                </div>
                <Link className='font-bold text-2xl text-cyan-200 transition-all duration-300 ease-in-out transform hover:scale-125' href="/">WebDev</Link>
                <div className= "navbar-center hidden lg:flex w-[70%] justify-evenly">
                    <ul className="menu menu-horizontal gap-20">
                        <Link href='/' className="font-bold text-xl text-white hover:text-gray-500 transition-all duration-300 ease-in-out transform hover:scale-125">Home</Link>
                        <Link href='/pages/about' className='font-bold text-xl text-white hover:text-gray-500 transition-all duration-300 ease-in-out transform hover:scale-125'>About</Link>
                        <Link href='/pages/contact' className='font-bold text-xl text-white hover:text-gray-500 transition-all duration-300 ease-in-out transform hover:scale-125'>Contact</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='lg:hidden btn ml-10' href="/pages/contact">Consultar Ahora !</Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar
