"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation'
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 bg-slate-950 ">
        <div className="col-span-7 place-self-center text-center sm:text-left mx-auto px-12 py-4">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Hello, I am {" "} </span>
            <br></br>
            <TypeAnimation
      sequence={[
       " Sadia",
        1000,
        'Web Developer',
        1000,
        'Frontend Developer',
        1000,
        'UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            deserunt modi dolorem adipisci nam! Nemo amet atque aliquam in illo
            hic distinctio, ea similique voluptas ex laborum aut aliquid velit.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Here me
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/img1.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
