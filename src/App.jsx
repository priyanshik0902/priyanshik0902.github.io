
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Hero from './components/Hero';
// import Test from './components/Test';
// import SkillsPage from './components/SkillsPage';


function App() {
  return (
    <Router>
      <div className="relative h-screen overflow-y-scroll bg-black">
        <Routes>
          <Route path="/" element={<Hero />} />
{/*           <Route path="/skills" element={<SkillsPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

// function Home() {
//   return (
//     <div>
//       <Hero />
//       <Test id="test" />
//     </div>
//   );
// }

export default App;


// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Stage } from '@react-three/drei';
// import Scene from "../public/images/Scene";
//
// const App = () => {
//   return (
//     <Canvas>
//       <Stage environment="city" intensity={0.6}>
//         <Scene/>
//       </Stage>
//       <OrbitControls enableZoom={false} />
//     </Canvas>
//   );
// };
//  export default App;