// Icons Import
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./divider.css";

// Component Imports
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import HighlightText from "../components/core/HomePage/HighlightText";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import Cube from "../components/core/HomePage/Cube";

function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Become a Instructor Button */}

        <Link to="/signup" className="text-center ">
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-600 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p className="text-lg"> Learn / Teach</p>

              <FaArrowRight className="text-richblack-200 text-xl" />
            </div>
          </div>
        </Link>

        {/* Heading */}

        <div className="text-center text-4xl z-[10] font-semibold">
        Empower Your Future with {" "}
          <HighlightText text={"Coding Skills"} />
        </div>

        {/* Sub Heading */}

        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        {/* code block */}
        <div className="flex  gap-36">
          <div className="  mx-3 my-7 shadow-[10px_-5px_50px_-5px]  shadow-blue-200">
            <CodeBlocks
              grad={<div className="codeblock1 absolute"></div>}
              codeColor={"text-white"}
              codeblock={` #include<iostream>

                 using namespace std;
              
                 int main() 
                 {  
                  
                  cout<<"NAMASTE DUNIYA"; 

                  return 0; 
                 } `}
            />
          </div>

          <div className=" hidden md:block mx-3 my-7  shadow-[10px_-5px_50px_-5px]  shadow-blue-200">
            <CodeBlocks
              grad={<div className="codeblock3 absolute"></div>}
              codeColor={"text-white"}
              codeblock={`#
              #[macro_use] extern crate rocket;
              #[get("/")]
              fn index() -> &'static str {
                  "Hello, World!"
              }
              fn main() {
                  rocket::ignite().mount("/", routes![index]).launch();
              }
              `}
            />
          </div>
        </div>

        <div className="hidden md:block">
          <div className="  mx-3 my-7 shadow-[10px_-5px_50px_-5px]  shadow-blue-200">
            <CodeBlocks
              grad={<div className="codeblock2 absolute"></div>}
              codeColor={"text-white"}
              codeblock={`
               const factorial = (n) => {
                if (n === 0 || n === 1){
                  return 1;
                }  
                 else  {
                  return n * factorial(n - 1);
                }
              }
              console.log(factorial(5));  
            
              `}
            />
          </div>
        </div>

        {/* Cube  1  */}

        <div>
          <Cube
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Log In",
              link: "/login",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/about",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Cube  2 */}

        <div>
          <Cube
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* div */}

        <b className="hr anim"></b>

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}

      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]"></div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}

          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[100%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div
        className="relative mx-auto my-20 flex 
                   w-11/12 max-w-maxContent 
                    flex-col items-center 
                    justify-between gap-8
                     bg-[#020936] text-white"
      >
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviews from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>

        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
