import React from "react";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
  {
    Logo: Logo1,
    Heading: "Empowerment",
    Description:
      "Empowering engineers to reach their full potential through quality education.",
  },
  {
    Logo: Logo2,
    Heading: "Innovation",
    Description:
      "Fostering innovation by providing cutting-edge programming courses.",
  },
  {
    Logo: Logo3,
    Heading: "Adaptability",
    Description:
      "Adapting to the ever-evolving tech landscape with flexible learning solutions.",
  },
  {
    Logo: Logo4,
    Heading: "Problem-Solving",
    Description:
      "Equipping engineers with problem-solving skills to tackle real-world challenges.",
  },
];

const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center   ">
        <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3" key={i}>
                <div className="flex gap-6" key={i}>
                  <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={ele.Logo} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                    <p className="text-base">{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={`hidden ${
                    TimeLine.length - 1 === i ? "hidden" : "lg:block"
                  }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>

        <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <div
            className=" rounded-xl absolute lg:left-[50%] 
                           lg:bottom-0 
                          lg:translate-x-[-50%] 
                           lg:translate-y-[50%] 
                           bg-[#041E42] 
                           flex lg:flex-row flex-col 
                           text-white uppercase 
                           py-5 gap-4 lg:gap-0 lg:py-10 "
          >
            {/* Section 1 */}

            <div className=" flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
              <h1 className="text-3xl font-bold w-[75px]">11+</h1>
              <h1 className="text-caribbeangreen-300 text-xs w-[75px]">
                Years Of experience
              </h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold w-[75px]">250+</h1>
              <h1 className="text-caribbeangreen-300 text-xs w-[75px]">
                types of courses
              </h1>
            </div>
          </div>

          <img
            src={TimeLineImage}
            alt="timelineImage"
            className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-[600px] lg:w-[600px] "
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
