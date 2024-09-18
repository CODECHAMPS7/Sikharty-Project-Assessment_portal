import { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "High-Level Text Markup Language", "Hyper Text Multi Language"],
        answer: "Hyper Text Markup Language"
      },
      {
        question: "Which of the following is a JavaScript data type?",
        options: ["String", "Integer", "Character", "Float"],
        answer: "String"
      },
      {
        question: "In Python, which of the following is used to define a function?",
        options: ["func", "def", "function", "define"],
        answer: "def"
      },
      {
        question: "Which CSS property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "bg-color"],
        answer: "background-color"
      },
      {
        question: "What is the output of the following code: console.log(typeof null);?",
        options: ["null", "object", "undefined", "boolean"],
        answer: "object"
      },
      {
        question: "Which of the following is not a valid HTML element?",
        options: ["<div>", "<span>", "<section>", "<data>"],
        answer: "<data>"
      },
      {
        question: "In which language is the Android operating system primarily written?",
        options: ["Java", "C++", "Python", "Swift"],
        answer: "Java"
      },
      {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Standard Query Language", "Simple Query Language", "Sequential Query Language"],
        answer: "Structured Query Language"
      },
      {
        question: "In Git, what command is used to clone a repository?",
        options: ["git copy", "git clone", "git fetch", "git pull"],
        answer: "git clone"
      },
      {
        question: "What is the purpose of the `this` keyword in JavaScript?",
        options: ["It refers to the global object.", "It refers to the current function.", "It refers to the current object in context.", "It has no specific purpose."],
        answer: "It refers to the current object in context."
      }
  ];

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [score, setScore] = useState(null);

  const handleOptionChange = (questionIndex, selectedOption) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = selectedOption;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let totalScore = 0;

    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        totalScore += 1;
      }
    });

    setScore(totalScore);
  };

  const handleClear = () => {
    setUserAnswers(Array(questions.length).fill(''));
    setScore(null);
  };

  return (
    <div className="flex justify-center items-center pt-10">
      <div className=" p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">Basic Quiz</h1>
        <form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold mb-2">{question.question}</h3>
              {question.options.map((option) => (
                <div key={option} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={option}
                    name={`question-${index}`}
                    value={option}
                    checked={userAnswers[index] === option}
                    onChange={() => handleOptionChange(index, option)}
                    className="mr-2"
                  />
                  <label htmlFor={option} className="ml-2 border border-black rounded-lg p-2 cursor-pointer">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full mr-2">
              Submit
            </button>
            <button 
              type="button" 
              onClick={handleClear} 
              className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 w-full">
              Clear
            </button>
          </div>
        </form>

        {score !== null && (
          <div className="mt-6 text-center">
            <h2 className="text-lg font-bold">Your Score: {score} out of {questions.length}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
