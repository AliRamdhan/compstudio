"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeAnimations = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Service",
        1000, //
        "Tracking",
        1000,
      ]}
      wrapper="span"
      speed={10}
      style={{
        fontSize: "1.7em",
        display: "inline-block",
        marginTop: "3px",
      }}
      repeat={Infinity}
    />
  );
};

export default TypeAnimations;
