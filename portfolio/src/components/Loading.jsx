import React from "react";

export const Loading = () => {
  return (
    <div className="w-full h-screen bg-[#EAEDF6] flex flex-col items-center justify-center">

      <div className="px-5 w-[290px] overflow-hidden break-words">
        <p
          className="  w-full"
          style={{
            fontFamily: "'Antonio', sans-serif",
            fontSize: 16,
            fontWeight: "50",
            lineHeight: "2em",
            textAlign: "center",
            color: "black",
            letterSpacing: -0.5,
            whiteSpace: "normal",
          }}
        >
          OPEN IN PC, TABLET OR IN DESKTOP MODE WITH SCREEN ROTATION(ZOOM &
          PINCH) FOR BETTER EXPERIENCE
        </p>
      </div>
      <div className="bar mt-[80px]">
      <div className="ball"></div>
  </div>
    </div>
  );
};

// IN DESKTOP MODE WITH SCREEN ROTATION FOR BETTER EXPERIENCE
