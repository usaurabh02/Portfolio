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
          In the ever-evolving realm of technology, there are those who adapt
          and those who dare to redefine. I proudly belong to the latter—a
          Computer Engineering graduate with a passion for crafting
          transformative and immersive experiences. My journey in the tech world
          has been a thrilling adventure, driven by an insatiable thirst for
          knowledge and innovation. From the outset of my career, I aspired to
          do more than follow trends; I sought to set them.
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
          As a Computer Engineering graduate, I have dedicated my career to
          pushing the boundaries of possibility. Over the years, I have
          accumulated extensive experience across diverse sectors and
          cutting-edge technologies, including cloud infrastructure, machine
          learning development, and extended reality (XR) applications. Each
          project and collaboration has presented unique opportunities for
          growth and learning, sharpening my ability to tackle complex
          challenges with creativity and precision.
        </div>
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontWeight: "500",
            lineHeight: "1.8em",
            fontSize: "24px",
            color: "black",
            letterSpacing: 1,
            whiteSpace: "normal",
            marginTop: "15px",
          }}
        >
          Pioneering XR Innovation
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
          {" "}
          My passion for XR has driven some of my most notable achievements:
        </div>
        <div
          style={{
            fontFamily: "'Rubik', sans-serif",
            fontWeight: "400",
            lineHeight: "1.8em",
            color: "black",
            letterSpacing: -0.5,
            whiteSpace: "normal",
            marginTop: "5px",
          }}
        >
          <ul className="list-disc list-inside">
            <li>
              Developed the{" "}
              <span className="font-bold">
                World's Most Advanced VR Tour Editor
              </span>
              , revolutionizing how virtual tours are created and experienced.
              Our product delivers a VR experience that is superior to all
              existing solutions in the market, including{" "}
              <span className="font-bold">Matterport</span>,{" "}
              <span className="font-bold">CloudPano</span>,{" "}
              <span className="font-bold">Kuula</span> and etc., offering
              unmatched immersion, customization, and ease of use.
            </li>
            <li>
              Launched{" "}
              <span className="font-bold">
                India's First VR-Powered Property Listing Portal
              </span>
              , bridging innovation and real-world usability in the real estate
              sector.
            </li>
            <li>
              Currently testing 360° Video Conferencing powered by Mediasoup and
              WebRTC, offering immersive and collaborative virtual meeting
              solutions— <span className="font-bold">a first-of-its-kind innovation</span> for any real estate
              listing marketplace.
            </li>
            <li>
              Earned recognition as one of the{" "}
              <span className="font-bold">Top 100 XR Developers in India</span>{" "}
              through the prestigious{" "}
              <span className="font-bold">XROS Fellowship</span> by Meta, FICCI,
              and Reskill.
            </li>
          </ul>
        </div>
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontWeight: "500",
            lineHeight: "1.8em",
            fontSize: "24px",
            color: "black",
            letterSpacing: 1,
            whiteSpace: "normal",
            marginTop: "15px",
          }}
        >
          Entrepreneurial Ventures
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
          As the founder of a startup specializing in XR products, I have
          focused on delivering solutions tailored to the real estate and
          hospitality industries. This journey has allowed me to combine
          technical expertise with an entrepreneurial mindset, turning
          innovative ideas into impactful, real-world applications.
        </div>

        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontWeight: "500",
            lineHeight: "1.8em",
            fontSize: "24px",
            color: "black",
            letterSpacing: 1,
            whiteSpace: "normal",
            marginTop: "15px",
          }}
        >
          Honored at Google Startup School
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
          A testament to my vision and dedication, I was invited to participate
          in Google Startup School for two consecutive years, standing out among
          thousands of startups. This incredible opportunity provided valuable
          insights, networking opportunities, and recognition for my startup's
          potential.
        </div>

        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontWeight: "500",
            lineHeight: "1.8em",
            fontSize: "24px",
            color: "black",
            letterSpacing: 1,
            whiteSpace: "normal",
            marginTop: "15px",
          }}
        >
          Vision for the Future
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
          My journey is defined by a relentless pursuit of innovation and a
          desire to make an impact. Whether it's through AI, XR, or other
          groundbreaking technologies, I am committed to developing solutions
          that enhance how we live, work, and connect. As you explore my
          portfolio, you will discover a showcase of my most notable projects,
          technical expertise, and a glimpse into the transformative solutions
          I’ve developed. I am eager to bring my skills, passion, and vision to
          new opportunities, collaborating with teams that share my drive for
          innovation and excellence.
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
