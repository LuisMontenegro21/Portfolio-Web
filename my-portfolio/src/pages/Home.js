import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 p-8 text-center min-h-screen">
      <header className="bg-green-500 text-white py-8">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </header>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-lg mb-4">
          I am a CS (computer science) student currently in my third year of college. Right now I am learning web development 
          and trying to master the basics of JS, Node, React, CSS, and other web developing tools. Here I have a small Portfolio
          that contains some of my info and projects I've worked on.
        </p>
        <Link to="/skills">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-lg">
            Learn More
          </button>
        </Link>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Calculator</h3>
            <p className="text-gray-700 mb-4">Simple calculator</p>
            <a
              href="https://project1.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              View Project
            </a>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Beca4</h3>
            <p className="text-gray-700 mb-4">A university related project</p>
            <a
              href="https://beca4.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              View Project
            </a>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Blog</h3>
            <p className="text-gray-700 mb-4">A small blog</p>
            <a
              href="https://project3.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              View Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
