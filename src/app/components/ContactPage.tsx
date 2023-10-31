"use client"
import React from 'react';
import { FaWhatsapp, FaGithubSquare, FaInstagram } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl text-slate-500 font-bold mb-8">Redes Sociales</h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-slate-700">Connectarte con nosotros</h2>

          <ul className="text-xl">
            <li className="flex items-center space-x-4 mb-4">
              <FaWhatsapp size={30} className="text-green-600" />
              <span className='text-black'>WhatsApp:</span>
              <a
                target='_blank'
                href="https://wa.link/19yvda"
                className="text-green-500 hover:underline"
              >
                Enviar mensaje por whatsapp
              </a>
            </li>

            <li className="flex items-center space-x-4 mb-4">
              <FaGithubSquare size={30} className="text-blue-800" />
              <span className='text-black'>Github:</span>
              <a
                href="https://github.com/BackendExcellence"
                target='_blank'
                className="text-blue-800 hover:underline"
              >
                Visitanos en Github
              </a>
            </li>

            <li className="flex items-center space-x-4">
              <FaInstagram size={30} className="text-pink-600" />
              <span className='text-black'>Instagram:</span>
              <a
                href="https://www.instagram.com/backendexcellence/"
                target='_blank'
                className="text-pink-600 hover:underline"
              >
                Follow us on Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
