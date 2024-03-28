import * as THREE from "three";
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Image,
  Environment,
  ScrollControls,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { easing } from "maath";
import "./Util";
import Work from "../assets/code_.png";
import img1 from "../assets/22_.jpg";
import img2 from "../assets/14_.jpg";
import img3 from "../assets/13_.jpg";
import img4 from "../assets/15_.jpg";
import img5 from "../assets/19_.jpg";
import img6 from "../assets/20_.jpg";
import img7 from "../assets/18_.jpg";
import img8 from "../assets/21_.jpg";
import { FaTimes } from "react-icons/fa";
import { About } from "./About";
import { Experience } from "./Experience";
import { Skill } from "./Skill";
import { Project } from "./Project";
import { Testimonial } from "./Testimonial";
import { Certification } from "./Certification";
import { Contact } from "./Contact";
import { Resume } from "./Resume";

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2); // Rotate contents
    state.events.update(); // Raycasts every frame rather than on pointer-move
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
      0.3,
      delta
    ); // Move camera
    state.camera.lookAt(0, 0, 0); // Look at center
  });
  return <group ref={ref} {...props} />;
}

function Carousel({
  radius = 1.4,
  count = 8,
  openModalAbout,
  openModalExperience,
  openModalSkill,
  openModalProject,
  openModalTestimonial,
  openModalCertification,
  openModalContact,
  openModalResume,
}) {
  const images = [img1, img8, img4, img6, img3, img5, img7, img2];
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      index={i}
      openModalAbout={openModalAbout}
      openModalExperience={openModalExperience}
      openModalSkill={openModalSkill}
      openModalProject={openModalProject}
      openModalTestimonial={openModalTestimonial}
      openModalCertification={openModalCertification}
      openModalContact={openModalContact}
      openModalResume={openModalResume}
      url={images[i % images.length]}
      position={[
        Math.sin((i / count) * Math.PI * 2) * radius,
        0,
        Math.cos((i / count) * Math.PI * 2) * radius,
      ]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ));
}

function Card({
  url,
  index,
  openModalAbout,
  openModalExperience,
  openModalSkill,
  openModalProject,
  openModalTestimonial,
  openModalCertification,
  openModalContact,
  openModalResume,
  ...props
}) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation(); // Stop event from bubbling up
    if (index === 0) {
      openModalAbout(); // Open About modal if index is 0
    } else if (index === 1) {
      openModalExperience(); // Open Experience modal if index is 1
    } else if (index === 2) {
      openModalSkill(); // Open Skill modal if index is 2
    } else if (index === 3) {
      openModalProject(); // Open Project modal if index is 3
    } else if (index === 4) {
      openModalTestimonial(); // Open Testimonial modal if index is 4
    } else if (index === 5) {
      openModalCertification(); // Open Certification modal if index is 5
    } else if (index === 6) {
      openModalContact(); // Open Contact modal if index is 6
    } else if (index === 7) {
      openModalResume(); // Open Resume modal if index is 7
    }
  };

  const pointerOver = () => {
    setHovered(true);
  };

  const pointerOut = () => {
    setHovered(false);
  };

  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
    easing.damp(
      ref.current.material,
      "radius",
      hovered ? 0.25 : 0.1,
      0.2,
      delta
    );
    easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.25, 0.2, delta);
  });

  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      onClick={handleClick}
      {...props}
    >
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
}

function Banner(props) {
  const ref = useRef();
  const texture = useTexture(Work);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.material.time.value += Math.abs(scroll.delta) * 4;
    ref.current.material.map.offset.x += delta / 2;
  });
  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
      <meshSineMaterial
        map={texture}
        map-anisotropy={16}
        map-repeat={[30, 1]}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
}

const FOV_THRESHOLD_1 = 900;
const FOV_THRESHOLD_2 = 850;
const FOV_THRESHOLD_3 = 800;
const FOV_THRESHOLD_4 = 750;
const FOV_THRESHOLD_5 = 700;
const FOV_THRESHOLD_6 = 650;
const FOV_THRESHOLD_7 = 600;
const FOV_THRESHOLD_8 = 550;
const FOV_THRESHOLD_9 = 500;

const Scene = ({
  openModalAbout,
  openModalExperience,
  openModalSkill,
  openModalProject,
  openModalTestimonial,
  openModalCertification,
  openModalContact,
  openModalResume,
}) => {
  const { camera } = useThree();
  const fov = useRef(15);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > FOV_THRESHOLD_1) {
        fov.current = 15;
      } else if (window.innerWidth > FOV_THRESHOLD_2) {
        fov.current = 15;
      } else if (window.innerWidth > FOV_THRESHOLD_3) {
        fov.current = 16;
      } else if (window.innerWidth > FOV_THRESHOLD_4) {
        fov.current = 17;
      } else if (window.innerWidth > FOV_THRESHOLD_5) {
        fov.current = 18;
      } else if (window.innerWidth > FOV_THRESHOLD_6) {
        fov.current = 20;
      } else if (window.innerWidth > FOV_THRESHOLD_7) {
        fov.current = 21;
      } else if (window.innerWidth > FOV_THRESHOLD_8) {
        fov.current = 22.5;
      } else if (window.innerWidth > FOV_THRESHOLD_9) {
        fov.current = 24.5;
      } else {
        fov.current = 30;
      }
      camera.fov = fov.current;
      camera.updateProjectionMatrix();
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [camera]);

  return (
    <>
      <fog attach="fog" args={["#a79", 8.5, 12]} />
      <ScrollControls damping={0.4} infinite={true}>
        <Rig rotation={[0, 0, 0.15]}>
          <Carousel
            openModalAbout={openModalAbout}
            openModalExperience={openModalExperience}
            openModalSkill={openModalSkill}
            openModalProject={openModalProject}
            openModalTestimonial={openModalTestimonial}
            openModalCertification={openModalCertification}
            openModalContact={openModalContact}
            openModalResume={openModalResume}
          />
        </Rig>
        <Banner position={[0, -0.15, 0]} />
      </ScrollControls>
      <Environment preset="dawn" background blur={0.4} />
    </>
  );
};

export const Hero = () => {
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenExperience, setIsOpenExperience] = useState(false);
  const [isOpenSkill, setIsOpenSkill] = useState(false);
  const [isOpenProject, setIsOpenProject] = useState(false);
  const [isOpenTestimonial, setIsOpenTestimonial] = useState(false);
  const [isOpenCertification, setIsOpenCertification] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [isOpenResume, setIsOpenResume] = useState(false);

  const openModalAbout = () => {
    setIsOpenAbout(true);
  };

  const closeModalAbout = () => {
    setIsOpenAbout(false);
  };

  const openModalExperience = () => {
    setIsOpenExperience(true);
  };

  const closeModalExperience = () => {
    setIsOpenExperience(false);
  };

  const openModalSkill = () => {
    setIsOpenSkill(true);
  };

  const closeModalSkill = () => {
    setIsOpenSkill(false);
  };

  const openModalProject = () => {
    setIsOpenProject(true);
  };

  const closeModalProject = () => {
    setIsOpenProject(false);
  };

  const openModalTestimonial = () => {
    setIsOpenTestimonial(true);
  };

  const closeModalTestimonial = () => {
    setIsOpenTestimonial(false);
  };

  const openModalCertification = () => {
    setIsOpenCertification(true);
  };

  const closeModalCertification = () => {
    setIsOpenCertification(false);
  };

  const openModalContact = () => {
    setIsOpenContact(true);
  };

  const closeModalContact = () => {
    setIsOpenContact(false);
  };

  const openModalResume = () => {
    setIsOpenResume(true);
  };

  const closeModalResume = () => {
    setIsOpenResume(false);
  };

  return (
    <div id="canvas-container" className="w-full h-screen text-center">
      <div className="w-full h-full bg-[#EAEDF6]">
        <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
          <Scene
            openModalAbout={openModalAbout}
            openModalExperience={openModalExperience}
            openModalSkill={openModalSkill}
            openModalProject={openModalProject}
            openModalTestimonial={openModalTestimonial}
            openModalCertification={openModalCertification}
            openModalContact={openModalContact}
            openModalResume={openModalResume}
          />
        </Canvas>
        {isOpenAbout && (
          <div
            className={`fixed ${
              window.innerWidth > 900 ? "p-[30px]" : "p-5"
            } inset-0 z-50 flex items-center  bg-[#EAEDF6] bg-opacity-50`}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModalAbout();
              }
            }}
          >
            <div
              className={`absolute  ${
                window.innerWidth > 900
                  ? "top-3 right-3 m-4"
                  : "top-2 right-2 m-2"
              }`}
            >
              <button onClick={closeModalAbout}>
                <FaTimes size={30} />
              </button>
            </div>
            <About />
          </div>
        )}
        {isOpenExperience && (
          <div
            className={`fixed ${
              window.innerWidth > 900 ? "p-[30px]" : "p-5"
            } inset-0 z-50 flex items-center  bg-[#EAEDF6] bg-opacity-50`}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModalExperience();
              }
            }}
          >
            <div
              className={`absolute  ${
                window.innerWidth > 900
                  ? "top-3 right-3 m-4"
                  : "top-2 right-2 m-2"
              }`}
            >
              <button onClick={closeModalExperience}>
                <FaTimes size={30} />
              </button>
            </div>
            <Experience />
          </div>
        )}
        {isOpenSkill && (
          <div
            className={`fixed ${
              window.innerWidth > 900 ? "p-[30px]" : "p-5"
            } inset-0 z-50 flex items-center  bg-[#EAEDF6] bg-opacity-50`}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModalSkill();
              }
            }}
          >
            <div
              className={`absolute  ${
                window.innerWidth > 900
                  ? "top-3 right-3 m-4"
                  : "top-2 right-2 m-2"
              }`}
            >
              <button onClick={closeModalSkill}>
                <FaTimes size={30} />
              </button>
            </div>
            <Skill />
          </div>
        )}
        {isOpenProject && (
          <div
            className={`fixed ${
              window.innerWidth > 900 ? "p-[30px]" : "p-5"
            } inset-0 z-50 flex items-center  bg-[#EAEDF6] bg-opacity-50`}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModalProject();
              }
            }}
          >
            <div
              className={`absolute ${
                window.innerWidth > 900
                  ? "top-3 right-3 m-4"
                  : "top-2 right-2 m-2"
              }`}
            >
              <button onClick={closeModalProject}>
                <FaTimes size={30} />
              </button>
            </div>
            <Project />
          </div>
        )}
        {isOpenTestimonial && (
          <div
            className={`fixed ${
              window.innerWidth > 900 ? "p-[30px]" : "p-5"
            } inset-0 z-50 flex items-center  bg-[#EAEDF6] bg-opacity-50`}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModalTestimonial();
              }
            }}
          >
            <div
              className={`absolute  ${
                window.innerWidth > 900
                  ? "top-3 right-3 m-4"
                  : "top-2 right-2 m-2"
              }`}
            >
              <button onClick={closeModalTestimonial}>
                <FaTimes size={30} />
              </button>
            </div>
            <Testimonial />
          </div>
        )}
        {isOpenCertification && (
          <div
            className={`fixed ${
              window.innerWidth > 900 ? "p-[30px]" : "p-5"
            } inset-0 z-50 flex items-center  bg-[#EAEDF6] bg-opacity-50`}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModalCertification();
              }
            }}
          >
            <div
              className={`absolute  ${
                window.innerWidth > 900
                  ? "top-3 right-3 m-4"
                  : "top-2 right-2 m-2"
              }`}
            >
              <button onClick={closeModalCertification}>
                <FaTimes size={30} />
              </button>
            </div>
            <Certification />
          </div>
        )}
        {isOpenContact && (
          <div
            className={`fixed ${
              window.innerWidth > 900 ? "p-[30px]" : "p-5"
            } inset-0 z-50 flex items-center  bg-[#EAEDF6] bg-opacity-50`}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModalContact();
              }
            }}
          >
            <div
              className={`absolute  ${
                window.innerWidth > 900
                  ? "top-3 right-3 m-4"
                  : "top-2 right-2 m-2"
              }`}
            >
              <button onClick={closeModalContact}>
                <FaTimes size={30} />
              </button>
            </div>
            <Contact />
          </div>
        )}
        {isOpenResume && (
          <div
            className={`fixed ${
              window.innerWidth > 900 ? "p-[30px]" : "p-5"
            } inset-0 z-50 flex items-center  bg-[#EAEDF6] bg-opacity-50`}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModalResume();
              }
            }}
          >
            <div
              className={`absolute  ${
                window.innerWidth > 900
                  ? "top-3 right-3 m-4"
                  : "top-2 right-2 m-2"
              }`}
            >
              <button onClick={closeModalResume}>
                <FaTimes size={30} />
              </button>
            </div>
            <Resume />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
