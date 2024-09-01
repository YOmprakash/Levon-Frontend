import React from "react";
import student from "../assets/student.png";
import teacher from "../assets/teacher.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(page);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <h1 className="text-4xl font-bold text-white mb-8">
        Welcome to the School Management System
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Student Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
          <img
            src={student}
            alt="Students"
            className="w-32 h-32 mb-4 rounded-full border-4 border-indigo-500"
          />
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Students</h2>
          <p className="text-gray-600 mb-4 text-center">
            Manage students and their details
          </p>
          <button
            onClick={() => navigateToPage("/students")}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300"
          >
            Login
          </button>
        </div>

        {/* Teacher Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
          <img
            src={teacher}
            alt="Teachers"
            className="w-32 h-32 mb-4 rounded-full border-4 border-green-500"
          />
          <h2 className="text-2xl font-bold text-green-600 mb-4">Teachers</h2>
          <p className="text-gray-600 mb-4 text-center">
            Manage teachers and their details
          </p>
          <button
            onClick={() => navigateToPage("/teachers")}
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
