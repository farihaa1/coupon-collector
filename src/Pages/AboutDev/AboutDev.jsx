import React from "react";
import Navbar from "../../components/Navbar";

const AboutDev = () => {
  
  return (
    <div>
      <nav className="w-full mx-auto z-10 bg-blue-950">
        <Navbar />
      </nav>
      <main  className="bg-gray-100 py-12 px-6 ">
      <div style={{ animationDuration: "3s" }}  className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12 animate__animated animate__fadeInUp">
        <h1 className="text-2xl font-bold text-blue-950 mb-4">About the Developer</h1>
        <p className="text-gray-700 my-4 text-base ">
          Hello! I am <span className="font-bold">Fariha</span>, a passionate web developer with expertise in creating responsive and user-friendly web applications. 
          With a strong foundation in React.js and modern web technologies, I enjoy solving real-world problems through code.
        </p>

        <h2 className="text-xl font-semibold text-blue-950 mb-2">My Skills</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>JavaScript (ES6+)</li>
          <li>React.js, React Router, Context API</li>
          <li>Tailwind CSS, Bootstrap</li>
          <li>Firebase Authentication, Firestore</li>
          <li>Git & GitHub</li>
          <li>Responsive Design and Cross-Browser Compatibility</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-950 mb-2 mt-8">My Projects</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>
            <strong>GadgetHeaven:</strong> An e-commerce platform with advanced filtering and cart functionalities.
          </li>
          <li>
            <strong>MyBlog:</strong> A personal blogging site with a user authentication system.
          </li>
          <li>
            <strong>WeatherNow:</strong> A weather app using OpenWeatherMap API.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-950 mt-8 mb-2">Get in Touch</h2>
        <p className="text-gray-700 mb-4">
          If you'd like to connect or work together, feel free to reach out to me:
        </p>
        <ul className="text-gray-700 space-y-1">
          <li>
            <strong>Email:</strong> <a href="mailto:farihaa@gmail.com" className="text-blue-500 hover:underline">farihaa@gmail.com</a>
          </li>
          <li>
            <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://github.com/farihaa1</a>
          </li>
        </ul>
      </div>
    </main>
    </div>
  );
};

export default AboutDev;
