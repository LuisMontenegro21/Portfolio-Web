import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';

const Skills = () => (
  <div className="bg-gray-100 min-h-screen p-8">
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">My Skills</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        I have not yet mastered fully all of my skills in web development, but for the moment
        I have learned the following languages and frameworks.
      </p>
      <ul className="flex justify-center space-x-8 bg-white p-4 rounded shadow-md">
        <li className="text-center">
          <FaHtml5 className="text-6xl text-red-600 mb-2 mx-auto" />
          <span className="text-xl text-gray-800">HTML</span>
        </li>
        <li className="text-center">
          <FaCss3Alt className="text-6xl text-blue-600 mb-2 mx-auto" />
          <span className="text-xl text-gray-800">CSS</span>
        </li>
        <li className="text-center">
          <FaJsSquare className="text-6xl text-yellow-500 mb-2 mx-auto" />
          <span className="text-xl text-gray-800">JavaScript</span>
        </li>
        <li className="text-center">
          <FaReact className="text-6xl text-blue-500 mb-2 mx-auto" />
          <span className="text-xl text-gray-800">React</span>
        </li>
        <li className="text-center">
          <FaNodeJs className="text-6xl text-green-500 mb-2 mx-auto" />
          <span className="text-xl text-gray-800">Node.js</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Skills;
