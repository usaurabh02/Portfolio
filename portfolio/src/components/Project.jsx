import React from "react";
import Reealtech from "../assets/reealtech.png";
import Vamverse from "../assets/vamverse.png";
import Vambox from "../assets/vambox.png";
import DataA from "../assets/daaa.png";
import Dlp from "../assets/dlp.png";
import Mlp from "../assets/ml1.png";

const ProjectItem = ({ image, name, organisation, verify }) => {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-xl ">
      <img
        className="rounded-t-lg w-[500px] h-[250px] bg-transparent"
        src={image}
        alt=""
      />
      <div className="p-5">
        <p
          className="text-[20px] mb-2"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            flex: "1 1 0%",
            fontWeight: "500",
            lineHeight: "1em",
            textAlign: "left",
            color: "black",
            letterSpacing: 0.5,
          }}
        >
          {name}
        </p>
        <p
          className="text-gray-500 w-[390px] text-[14px]"
          style={{
            fontFamily: "'Rubik', sans-serif",
            lineHeight: "1em",
            letterSpacing: -0.5,
            whiteSpace: "normal",
          }}
        >
          {organisation}
        </p>
        <a href={verify} target="_blank" rel="noopener noreferrer">
          <button className="inline-flex items-center p-2 mt-2 text-sm font-medium text-center text-white bg-[#6486B4] rounded-lg hover:bg-[#B0C9EB]">
            Visit
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export const Project = () => {
  return (
    <div
      className={`bg-white  text-[16px] sm:text-[18px] text-justify w-full h-full flex justify-center items-center rounded-lg overflow-y-scroll no-scrollbar`}
    >
      <div
        className={`text-justify p-6  overflow-auto ${
          window.innerWidth > 1500 ? "max-w-[90%]" : ""
        }`}
        style={{ maxHeight: "100%" }}
      >
        <div className="p-4 text-[28px] mb-3 sm:text-[28px]">
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
            PROJECTS
          </p>
        </div>
        <div
          className={` mb-3 h-full w-full p-1  flex flex-wrap  items-center justify-center ${
            window.innerWidth > 1100
              ? "gap-[60px] grid grid-cols-2"
              : " gap-[50px]"
          } ${
            window.innerWidth > 1800
              ? "gap-[60px] grid grid-cols-3"
              : " gap-[50px]"
          }`}
        >
          <ProjectItem
            image={Reealtech}
            name="Reealtech"
            organisation="3D Website for Reealtech"
            verify={"https://reealtech.com/"}
          />
          <ProjectItem
            image={Vambox}
            name="Vambox"
            organisation="India's first free WebVR player for 360 content streaming."
            verify={"https://vam-box.vercel.app/"}
          />
          <ProjectItem
            image={Vamverse}
            name="Vamverse"
            organisation="3D Website for Vamverse with Virtual Try-On solutions."
            verify={"https://vamverse.com/"}
          />
          <ProjectItem
            image={Dlp}
            name="Deep Learning Project"
            organisation="Deep learning modal for safety detection in construction site."
            verify={
              "https://drive.google.com/drive/u/6/folders/19FdN02fzce7kkhTonSJbNUxMJHjv4YhU"
            }
          />
          <ProjectItem
            image={DataA}
            name="Data Analysis Project"
            organisation="Spatial & Geo-spatial data analysis."
            verify={
              "https://drive.google.com/drive/u/6/folders/1fEbuqmd3cEx4GdGeQqnH0PHf3Rr-OK70"
            }
          />
          <ProjectItem
            image={Mlp}
            name="Machine Learning Project"
            organisation="Face detection, age & gender prediction and emotion detection."
            verify={
              "https://drive.google.com/drive/u/6/folders/1R39V5RRV-4jjh6C7az-4uqIl-2Vnuss8"
            }
          />
        </div>
      </div>
    </div>
  );
};
