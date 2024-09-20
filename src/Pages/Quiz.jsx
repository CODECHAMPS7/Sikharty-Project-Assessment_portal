import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Data } from "./Data"; // Import your data

const Quiz = () => {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(data.length).fill(null)); // State for selected answers
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to move to the next question or finish the quiz
  const next = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      finishQuiz(); // Call finishQuiz if it's the last question
    }
  };

  // Function to finish the quiz
  const finishQuiz = () => {
    // Display score and handle submission logic
    document.querySelector(".score").innerHTML = `<p>Your Score: ${score}/${data.length}</p>`;
    document.querySelector(".quiz").style.display = "none";
    // document.getElementById('next').style.display = 'none';
    document.getElementById('submit').style.display = 'none';
    document.getElementById('previous').style.display = 'none';

    // Add finish button
    const finishBtn = document.createElement("button");
    finishBtn.innerHTML = "Finish";
    finishBtn.classList.add(
      "finish",
      "bg-red-500",
      "text-white",
      "px-6",
      "py-2",
      "rounded-lg",
      "hover:bg-red-700",
      "transition",
      "duration-300",
      "ml-4" // Add margin-left to the "Finish" button
    );
    finishBtn.addEventListener("click", () => navigate("/")); // Navigate to home page
    document.querySelector(".btns").appendChild(finishBtn);
  };

  // Function to move to the previous question
  const previous = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  // Handle radio input change
  const handleInput = (event) => {
    const chooseVal = event.target.value;
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = chooseVal; // Save selected answer

    if (chooseVal === data[index].ans) {
      setScore(score + 1);
    }

    setSelectedAnswers(newSelectedAnswers); // Update state
  };

  return (
    <div className="section flex justify-center items-center bg-[#5a87a6]" style={{ minHeight: '75.9vh' }}>
      <div className="container mx-auto max-w-lg p-6 bg-[#e2e8f0] shadow-lg rounded-lg">
        <div className="quiz">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Q{index + 1}: {data[index].q}
            </h1>
            <p className="text-gray-600">Question {index + 1} of {data.length}</p>
          </div>

          {/* Options */}
          {['a', 'b', 'c', 'd'].map((option) => (
            <div key={option} className="option mb-4 flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
              <input
                name="select"
                type="radio"
                onChange={handleInput}
                className="checkedValue mr-3"
                value={data[index][option]}
                checked={selectedAnswers[index] === data[index][option]} // Check if this is the selected answer
              />
              <p className="text-gray-700">{option.toUpperCase()}: {data[index][option]}</p>
            </div>
          ))}
        </div>

        {/* Score display */}
        <div className="score text-center text-xl text-green-600 mt-6">
          {/* Dynamic score here */}
        </div>

        {/* Navigation buttons */}
        <div className="btns flex justify-center mt-8">
          {/* Conditionally render the Previous button */}
          {index > 0 && (
            <button
              id="previous"
              onClick={previous}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300 mr-4"
            >
              Previous
            </button>
          )}
          {index < data.length - 1 ? (
            <button
              id="next"
              onClick={next}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Next
            </button>
          ) : (
            <button
              id="submit"
              onClick={finishQuiz}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;