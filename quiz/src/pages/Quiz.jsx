import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    answer: "Vatican City"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Silver", "Oxygen", "Iron"],
    answer: "Oxygen"
  },
  {
    question: "In which year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    answer: "1945"
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Won", "Yen", "Rupee"],
    answer: "Yen"
  }
];

const Quiz = ({ score, setScore }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[questionIndex].answer) {
      setScore(score + 1);
    }

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-600 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 mb-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-blue-600">Quiz Challenge</h1>
            <div className="text-right">
              <p className="text-lg font-semibold text-green-600">Score: {score}</p>
              <p className="text-sm text-gray-500">
                Question {questionIndex + 1} of {questions.length}
              </p>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h2 className="font-bold text-xl mb-6 text-gray-800 leading-relaxed">
            {questionIndex + 1}. {questions[questionIndex].question}
          </h2>
          
          <div className="space-y-3">
            {questions[questionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="block w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-gray-700 font-medium"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-600 rounded-full text-sm font-bold mr-3">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
