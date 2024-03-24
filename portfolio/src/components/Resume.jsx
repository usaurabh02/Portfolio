import React from "react";
import ResumeFile from "../assets/Internship Certificate- Abel.pdf";

export const Resume = () => {
  return (
    <div
      className={`bg-white  text-[16px] sm:text-[18px] text-justify w-full h-full flex justify-center items-center rounded-lg overflow-y-scroll no-scrollbar`}
    >
      <div
        className={`text-justify p-2 flex flex-col ${
          window.innerWidth > 900 ? "max-w-[80%]" : ""
        }`}
        style={{ maxHeight: "100%" }}
      >
        <div className="p-4 text-[30px] mb-2 sm:text-[30px]">
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              flex: "1 1 0%",
              fontWeight: "500",
              lineHeight: "1em",
              textAlign: "center",
              color: "black",
              letterSpacing: 0.5,
            }}
          >
            Resume
          </p>
        </div>
        <div className="card mt-[50px]">
          <div className="relative mb-4 bg-black w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center">
          <a href={ResumeFile} download="Saurabh_Resume.pdf" className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-[70px]">
            <button >
              <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
                Thank You
              </p>
              <p className="px-10 text-[10px] sm:text-[12px] text-gray-700 text-center">
                I am pleased, you took the time to review my portfolio. For a
                copy of my resume, click below.
              </p>
              <p className="font-sans text-[10px] text-gray-700 pt-4">
                ~ SAURABH ~
              </p>
            </button>
            </a>
            <button className="seal bg-rose-500 text-red-800 w-[50px] aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
              Open
            </button>
            <div className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
            <div className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
            <div className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
            <div className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
