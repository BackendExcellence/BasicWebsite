import React from 'react';
import SkillsSection from './Skills';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Acerca de mi servicios</h1>
        <p className="text-black text-base mb-4">
          Mis principales productos son los sitios web. Pueden ser sitios web personales, sitios web de empresas, etc. Tú mismo puedes diseñarlo o si no quieres podemos diseñarlo para ti. También puede proporcionar otro sitio al que desee que se parezca el suyo. En función de su decisión, elaboraré un mapa para maximizar la eficiencia y devolver un producto con el que esté satisfecho.<br />
          Además de los sitios web, también ofrezco servicios generales de IT. Ya sea en redes, ciberseguridad, gestión de servidores, estoy orientado a todo lo anterior.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Nuestra Misión</h2>
        <p className="text-black mb-6 text-lg">
          El objetivo principal es informar a todas las personas sobre cómo funciona el internet y cómo podemos utilizarlo para promocionar nuestros productos, servicios, ideas o videos. El internet es algo increíble si se usa correctamente. Creo firmemente que este es el futuro de nuestro mundo.
        </p>
        <SkillsSection />
      </div>
    </div>
  );
};

export default AboutPage;

