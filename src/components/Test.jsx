import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, TorusKnot } from "@react-three/drei";

const Test = () => {
  return (
    <div className="grid grid-cols-2 gap-4 ">
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
      <h1 className="text-6xl font-bold cursor-pointer text-transparent text-center p-4 cursor-p "  style={{ WebkitTextStroke: "1px", WebkitTextStrokeColor: "white" }}>Websites</h1>
      <div className="col-span-1 flex flex-col justify-between gap-16 p-4">
        <div className="flex justify-between gap-16">
          <div className="w-1/2  rounded-lg shadow-lg border-4 border-blue-500 border-l-current hover:scale-125">
            <img src="./images/project1.png" alt="Upper Left" className="w-full h-full object-cover rounded-lg " />
            
          </div>
          <div className="w-1/2  rounded-lg shadow-lg border-4 border-pink-500 border-l-current hover:scale-125">
            <img src="./images/project1.png"alt="Upper Right" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
        <div className="flex justify-between gap-16 ">
          <div className="w-1/2  rounded-lg shadow-lg border-4 border-purple-700 border-l-current hover:scale-125">
            <img src="./images/project1.png" alt="Lower Left" className="w-full h-full object-cover rounded-lg" />
          </div>

          <div className="w-1/2  rounded-lg shadow-lg border-4 border-blue-500 border-l-current hover:scale-125">
            <img src="./images/project1.png" alt="Lower Right" className="w-full h-full object-cover rounded-lg " />
            
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Test;
