import React from "react";

const ExperienceItem = ({ title, role, date, responsibilities }) => {


  return (
    <div className="bg-white border p-4 border-gray-200 rounded-lg shadow-xl">
      <p
        className="text-[28px] mb-2"
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
        {title}
      </p>
      <p
        className="text-gray-500 text-[18px]"
        style={{
          fontFamily: "'Rubik', sans-serif",
          lineHeight: "1em",
          letterSpacing: -0.5,
          whiteSpace: "normal",
        }}
      >
        {role}
      </p>
      <p
        className="text-gray-500 text-[18px]"
        style={{
          fontFamily: "'Rubik', sans-serif",
          fontWeight: "10",
          lineHeight: "1.8em",
          letterSpacing: -0.5,
          whiteSpace: "normal",
        }}
      >
        {date}
      </p>
      <ul
        className="list-disc pl-6 mt-2 text-[18px]"
        style={{
          fontFamily: "'Rubik', sans-serif",
          fontWeight: "10",
          lineHeight: "1.8em",
          letterSpacing: -0.5,
          whiteSpace: "normal",
        }}
      >
        {responsibilities.map((responsibility, index) => (
          <li
            key={index}
            className="text-gray-700 text-[18px]"
            style={{
              fontFamily: "'Rubik', sans-serif",
              fontWeight: "10",
              lineHeight: "1.8em",
              letterSpacing: -0.5,
              whiteSpace: "normal",
            }}
          >
            {responsibility.text}
            {responsibility.points && (
              <ul
                className="list-disc pl-8 text-[18px]"
                style={{
                  fontFamily: "'Rubik', sans-serif",
                  fontWeight: "10",
                  lineHeight: "1.8em",
                  letterSpacing: -0.5,
                  whiteSpace: "normal",
                }}
              >
                {responsibility.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Experience = () => {
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
        className={`text-justify p-8 mt-[-15px] h-full flex gap-8 flex-col overflow-auto ${
          window.innerWidth > 1000 ? " grid grid-cols-2" : ""
        }`}
        style={{ maxHeight: "100%" }}
      >
        <ExperienceItem
          title="Reealtech (Uprising Tradex LLP)"
          role="Founder & Lead SDE"
          date="Aug 2022 - Present"
          responsibilities={[
            {
              text: "Spearheaded the development of India's first free WebVR player.",
            },
            {
              text: "Lead development of a virtual tour editor for hotels & real estate:",
              points: [
                "Utilized cloud technologies (GCP, Azure) & infrastructure automation (Terraform).",
                "Build 360 video conferencing using mediasoup and webrtc.",
              ],
            },
            {
              text: "Building a dedicated VR marketplace for hospitality and real estate.",
            },
            {
              text: "Collaborate with cross-functional teams: Seamlessly integrate ML models into production for enhanced project efficiency (Freelance).",
            },
          ]}
        />
        <ExperienceItem
          title="Ethereal Engine (XROS Fellow)"
          role="Extended Reality (XR) Developer"
          date="March 2023 - August 2023"
          responsibilities={[
            {
              text: "Migrated platform from AWS SDK V2 to V3, demonstrating proficiency in AWS services.",
            },
            {
              text: "Developed Chat Web App (UI) for existing immersive worlds, improving collaboration.",
            },
            {
              text: "Implemented Cron-job setup in Kubernetes for file cleanup (resource optimization).",
            },
            {
              text: "Contributed to bug fixes, ensuring platform stability and reliability.",
            },
          ]}
        />
        <ExperienceItem
          title="Supra Oncology & I3 Digital Health Pvt. Ltd."
          role="Machine Learning Engineer/Intern"
          date="March 2022 - July 2022"
          responsibilities={[
            {
              text: "Specialized in text extraction models & deployment to Heroku/cloud environments.",
            },
            {
              text: "Developed & trained OCR models for text extraction from images/PDFs (enhanced data extraction).",
            },
            {
              text: "Created Python web scraping scripts for data collection from medical/oncology websites.",
            }
          ]}
        />
        <ExperienceItem
        title="IAMOPS India Pvt. Ltd."
        role="Site Reliability Engineer (SRE) Intern"
        date="Feb 2022 - May 2022"
        responsibilities={[
          {
            text: "Managed cloud infrastructure creation using Console & Terraform in Azure.",
          },
          {
            text: "Implemented CI/CD pipelines (GitHub/GitLab) for automated deployments and consistency.",
          },
          {
            text: "Automated AWS Cloud tasks with Python boto3 for improved operational efficiency.",
          }
        ]}
      />
      </div>
      </div>
    </div>
  );
};
