import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const letter = [
  "",
  "Dear Person, \n\nThis is a love letter. I wrote it, and you a reading it. I don't know who you are, but I hope you feel loved, I guess. It probably will say stuff about how much I like you. It will probably have some other stuff too. This is the end of the letter.\n\nRegards,\nMe",
];
const ps = ["", "P.S. press 'c' to hide/show the card."];

const DELAY_TIME = 1000;
const FIRST_LINE_TIME = 300;
const SECOND_LINE_TIME = 7500;
const THIRD_LINE_TIME = 300;
const FOURTH_LINE_TIME = 300;

const LoveLetter = () => {
  return (
    <div className="ll-container fold-in">
      <div className="ll">
        <div className="ll-title">
          <Typewriter words={letter} typeSpeed={25} delaySpeed={DELAY_TIME} />
        </div>
        <div className="ll-ps">
          <Typewriter
            words={ps}
            typeSpeed={25}
            delaySpeed={
              DELAY_TIME +
              FIRST_LINE_TIME +
              SECOND_LINE_TIME +
              THIRD_LINE_TIME +
              FOURTH_LINE_TIME
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
