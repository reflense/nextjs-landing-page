import React from "react";
import talent from "../assets/svg/2.svg";
import line1 from "../assets/svg/3.svg";
import line2 from "../assets/svg/5.svg";
import quality from "../assets/svg/6.svg";
import person from "../assets/svg/4.svg";
const Quality = () => {
  return (
    <div className=" bg-[#e3d9d9] py-12 xl:min-h-screen">
      <div className="max-w-[1660px] flex flex-col lg:pt-32 mx-auto relative px-4">
        <p className="font-bold xl:text-4xl text-3xl mb-10 text-center text-[#f45b31] xl:hidden">
          Endless Talent, Unmatched Quality
        </p>
        <div className="md:flex items-center justify-center md:flex-row flex-col xl:hidden hidden mb-10">
          <div className="w-[250px] relative">
            <img src={line1} alt="line" className="hidden md:block -rotate-45 absolute left-1/2 w-[200px] top-full" />
            <p className="left-0 -top-1 text-center font-bold text-sm">
              Unlock access to a vast pool of top-tier talent that fits your
              needs
            </p>
          </div>
          <div className="w-[200px]">
            <img src={quality} alt="quality" />
          </div>
          <div className="w-[250px] relative">
            <img src={line2} alt="line" className="hidden md:block rotate-45 absolute right-1/2 w-[200px] top-full" />
            <p className=" left-0 -top-3 text-center font-bold text-sm">
              Discover top talent efficiently, saving time and energy
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-row flex-col gap-10">
          <div className="relative xl:w-auto md:w-1/2 max-w-[450px] max-md:mx-auto">
            <img className="xl:max-w-[300px] max-w-[420px] min-[1670px]:max-w-[450px] w-full" src={talent} alt="talent" />
            <p className="absolute xl:-bottom-8 xl:left-28 min-[400px]:left-[160px] left-[120px] bottom-0 font-bold text-xs min-[400px]:text-sm">
              With our rockstar recruiter network
            </p>
          </div>
          <div className="xl:flex items-center md:flex-row flex-col md:hidden flex">
            <div className="w-[180px] relative md:mt-16 ">
              <img src={line1} alt="line" className="hidden md:block" />
              <p className="md:absolute left-0 -top-1 text-center font-bold text-sm">
                Unlock access to a vast pool of top-tier talent that fits your
                needs
              </p>
            </div>
            <div className="w-[200px]">
              <img src={quality} alt="quality" />
            </div>
            <div className="w-[180px] relative md:mt-16">
              <img src={line2} alt="line" className="hidden md:block" />
              <p className="md:absolute left-0 -top-3 text-center font-bold text-sm">
                Discover top talent efficiently, saving time and energy
              </p>
            </div>

          </div>
          <div className="max-w-[450px] relative">
            <img
              className="max-w-[450px] w-full"
              src={person}
              alt="person"
            />
            <p className="absolute -right-0 top-[78px] text-center font-bold text-xs min-[400px]:text-sm xl:top-[78px] max-w-[200px] lg:top-[100px] md:top-[80px] md:right-5">
              With ratings and skill evaluations from trusted and authentic
              recruiters
            </p>
          </div>
        </div>
        <p className="font-bold xl:text-4xl md:text-2xl text-xl mt-10 text-center text-[#f45b31] xl:block hidden">
          Endless Talent, Unmatched Quality
        </p>
        <div className="flex items-center md:justify-between justify-center lg:px-10 mt-20 flex-wrap gap-2">
          <button className="rounded-full px-5 xl:px-16 py-2 inline-block bg-[#f45b31] font-semibold text-white md:text-lg lg:text-xl">
            Post Your Jobs Now
          </button>
          <button className="rounded-full px-5 xl:px-16 py-2 inline-block bg-[#f45b31] font-semibold text-white md:text-lg lg:text-xl">
            Check All Jobs
          </button>
          <button className="rounded-full px-5 xl:px-16 py-2 inline-block bg-[#f45b31] font-semibold text-white md:text-lg lg:text-xl">
            Hurry! Refer Your Talents
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quality;