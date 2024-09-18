import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Data } from "./Data"; // Import your data
// import './Question.css'; // Import your CSS file

const Question = () => {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to move to the next question or show finish/play again buttons
  const next = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      document.querySelector(
        ".score"
      ).innerHTML = `<p>Your Score : ${score}/5</p>`;
      document.querySelector(".quiz").innerHTML = "";

      let nextBtn = document.querySelector("#next");
      nextBtn.innerHTML = "Play Again";
      nextBtn.classList.add("reset");
      const reset = document.querySelector(".reset");
      reset.addEventListener("click", () => {
        window.location.reload();
      });

      // Add finish button
      const finishBtn = document.createElement("button");
      finishBtn.innerHTML = "Finish";
      finishBtn.classList.add("finish");
      finishBtn.addEventListener("click", finishQuiz);
      document.querySelector(".btns").appendChild(finishBtn);
    }

    const checked = document.querySelectorAll(".checkedValue");
    checked.forEach((curVal) => {
      curVal.checked = false;
    });
  };

  // Function to navigate to home page
  const finishQuiz = () => {
    navigate("/"); // Navigate to the home page
  };

  // Handle radio input change
  const handleInput = (event) => {
    let chooseVal = event.target.value;
    if (chooseVal === data[index].ans) {
      setScore(score + 1);
    }
  };

  return (
    <div className="section py-10 bg-gray-100">
      <div className="container mx-auto max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <div className="quiz">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Q : {data[index].q}
            </h1>
          </div>

          {/* Option A */}
          <div className="option mb-4 flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input
              name="select"
              type="radio"
              onChange={handleInput}
              className="checkedValue mr-3"
              value={data[index].a}
            />
            <p className="text-gray-700">A : {data[index].a}</p>
          </div>

          {/* Option B */}
          <div className="option mb-4 flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input
              name="select"
              type="radio"
              onChange={handleInput}
              className="checkedValue mr-3"
              value={data[index].b}
            />
            <p className="text-gray-700">B : {data[index].b}</p>
          </div>

          {/* Option C */}
          <div className="option mb-4 flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input
              name="select"
              type="radio"
              onChange={handleInput}
              className="checkedValue mr-3"
              value={data[index].c}
            />
            <p className="text-gray-700">C : {data[index].c}</p>
          </div>

          {/* Option D */}
          <div className="option mb-4 flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input
              name="select"
              type="radio"
              onChange={handleInput}
              className="checkedValue mr-3"
              value={data[index].d}
            />
            <p className="text-gray-700">D : {data[index].d}</p>
          </div>
        </div>

        {/* Score display */}
        <div className="score text-center text-xl text-green-600 mt-6">
          {/* Dynamic score here */}
        </div>

        {/* Navigation buttons */}
        <div className="btns flex justify-center mt-8">
          <button
            id="next"
            onClick={next}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
