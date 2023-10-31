import Link from 'next/link'
import React from 'react'
import { FaGithubSquare, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-4">Backend Excellence</h2>
                <p className="text-sm mb-4">Ubicado en : Salta, Argentina</p>
                <div className="flex items-center space-x-4">
                    <a href="https://github.com/BackendExcellence" target="_blank" rel="noreferrer"><FaGithubSquare size={30} /></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter size={30} /></a>
                    <a href="https://www.instagram.com/backendexcellence/" target="_blank" rel="noreferrer"><FaInstagram size={30} /></a>
                    <a href="https://wa.link/19yvda" target="_blank" rel="noreferrer"><FaWhatsapp size={30} /></a>
                    {/* Add more social icons as needed */}
                </div>
                <p className='mt-4 font-bold text-xs'>Copyright © 2023 - All right reserved by BackendExcellenceLLC</p>
            </div>
        </footer>
    )
}

export default Footer