import React from 'react';

const Projects = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">My Projects</h1>
        <ul className="space-y-4">
          <li className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Calulator</h2>
            <p className="text-gray-700 mb-4">A calculator developed using React that has necessary restrictions
            and certain limitations. Operators limited to + - * /</p>
            <a
              href="https://project1.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              View Calculator
            </a>
          </li>
          <li className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Beca4</h2>
            <p className="text-gray-700 mb-4">A college project whose purpose was to provide students and college administrators
            a way to easy check, supervise, administrate, and control the beca hours a student has to perform throughout his college career.</p>
            <a
              href="https://project2.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              View Beca4
            </a>
          </li>
          <li className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Blog</h2>
            <p className="text-gray-700 mb-4">A small blog project developed for the class.</p>
            <a
              href="https://project3.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              View Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
