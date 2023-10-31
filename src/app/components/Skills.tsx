import React from 'react';

const SkillsSection: React.FC = () => {
    return (

        <div className="w-full max-w-3xl bg-white rounded-lg p-8 flex flex-col md:flex-row">
            {/* Left Section: List of Languages */}
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Front End</h2>
                <ul className="space-y-2">
                    <li className="flex items-center">
                        <span className="bg-blue-500 h-2 w-2 mr-2 rounded-full" />
                        <span className="text-gray-700 font-bold">HTML, CSS, JavaScript</span>
                    </li>
                    <li className="flex items-center">
                        <span className="bg-blue-500 h-2 w-2 mr-2 rounded-full" />
                        <span className="text-gray-700 font-bold">React.js</span>
                    </li>
                    <li className="flex items-center">
                        <span className="bg-blue-500 h-2 w-2 mr-2 rounded-full" />
                        <span className="text-gray-700 font-bold">Next.js</span>
                    </li>
                    <li className="flex items-center">
                        <span className="bg-blue-500 h-2 w-2 mr-2 rounded-full" />
                        <span className="text-gray-700 font-bold">TailWindCSS</span>
                    </li>
                    {/* Add more languages as needed */}
                </ul>
            </div>

            {/* Right Section: List of Frameworks */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-4">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Backend</h2>
                <ul className="space-y-2">
                    <li className="flex items-center">
                        <span className="bg-green-500 h-2 w-2 mr-2 rounded-full" />
                        <span className="text-gray-700 font-bold">Express</span>
                    </li>
                    <li className="flex items-center">
                        <span className="bg-green-500 h-2 w-2 mr-2 rounded-full" />
                        <span className="text-gray-700 font-bold">mySQL, MongoDB, PostgreSQL</span>
                    </li>
                    <li className="flex items-center">
                        <span className="bg-green-500 h-2 w-2 mr-2 rounded-full" />
                        <span className="text-gray-700 font-bold">Django</span>
                    </li>
                    {/* Add more frameworks as needed */}
                </ul>
            </div>
        </div>
    );
};

export default SkillsSection;
