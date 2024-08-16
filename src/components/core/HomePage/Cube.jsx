import React from "react";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";
import "./style3d.css";

const Cube = ({ position, heading, subheading, ctabtn1, ctabtn2 }) => {
  return (
    <div
      className={`flex  items-center ${position} my-20 gap-[180px] flex-col `}
    >
      {/* Section 1  */}  

      <div className=" box1  w-[100%] lg:w-[50%] flex flex-col gap-8 ">
        {heading}

        {/* Sub Heading */}
        <div className="text-richblack-300 text-base font-bold w-[85%] -mt-3">
          {subheading}
        </div>

        {/* Button Group */}
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
            <div className="flex items-center gap-2">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* section 3 */}

      <div className="wrapper">
        <div className="box italic	">
          <div className="side front flex justify-center  items-center ">
            {" "}
            <div className=" text-3xl"> Immerse </div>{" "}
          </div>
          <div className="side back  flex items-center justify-center">
            {" "}
            Evolve{" "}
          </div>
          <div className="side top "> </div>
          <div className="side bottom"> </div>
          <div className="side left flex justify-center items-center">
            {" "}
            Code{" "}
          </div>
          <div className="side right flex justify-center items-center ">
            {" "}
            <div className="text-3xl">Succeed</div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
