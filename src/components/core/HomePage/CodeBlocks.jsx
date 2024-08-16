import React from "react";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({ codeblock, codeColor, grad }) => {
  return (
    <div className="h-[320px]   z-[100]  code-border flex flex-row py-3  sm:text-sm leading-[18px] sm:leading-6 relative  w-[300px] md:w-[400px]   lg:w-[400px]">
      {/* Gradient */}
      {grad}

      {/* Indexing */}

      <div className="text-center flex flex-col   w-[10%] select-none text-richblack-400 font-inter font-bold ">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
      </div>

      {/* Codes */}
      <div
        className={`w-[90%]   font-bold font-mono ${codeColor} pr-1`}
      >
        <TypeAnimation
          sequence={[codeblock, 500, ""]}
          cursor={true}
          repeat={Infinity}
          style={{
            whiteSpace: "pre-line",
            display: "block",
          }}
          omitDeletionAnimation={true}
        />
      </div>
    </div>
  );
};

export default CodeBlocks;
