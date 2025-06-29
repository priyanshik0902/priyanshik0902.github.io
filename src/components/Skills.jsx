import React from 'react';
import { FaDocker,FaAws,FaJenkins,FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaDatabase,FaGithub,FaJava,FaCode } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { SiMysql, SiMongodb } from 'react-icons/si';
import MouseTrail from './MouseTrail';

const Skills = () => {
  return (
    <div className='relative h-screen w-screen justify-center overflow-hidden'>
      <MouseTrail />
      
     
      <div className='flex flex-col gap-20 text-center items-center z-10 '>
        <div className='flex flex-col items-center gap-4 ' >
        <p className="text-gray-400 text-[20px]">

          </p>
          <h1 className="font-semibold text-white text-[50px] ">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-[20px]">
            Currently the IT World Requires
          </p>
        </div>
      
        <div className='flex justify-center gap-10'>
          <div className='flex flex-col items-center gap-2'>
            <FaReact size={48} color='#61DAFB' />
            <p className='text-white'>React</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <FaHtml5 size={48} color='#E34F26' />
            <p className='text-white'>HTML5</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <FaCss3Alt size={48} color='#1572B6' />
            <p className='text-white'>CSS3</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <FaJsSquare size={48} color='#F0DB4F' />
            <p className='text-white'>JavaScript</p>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <BiCodeAlt size={48} color='#2C2255' />
            <p className='text-white'>Eclipse</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <FaJava size={48} color='#F0DB4F' />
            <p className='text-white'>Java</p>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <FaGithub size={48} color='#F0DB4F' />
            <p className='text-white'>Github</p>
          </div>
        </div>
        <div className='flex justify-center gap-10'>
          <div className='flex flex-col items-center gap-2'>
            <FaAws size={48} color='#FF9900' />
            <p className='text-white'>AWS</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <FaDocker size={48} color='#2496ED' />
            <p className='text-white'>Docker</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <FaJenkins size={48} color='#D24939' />
            <p className='text-white'>Jenkins</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <SiMysql size={48} color='#00758F' />
            <p className='text-white'>MySQL</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <SiMongodb size={48} color='#4DB33D' />
            <p className='text-white'>MongoDB</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <FaCode size={48} color='#007ACC' />
            <p className='text-white'>Visual Studio Code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
