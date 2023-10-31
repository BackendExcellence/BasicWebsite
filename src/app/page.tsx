"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-6 text-blue-700"
        >
          Hola, me llamo Backendexcellence<br/>
          Soy desarrollador web <br/>
          Front y Backend
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg text-black font-medium max-w-md mx-auto"
        >
          ¡Soy un apasionado desarrollador web dedicado a crear sitios web amigables y receptivos! Con experiencia en tecnologías web modernas, ofrezco soluciones a medida para satisfacer tus necesidades únicas. ¡Convirtamos tus ideas en realidad!
        </motion.p>
        <Link className='btn mt-7 mr-1' href="pages/contact">Consultar Ahora !</Link>
      </motion.div>
    </div>
  );
};