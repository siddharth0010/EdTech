import React from "react";

const HighlightText = ({ text }) => {
  return (
    <span
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #1FA2FF, #12D8FA, #A6FFCB)",
        color: "transparent",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        fontWeight: "bold",
        lineHeight: "1.5", // Adjust the line-height as needed
        display: "inline-block", // Ensures that the span expands vertically to cover the gradient
      }}
    >
      {text}
    </span>
  );
};

export default HighlightText;
