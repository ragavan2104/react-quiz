import React from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ score, user }) => {
  const navigate = useNavigate();
  const totalQuestions = 8; // Update this to match the number of questions in Quiz.jsx
  const percentage = Math.round((score / totalQuestions) * 100);

  const getResultMessage = () => {
    if (percentage >= 80) {
      return {
        message: "Excellent! 🎉",
        color: "text-green-600",
        bgColor: "bg-green-100",
        description: "You have excellent knowledge!"
      };
    } else if (percentage >= 60) {
      return {
        message: "Good Job! 👍",
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        description: "You did well, keep learning!"
      };
    } else if (percentage >= 40) {
      return {
        message: "Not Bad! 🤔",
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        description: "There's room for improvement!"
      };
    } else {
      return {
        message: "Keep Trying! 💪",
        color: "text-red-600",
        bgColor: "bg-red-100",
        description: "Practice makes perfect!"
      };
    }
  };

  const result = getResultMessage();

  const handleRestart = () => {
    navigate("/");
  };

  const handleRetakeQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h1>
          <p className="text-gray-600">Great job, {user || "Anonymous"}! 🎯</p>
        </div>

        <div className={`${result.bgColor} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold ${result.color} mb-2`}>{result.message}</h2>
          <p className={`${result.color} font-medium`}>{result.description}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-800 mb-2">
              {score}/{totalQuestions}
            </div>
            <div className="text-2xl font-semibold text-blue-600 mb-2">
              {percentage}%
            </div>
            <p className="text-gray-600">Final Score</p>
          </div>
          
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleRetakeQuiz}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-medium"
          >
            Retake Quiz
          </button>
          
          <button
            onClick={handleRestart}
            className="w-full bg-gray-600 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition duration-200 font-medium"
          >
            Start Over
          </button>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          <p>Thank you for taking the quiz!</p>
          <p>Share your score with friends! 📊</p>
        </div>
      </div>
    </div>
  );
};

export default Result;