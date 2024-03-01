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

function Carousel({ radius = 1.4, count = 8 }) {
  const images = [ img1,img8,img4, img6,img3,img5, img7 ,img2];
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
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

function Card({ url, ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const pointerOver = (e) => {
    e.stopPropagation();
    hover(true);
  };
  const pointerOut = () => hover(false);
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

const FOV_THRESHOLD_1 = 750;
const FOV_THRESHOLD_2 = 650;
const FOV_THRESHOLD_10 = 600;
const FOV_THRESHOLD_9 = 510;
const FOV_THRESHOLD_8 = 470;
const FOV_THRESHOLD_7 = 430;
const FOV_THRESHOLD_6 = 375;
const FOV_THRESHOLD_5 = 350;
const FOV_THRESHOLD_3 = 320;
const FOV_THRESHOLD_4 = 305;

const Scene = () => {
  const { camera } = useThree();
  const fov = useRef(15);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > FOV_THRESHOLD_1) {
        fov.current = 15;
    } else if (window.innerWidth > FOV_THRESHOLD_2) {
        fov.current = 17;
      } else if (window.innerWidth > FOV_THRESHOLD_10) {
        fov.current = 19;
    } else if (window.innerWidth > FOV_THRESHOLD_9) {
        fov.current = 21;
    } else if (window.innerWidth > FOV_THRESHOLD_8) {
        fov.current = 23;
    } else if (window.innerWidth > FOV_THRESHOLD_7) {
        fov.current = 25;
    } else if (window.innerWidth > FOV_THRESHOLD_6) {
        fov.current = 28;
    } else if (window.innerWidth > FOV_THRESHOLD_5) {
        fov.current = 35;
    } else if (window.innerWidth > FOV_THRESHOLD_3) {
        fov.current = 36;
    } else if (window.innerWidth > FOV_THRESHOLD_4) {
        fov.current = 37;
      } else {
        fov.current = 42;
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
      <ScrollControls pages={4} infinite no-scrollbar>
        <Rig rotation={[0, 0, 0.15]}>
          <Carousel />
        </Rig>
        <Banner position={[0, -0.15, 0]} />
      </ScrollControls>
      <Environment preset="dawn" background blur={0.4} />
    </>
  );
};

export const Hero = () => {
  return (
    <div id="canvas-container" className="w-full h-screen text-center">
      <div className="w-full h-full bg-[#EAEDF6]" >
        <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
          <Scene />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
