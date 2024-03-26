import React from "react";
import Python from "../assets/skills/python.svg";
import Js from "../assets/skills/js.svg";
import Ts from "../assets/skills/ts.svg";
import Csharp from "../assets/skills/csharp.svg";
import ReactIcon from "../assets/skills/react.svg";
import NextIcon from "../assets/skills/next-js.svg";
import MuiIcon from "../assets/skills/mui.svg";
import TailwindIcon from "../assets/skills/tailw.svg";
import MsoupIcon from "../assets/skills/mediasoup.png";
import Terra from "../assets/skills/terra.svg";
import Dock from "../assets/skills/docker.svg";
import Kube from "../assets/skills/kubernets.svg";
import Git from "../assets/skills/git.svg";
import GitHA from "../assets/skills/GitHubAc.svg";
import GitL from "../assets/skills/gitlab.svg";
import Kubeflow from "../assets/skills/kubeflow.svg";
import Aws from "../assets/skills/aws.svg";
import Azure from "../assets/skills/azure.svg";
import Gcp from "../assets/skills/gcp.svg";
import Bqml from "../assets/skills/BigQuery.svg";
import Automl from "../assets/skills/AutoML.svg";
import Vertex from "../assets/skills/VertexAI.svg";
import Lens from "../assets/skills/snap.png";
import Aframe from "../assets/skills/aframe.png";
import ThreeJs from "../assets/skills/Three.svg";
import R3F from "../assets/skills/r3f.png";
import Blender from "../assets/skills/Blender.svg";
import Unity from "../assets/skills/unity.svg";
import Spark from "../assets/skills/spark.png";
import TensorF from "../assets/skills/tensorflow.svg";
import PytorchF from "../assets/skills/pytorch.svg";
import OpenCVF from "../assets/skills/opencv.svg";
import KerasF from "../assets/skills/keras.svg";
import CvatF from "../assets/skills/cvat.svg";

export const Skill = () => {
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
           TECHNICAL SKILLS
          </p>
        </div>
        <div className={` mb-3 h-full w-full p-4  items-center justify-center ${
          window.innerWidth > 1200 ? "grid grid-cols-3 gap-[70px]" : "flex flex-wrap gap-[50px]"
        }`}>
          <div className="skill_prog relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
            <button className="programming_item right-[15px] top-5 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-[5px]">
                <img src={Python} alt="python" />
              </span>
            </button>
            <button className="profile_item left-[15px] top-5 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-[7px]">
                <img src={Js} alt="js" className="rounded-[20%]" />
              </span>
            </button>
            <button className="profile_item left-[15px] bottom-5 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-[7px]">
                <img src={Ts} alt="Ts" className="rounded-[20%]" />
              </span>
            </button>
            <button className="profile_item right-[15px] bottom-5 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-[5px]">
                <img src={Csharp} alt="Csharp" className="h-full w-full" />
              </span>
            </button>
            <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
              <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                Programming Languages
              </div>
            </button>
          </div>

          <div className="skill_webdev relative p-11 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
            <button className="profile_item right-[122px] -bottom-6 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img
                  src={CvatF}
                  alt="mediasoup"
                  className="h-full rounded-full"
                />
              </span>
            </button>
            <button className="profile_item -left-[16px] bottom-[80px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-[6px]">
                <img
                  src={KerasF}
                  alt="tailwind"
                  className="h-full rounded-full"
                />
              </span>
            </button>
            <button className="profile_item -right-[16px] bottom-[80px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-[6px]">
                <img src={OpenCVF} alt="mui" className="" />
              </span>
            </button>
            <button className="profile_item left-[22px] top-[15px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-[7px]">
                <img src={TensorF} alt="tensorflow" className="h-full w-full" />
              </span>
            </button>
            <button className="profile_item right-[22px] top-[15px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-2">
                <img src={PytorchF} alt="Next" className="h-full w-full" />
              </span>
            </button>
            <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
              <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                Machine Learning & Data Science
              </div>
            </button>
          </div>

          <div className="skill_webdev relative p-11 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
            <button className="profile_item right-[122px] -bottom-6 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white">
                <img src={Spark} alt="spark" className="bg-transparent" />
              </span>
            </button>
            <button className="profile_item left-[8px] bottom-[32px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-[6px]">
                <img src={Unity} alt="unity" className="h-full" />
              </span>
            </button>
            <button className="profile_item right-[8px] bottom-[32px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-[5px]">
                <img src={Lens} alt="lens" className="h-full" />
              </span>
            </button>
            <button className="profile_item left-[49px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-[2px]">
                <img src={ThreeJs} alt="threejs" className="ml-1 mt-[2px]" />
              </span>
            </button>
            <button className="profile_item -left-[20px] top-[90px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={Aframe} alt="aframe" className="mt-[2px]" />
              </span>
            </button>
            <button className="profile_item -right-[20px] top-[90px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1.5">
                <img src={Blender} alt="blender" className="" />
              </span>
            </button>
            <button className="profile_item right-[49px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={R3F} alt="r3f" className="rounded-full" />
              </span>
            </button>
            <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
              <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                AR/VR{" "}
              </div>
            </button>
          </div>

          <div className="skill_webdev relative p-11 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
            <button className="profile_item right-[122px] -bottom-6 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={Kubeflow} alt="kubeflow" className="" />
              </span>
            </button>
            <button className="profile_item left-[8px] bottom-[32px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-[4px]">
                <img src={Bqml} alt="bqml" className="h-full" />
              </span>
            </button>
            <button className="profile_item right-[8px] bottom-[32px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-[1px]">
                <img src={Automl} alt="automl" className="h-full" />
              </span>
            </button>
            <button className="profile_item left-[49px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={Aws} alt="aws" className="" />
              </span>
            </button>
            <button className="profile_item -left-[20px] top-[90px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-[7px]">
                <img src={Azure} alt="azure" className="mt-[-3px]" />
              </span>
            </button>
            <button className="profile_item -right-[20px] top-[90px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={Vertex} alt="vertexai" className="h-full mt-[2px]" />
              </span>
            </button>
            <button className="profile_item right-[49px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={Gcp} alt="gcp" className="" />
              </span>
            </button>
            <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
              <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                Cloud/MLOps{" "}
              </div>
            </button>
          </div>

          <div className="skill_webdev relative p-11 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
            <button className="profile_item right-[42px] top-[0px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={Terra} alt="terra" className="mt-[3px]" />
              </span>
            </button>
            <button className="profile_item left-[42px] top-[0px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={Dock} alt="docker" className="h-full w-full" />
              </span>
            </button>
            <button className="profile_item -left-[23px] top-[120px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={Kube} alt="kubernets" className="h-full w-full" />
              </span>
            </button>
            <button className="profile_item -right-[23px] top-[120px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={Git} alt="git" className="h-full w-full" />
              </span>
            </button>
            <button className="profile_item left-[42px] bottom-[0px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-2">
                <img src={GitHA} alt="githubaction" className="" />
              </span>
            </button>
            <button className="profile_item right-[42px] bottom-[0px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-[7px]">
                <img src={GitL} alt="gitlab" className="mt-[3px]" />
              </span>
            </button>
            <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
              <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                DevOps{" "}
              </div>
            </button>
          </div>

          <div className="skill_webdev relative p-11 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
            <button className="profile_item right-[122px] -bottom-6 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={MsoupIcon} alt="mediasoup" className="h-full" />
              </span>
            </button>
            <button className="profile_item -left-[16px] bottom-[80px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={TailwindIcon} alt="tailwind" className="h-full" />
              </span>
            </button>
            <button className="profile_item -right-[16px] bottom-[80px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-[7px]">
                <img src={MuiIcon} alt="mui" className="mt-[6px]" />
              </span>
            </button>
            <button className="profile_item left-[22px] top-[15px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={ReactIcon} alt="React" className="h-full w-full" />
              </span>
            </button>
            <button className="profile_item right-[22px] top-[15px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50  active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={NextIcon} alt="Next" className="h-full w-full" />
              </span>
            </button>
            <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
              <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                Web Development
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
