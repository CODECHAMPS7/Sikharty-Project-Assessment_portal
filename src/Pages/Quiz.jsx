import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { Data } from './Data'; // Import your data
import './Question.css'; // Import your CSS file

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
            document.querySelector(".score").innerHTML = `<p>Your Score : ${score}/5</p>`;
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
        navigate('/'); // Navigate to the home page
    };

    // Handle radio input change
    const handleInput = (event) => {
        let chooseVal = event.target.value;
        if (chooseVal === data[index].ans) {
            setScore(score + 1);
        }
    };

    return (
        <div className='Section'>
            <div className='container'>
                <div className='quiz'>
                    <div>
                        <h1>Q : {data[index].q}</h1>
                    </div>
                    <div className='option'>
                        <input name='select' type='radio' onChange={handleInput} className='checkedValue' value={data[index].a} />
                        <p>A : {data[index].a}</p>
                    </div>

                    <div className='option'>
                        <input name='select' type='radio' onChange={handleInput} className='checkedValue' value={data[index].b} />
                        <p>B : {data[index].b}</p>
                    </div>

                    <div className='option'>
                        <input name='select' type='radio' onChange={handleInput} className='checkedValue' value={data[index].c} />
                        <p>C : {data[index].c}</p>
                    </div>

                    <div className='option'>
                        <input name='select' type='radio' onChange={handleInput} className='checkedValue' value={data[index].d} />
                        <p>D : {data[index].d}</p>
                    </div>
                </div>

                <div className='score'></div>
                <div className='btns'>
                    <button id='next' onClick={next}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Question;
