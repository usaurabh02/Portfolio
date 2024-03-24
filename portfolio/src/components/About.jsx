import React from "react";

export const About = () => {
  return (
    <div
      className={`bg-white  text-[16px] sm:text-[18px] text-justify w-full h-full flex justify-center items-center rounded-lg overflow-y-scroll no-scrollbar`}
    >
      <div
        className={`text-justify p-4 flex flex-col overflow-auto ${
          window.innerWidth > 900 ? "max-w-[80%]" : ""
        }`}
        style={{ maxHeight: "100%" }}
      >
        <div className="p-4 text-[20px] mb-2 sm:text-[24px]">
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
            Saurabh Upadhyay- Transforming Realities with Technology
          </p>
        </div>
        <div
          style={{
            fontFamily: "'Rubik', sans-serif",
            fontWeight: "10",
            lineHeight: "1.8em",
            color: "black",
            letterSpacing: -0.5,
            whiteSpace: "normal",
          }}
        >
          In the vast landscape of technology, there are those who simply adapt
          and those who dare to redefine. I belong to the latter, a Computer
          Engineering graduate with a relentless passion for crafting immersive
          experiences beyond reality. My journey in the tech world has been a
          thrilling adventure, driven by a thirst for knowledge. From the early days of my
          career, I knew that I wanted to do more than just follow the trends -
          I wanted to set them.
        </div>
        <div
          style={{
            fontFamily: "'Rubik', sans-serif",
            fontWeight: "10",
            lineHeight: "1.8em",
            color: "black",
            letterSpacing: -0.5,
            whiteSpace: "normal",
            marginTop: "15px",
          }}
        >
          As a Computer Engineering graduate, I have always had a passion for
          pushing the boundaries of what's possible. My career has been defined
          by a relentless pursuit of knowledge and a commitment to innovation.
          My professional journey has taken me through various sectors and
          technologies, where I've gained valuable experience and tackled
          diverse challenges. From cloud infrastructure to ML development and XR
          applications, I've had the opportunity to work with companies across
          different industries, each presenting unique opportunities for growth
          and learning.
        </div>
        <div
          style={{
            fontFamily: "'Rubik', sans-serif",
            fontWeight: "10",
            lineHeight: "1.8em",
            color: "black",
            letterSpacing: -0.5,
            whiteSpace: "normal",
            marginTop: "15px",
          }}
        >
          My journey has been marked by a commitment to innovation and a desire
          to make a difference. I am an active contributor to open-source
          projects in the XR and AI domain, and I take pride in having developed
          India's first WebVR player, making 360 content accessible to all, both
          offline and online. My entrepreneurial spirit led me to embark on a
          journey of building my startup. We're currently developing XR products
          specifically tailored for the real estate and hospitality sectors.
          This venture allows me to translate my technical expertise into
          tangible solutions that address real-world needs.
        </div>
        <div
          style={{
            fontFamily: "'Rubik', sans-serif",
            fontWeight: "10",
            lineHeight: "1.8em",
            color: "black",
            letterSpacing: -0.5,
            whiteSpace: "normal",
            marginTop: "15px",
          }}
        >
          One of my proudest achievements is being recognized as one of the top
          100 XR Developers(in India) in the XROS fellowship by Meta, FICCI, and
          Reskill. Additionally, my startup was invited for Google Startup
          School, where we were among 40 startups invited to IIMA for a
          networking event from more than 14,000 startups.
        </div>
        <div
          style={{
            fontFamily: "'Rubik', sans-serif",
            fontWeight: "10",
            lineHeight: "1.8em",
            color: "black",
            letterSpacing: -0.5,
            whiteSpace: "normal",
            marginTop: "15px",
          }}
        >
          But my journey doesn't end there. Beyond technical expertise, I'm
          deeply committed to giving back to the community. I actively volunteer
          for multiple NGOs, including Swachh Bharat Mission, Red Dot
          Foundation, Muskurahat Foundation, Humari Pehchan, and Smile
          Foundation, making a positive impact. For me, technology isn't just
          about building products; it's about using our skills and knowledge to
          create a better world for everyone.
        </div>
        <div
          style={{
            fontFamily: "'Rubik', sans-serif",
            fontWeight: "10",
            lineHeight: "1.8em",
            color: "black",
            letterSpacing: -0.5,
            whiteSpace: "normal",
            marginTop: "15px",
          }}
        >
          My vision extends to creating transformative solutions that enhance
          the way we live, work, and play. Whether through AI, XR, or other
          innovative solutions. As you explore my portfolio, you'll discover a
          collection of my most notable projects, insights into my technical
          skills and expertise, and a glimpse into the innovative solutions I've
          developed.{" "}
        </div>

        <div className="p-4 text-[20px] mt-4 mb-2 sm:text-[24px]">
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
            EDUCATIONAL QUALIFICATION
          </p>
        </div>
        <div
          className={`text-justify p-2 flex flex-col gap-8  ${
            window.innerWidth > 1000 ? " grid grid-cols-2" : ""
          }`}
        >
          <div>
            <p
              className="text-[22px] mb-2"
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
              Bachelor's in Computer Engineering
            </p>
            <p
              className="text-gray-500 text-[16px]"
              style={{
                fontFamily: "'Rubik', sans-serif",
                lineHeight: "1em",
                letterSpacing: -0.5,
                whiteSpace: "normal",
              }}
            >
              Gujarat Technological University
            </p>
            <p
              className="text-gray-500 text-[16px]"
              style={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: "10",
                lineHeight: "1.8em",
                letterSpacing: -0.5,
                whiteSpace: "normal",
              }}
            >
              2018-2022
            </p>
            <p
              className="text-gray-500 text-[16px]"
              style={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: "10",
                lineHeight: "1.8em",
                letterSpacing: -0.5,
                whiteSpace: "normal",
              }}
            >
              CGPA: 8.15/10
            </p>
          </div>
          <div>
            <p
              className="text-[22px] mb-2"
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
              Higher Secondary School Certificate (Mathematics Branch)
            </p>
            <p
              className="text-gray-500 text-[16px]"
              style={{
                fontFamily: "'Rubik', sans-serif",
                lineHeight: "1em",
                letterSpacing: -0.5,
                whiteSpace: "normal",
              }}
            >
              Gujarat State Education Board
            </p>
            <p
              className="text-gray-500 text-[16px]"
              style={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: "10",
                lineHeight: "1.8em",
                letterSpacing: -0.5,
                whiteSpace: "normal",
              }}
            >
              Samithi English Medium School (SEMS)
            </p>
            <p
              className="text-gray-500 text-[16px]"
              style={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: "10",
                lineHeight: "1.8em",
                letterSpacing: -0.5,
                whiteSpace: "normal",
              }}
            >
              2016-2018
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};