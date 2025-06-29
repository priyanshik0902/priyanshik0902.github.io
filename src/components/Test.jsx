import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, TorusKnot } from "@react-three/drei";
import p1 from "../images/project1.png";
import p2 from "../images/project2.png";
import p3 from "../images/project.jpg";
import p4 from "../images/project4.png";

const Test = () => {
  return (
      <div id="test">
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <Canvas style={{ width: "100%", height: "100vh" }}>
          <OrbitControls autoRotate enableZoom={false} />
          <ambientLight intensity={0.5} />
          <pointLight intensity={1} position={[10, 10, 10]} />
          <TorusKnot>
            <meshNormalMaterial />
          </TorusKnot>
          <Text position={[0, 0, 1.5]} fontSize={0.7} color="white">
            Projects
          </Text>
        </Canvas>
      </div>

      <div className="col-span-1 mt-48">
        <h1
          className="text-6xl font-bold text-transparent text-center p-4"
          style={{ WebkitTextStroke: "1px", WebkitTextStrokeColor: "white" }}
        >
          Websites
        </h1>

        <div className="col-span-1 flex flex-col justify-between gap-16 p-4">
          {/* Top Row */}
          <div className="flex justify-between gap-16">
            {/* Project 1 */}
            <div className="relative w-1/2 rounded-lg shadow-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300 overflow-hidden group">
              <img src={p1} alt="Project 1" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-center px-4">
                 Tracked meal-wise calorie intake by building a full-stack dashboard with ReactJS, CSS, Spring Boot, and real-time
 food data integration.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative w-1/2 rounded-lg shadow-lg border-4 border-pink-500 hover:scale-105 transition-transform duration-300 overflow-hidden group">
              <img src={p2} alt="Project 2" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-center px-4">
Accomplished Crop,nutrient and fertilizer prediciton by using real-time climate and soil data integrated via OpenWeather and Mapbox
 APIs.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between gap-16">
            {/* Project 3 */}
            <div className="relative w-1/2 rounded-lg shadow-lg border-4 border-purple-700 hover:scale-105 transition-transform duration-300 overflow-hidden group">
              <img src={p3} alt="Project 3" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-center px-4">
                  Helped to develop a real-time surveillance solution that detects weapons, matches faces against a criminal database,
 and flags suspicious behavior using a single webcam using machine learning.
                </p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="relative w-1/2 rounded-lg shadow-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300 overflow-hidden group">
              <img src={p4} alt="Project 4" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-center px-4">
                Enabled real-time emergency response by live geofencing alerts using AWS Location Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Test;
