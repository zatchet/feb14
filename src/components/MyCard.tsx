import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const words = ["Will you be my Valentine?"];

const FIRST_LINE_TIME = 2700;

const MyCard = ({ onYesClick }) => {
  const [firstLineDone, setFirstLineDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFirstLineDone(true);
    }, FIRST_LINE_TIME);
  }, []);

  const handleClick = (e: any) => {
    const text = e.target.innerText;
    if (text === "Yes") {
      setFadeOut(true);
      setTimeout(() => {
        onYesClick();
      }, 800); // Match the duration of the fade-out animation
    } else {
      alert("Wrong answer! Try again!");
    }
  };

  return (
    <div className={`card-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="card">
        <div className="heart"></div>
        <div className="card-writer">
          <Typewriter words={words} typeSpeed={35} />
        </div>
        {firstLineDone && (
          <div className="options fade-in">
            <span onClick={handleClick} className="option">
              Yes
            </span>
            <span onClick={handleClick} className="option">
              No
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCard;
