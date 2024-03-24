import React from "react";
import Josh from "../assets/josh.png";
import Satish from "../assets/satish.png";
import Rahul from "../assets/rahul.png";
import Aditya from "../assets/aditya.png";

const TestimonialItem = ({ image, name, position, verify }) => {
  return (
    <div class=" bg-white border border-gray-200 rounded-lg shadow-xl ">
      <img class="rounded-t-lg w-[380px] h-[380px]" src={image} alt="" />
      <div class="p-5">
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
          className="text-gray-500 w-[330px] text-[14px]"
          style={{
            fontFamily: "'Rubik', sans-serif",
            lineHeight: "1em",
            letterSpacing: -0.5,
            whiteSpace: "normal",
          }}
        >
          {position}
        </p>
      </div>
    </div>
  );
};

export const Testimonial = () => {
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
            TESTIMONIAL
          </p>
        </div>
        <div
          className={` mb-3 h-full w-full p-1  flex flex-wrap  items-center justify-center ${
            window.innerWidth > 1200
              ? "gap-[60px] grid grid-cols-2"
              : " gap-[50px]"
          }`}
        >
        <TestimonialItem
          image={Josh}
          name="JOSH FIELD"
          position="Technical Director & Engine Architect at Infinite Reality, Co-creator of Infinite Reality Engine"
          />
          <TestimonialItem
          image={Satish}
          name="SATISH UPADHYAY"
          position="General Manager (SADC) at Red Dot Distribution Ltd & Director at Uprising Tradex LLP"
          />
          <TestimonialItem
          image={Rahul}
          name="RAHUL GHOSH"
          position="Engine Developer at Ethereal Engine"
          />
          <TestimonialItem
          image={Aditya}
          name="ADITYA MITRA"
          position="Software Developer at Ethereal Engine"
          />
        </div>
      </div>
    </div>
  );
};
