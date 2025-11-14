import React from "react";

function AboutBox({ heading, text }) {
  return (
    <div className="aboutBox">
      <div className="aboutBoxHeading">{heading}</div>
      <div className="aboutBoxText">{text}</div>
    </div>
  );
}

export default AboutBox;
