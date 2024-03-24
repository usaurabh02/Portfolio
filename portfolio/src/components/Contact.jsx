import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";

export const Contact = () => {
  return (
    <div
      className={`bg-white  text-[16px] sm:text-[18px] text-justify w-full h-full flex justify-center items-center rounded-lg overflow-y-scroll no-scrollbar`}
    >
      <div
        className={`text-justify p-4 flex flex-col overflow-auto ${
          window.innerWidth > 1200 ? "w-[80%] flex flex-wrap" : ""
        }`}
        style={{ maxHeight: "100%" }}
      >
        <div className="p-4 text-[28px] mb-2 sm:text-[28px]">
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
            CONTACT
          </p>
        </div>
        <div
          className={`justify-center items-center flex flex-wrap gap-4 ${
            window.innerWidth > 1150 ? "gap-[100px]" : ""
          }`}
        >
          <div
          className={`w-[400px] h-full ${
              window.innerWidth > 900 ? "h-full w-[40%]" : ""
            }`}
          >
            <p
              className="text-black text-[20px] w-[400px]"
              style={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: "10",
                lineHeight: "1.8em",
                letterSpacing: -0.5,
                whiteSpace: "normal",
              }}
            >
              Always ready to explore new opportunities. Get in touch with me.
            </p>
            <div className="w-full">
              <div className="mt-5 space-y-5 md:mt-8">
                <div className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p
                  className="mx-1 mt-[4px] text-[16px] text-gray-700 w-80"
                    style={{
                      fontFamily: "'Rubik', sans-serif",
                      lineHeight: "1em",
                      letterSpacing: -0.5,
                      whiteSpace: "normal",
                    }}
                  >
                    Surat, Gujarat, India.
                  </p>
                </div>
                <div className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <p
                  className="mx-1 mt-[3px] text-[16px] text-gray-700 w-80"
                    style={{
                      fontFamily: "'Rubik', sans-serif",
                      lineHeight: "1em",
                      letterSpacing: -0.5,
                      whiteSpace: "normal",
                    }}
                  >
                    (+91) 9265893860
                  </p>
                </div>

                <div className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <p
                  className="mx-1 mt-[3px] text-[16px] text-gray-700 w-80"
                    style={{
                      fontFamily: "'Rubik', sans-serif",
                      lineHeight: "1em",
                      letterSpacing: -0.5,
                      whiteSpace: "normal",
                    }}
                  >
                    saurabhu154@gmail.com
                  </p>
                </div>
              </div>
              <div className="mt-4 w-[300px] flex flex-wrap">
                <h3 className="text-gray-600 dark:text-gray-300 ">Social Media</h3>
                <div className="flex -mx-[10px] items-center justify-center">
                  <ul className="social-media-list flex items-center justify-center">
                    <li>
                    <a href="https://github.com/xr-dev-saurabh" target="_blank" rel="noopener noreferrer" className="contact-icon">
                    <button className="mt-[7px] ml-[-0.5px]">
                      <FaGithub size={31} className="" />
                    </button>
                  </a>
                  
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/im100rabhupadhyay" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <button className="p-[9px]">
                          <FaLinkedinIn size={28} className="" />
                        </button>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/code_saurabh" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <button className="p-[9px]">
                          <FaXTwitter size={26} className="" />
                        </button>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/im100rabhupadhyay/" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <button className="p-[7px]">
                          <FaInstagram size={30} className="" />
                        </button>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.reddit.com/user/im100rabhupadhyay/" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <button className="mt-[7px] ml-[-0.8px]">
                          <FaReddit size={31}  />
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[400px]">
            <div className="px-4 py-2 mx-auto mt-2  bg-[#ffffff] rounded-lg shadow-xl shadow-[#f4f4f4]">
              <form className="mt-2" action="https://getform.io/f/lbkmgovb" method="POST">
                <div className="flex-1">
                  <label
                  className="block mb-2 text-gray-600 "
                    style={{
                      fontFamily: "'Rubik', sans-serif",
                      lineHeight: "1em",
                      letterSpacing: -0.5,
                      whiteSpace: "normal",
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="block w-full px-5 py-[5px] mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 mt-4">
                  <label
                  className="block mb-2  text-gray-600 "
                    style={{
                      fontFamily: "'Rubik', sans-serif",
                      lineHeight: "1em",
                      letterSpacing: -0.5,
                      whiteSpace: "normal",
                    }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    required
                    className="block w-full px-5 py-[5px] mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label
                  className="block mb-2  text-gray-600"
                    style={{
                      fontFamily: "'Rubik', sans-serif",
                      lineHeight: "1em",
                      letterSpacing: -0.5,
                      whiteSpace: "normal",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                  className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-30 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="w-full px-6 py-[10px] mt-4 mb-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
