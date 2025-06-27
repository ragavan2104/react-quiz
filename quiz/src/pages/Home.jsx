import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    if (user.trim() === "") {
      alert("Please enter your name to start the quiz!");
      return;
    }
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to Quiz App</h1>
          <p className="text-gray-600">Test your knowledge with our interactive quiz!</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Enter your name:
            </label>
            <input
              id="username"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Your name here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button
            onClick={handleStartQuiz}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-medium text-lg"
          >
            Start Quiz
          </button>
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Quiz Features:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Multiple choice questions</li>
              <li>• Instant scoring</li>
              <li>• Track your progress</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
