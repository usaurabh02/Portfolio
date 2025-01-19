import React from "react";
import GcpA from "../assets/gcpace.png";
import GcpCd from "../assets/gcpcdll.png";
import AwsCa from "../assets/awsca.png";
import AwsCf from "../assets/awscf.png";
import MsPP from "../assets/mspp.png";
import MsAZ from "../assets/msaz.png";
import TensorF from "../assets/tensorF.png";
import Dlsp from "../assets/dlsp.png";

const CertificationItem = ({ image, name, organisation, verify }) => {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-xl ">
      <img className="rounded-t-lg w-[328px] h-[330px]" src={image} alt="" />
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
          className="text-gray-500 w-[290px] text-[14px]"
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
            Verify
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

export const Certification = () => {
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
            CERTIFICATION
          </p>
        </div>
        <div
          className={` mb-3 h-full w-full p-1  flex flex-wrap  items-center justify-center ${
            window.innerWidth > 1800
              ? "gap-[60px] grid grid-cols-4"
              : " gap-[50px]"
          }`}
        >
          <CertificationItem
            image={TensorF}
            name="Tensorflow Developer Certificate"
            organisation="Tensorflow"
            verify={
              "https://www.credential.net/2e5da35d-1a08-44e5-809d-086d97218419"
            }
          /><CertificationItem
          image={GcpA}
          name="Associate Cloud Engineer"
          organisation="Google Cloud"
          verify={
            "https://www.credential.net/a8d15dd8-05f4-4500-8b95-4eccc7c7534a"
          }
        />
          <CertificationItem
            image={GcpCd}
            name="Cloud Digital Leader"
            organisation="Google Cloud"
            verify={
              "https://www.credential.net/dce9bd94-dbd3-4dbc-bd69-f7044c66e328"
            }
          />
          <CertificationItem
            image={AwsCa}
            name="AWS Academy Cloud Architecting"
            organisation="Amazon Web Services"
            verify={
              "https://www.credly.com/badges/377f3a53-f0ba-46a5-9c56-48e9b18280bf?source=linked_in_profile"
            }
          />
          <CertificationItem
            image={AwsCf}
            name="AWS Academy Cloud Foundations"
            organisation="Amazon Web Services"
            verify={
              "https://www.credly.com/badges/e8e11e02-e6cd-4136-bed8-503704f02cb2?source=linked_in_profile"
            }
          />
          <CertificationItem
            image={MsAZ}
            name="Azure Fundamentals"
            organisation="Microsoft Azure"
            verify={
              "https://www.credly.com/badges/60e5e28c-ebce-49da-9894-e27f9df6ccc9?source=linked_in_profile"
            }
          />
          <CertificationItem
            image={MsPP}
            name="Power Platform Fundamentals"
            organisation="Microsoft Azure"
            verify={
              "https://www.credly.com/badges/86fbe40d-5e58-4310-8b4d-b091cba2c33a?source=linked_in_profile"
            }
          />
          <CertificationItem
            image={Dlsp}
            name="Deep Learning Specialization"
            organisation="Coursera"
            verify={
              "https://coursera.org/share/41a81381ae70721aad0682b3b77524d5"
            }
          />
        </div>
      </div>
    </div>
  );
};

// <CertificationItem
// image={Sfpc}
// name="Scrum Foundation Professional Certificate"
// organisation="Scrum"
// verify={"https://www.credly.com/badges/16a43032-7865-4390-8e48-fb7f132520c6?source=linked_in_profile"}
// />
