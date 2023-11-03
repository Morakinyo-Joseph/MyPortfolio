import React from "react";
import { TypeAnimation } from "react-type-animation";

const Title: React.FC = () => {
  return (
    <TypeAnimation
      sequence={[
        "Frontend Engineer", // Types 'One'
        2000, // Waits 1s
        "Fullstack Developer", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Software Engineer",
        2000, // Types 'Three' without deleting 'Two'
        () => {},
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="link"
      style={{ display: "inline-block" }}
    />
  );
};
export default Title;
