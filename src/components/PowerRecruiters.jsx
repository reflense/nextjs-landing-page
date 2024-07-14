import React from "react";
import powerImg from "../assets/svg/8.svg";
import scoreBasedImg from "../assets/svg/9.svg";
import rightArrow from "../assets/svg/7.svg";
import leftArrow from "../assets/svg/10.svg";
import middleArrow from "../assets/svg/11.svg";
const PowerRecruiters = () => {
  return (
    <section className="xl:h-screen">
      <div className="max-w-[1660px] mx-auto px-6 py-12 sm:flex sm:items-center xl:h-[calc(100vh-64px)]">
        <div className="sm:w-[70%] sm:flex items-center relative w-full">
          <p className="text-[20px] text-[#41757D] font-bold whitespace-nowrap sm:hidden text-center mb-4">
            Power to the Recruiters
          </p>
          <img
            className=" hidden sm:block max-w-[80px] lg:max-w-[130px] xl:max-w-[200px] left-[210px] lg:left-[390px] top-[-5px] lg:top-[-15px] h-max w-full absolute"
            src={leftArrow}
            alt="scoreBasedImg"
          />
          <div className="text-center flex justify-center flex-col items-center">
            <p className="text-black font-bold text-end text-xs xl:text-base relative">
              Get access to numerous job <br className="hidden sm:block" />{" "}
              opportunities
            </p>
            <img
              className="max-w-[250px] lg:max-w-[400px] xl:max-w-[550px] h-max sm:mt-[-24px] xl:mt-[-36px] flex justify-center"
              src={powerImg}
              alt="powerImg"
            />
          </div>
          <div className="text-center relative">
            <p className="text-[20px] md:text-2xl xl:text-[32px] text-[#41757D] font-bold mb-20 whitespace-nowrap hidden sm:block">
              Power to the Recruiters
            </p>
            <img
              className="max-w-[90px] lg:max-w-[130px] h-max absolute top-[40px] right-[-15px] lg:right-[-25px] hidden sm:block"
              src={middleArrow}
              alt="middleArrow"
            />
            <p className="text-xs xl:text-base text-black font-bold sm:ml-[-170px]">
              With your expertise and our tools, ensuring every <br />
              talent you engage with gets a chance to shine.
            </p>
          </div>
        </div>
        <div className="sm:w-[30%] mt-5 sm:mt-0">
          <p className="text-black font-bold text-center sm:text-end text-xs xl:text-base flex justify-center relative sm:max-w-[417px]">
            You know your candidates better. Leverage it to find perfect
            opportunities for them. Score based on job fit, guiding effortlessly
          </p>
          <div className="relative flex justify-center sm:block">
            <img
              className="block max-w-[350px] h-max w-full"
              src={scoreBasedImg}
              alt="scoreBasedImg"
            />
            <img
              className="hidden sm:block max-w-[130px] xl:max-w-[200px] right-[-60px] top-[10px] h-max w-full absolute"
              src={rightArrow}
              alt="scoreBasedImg"
            />
          </div>
        </div>
      </div>
      <p className="bg-[#042D62] py-10 text-white text-center text-[25px]">
        Email us for any questions:{" "}
        <a
          className="duration-300 hover:opacity-70"
          href="mailto:support@reflense.com"
        >
          support@reflense.com
        </a>
      </p>
    </section>
  );
};

export default PowerRecruiters;
