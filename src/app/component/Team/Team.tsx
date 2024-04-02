import React from "react";
import TeamCards from "./TeamCards";
import team1 from '../image/t1.jpg'
import team2 from '../image/t2.jpg'
import team3 from '../image/t3.jpg'
import Image from "next/image";

const Team = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <h1 className="heading">
        Meet Our Expert <span className="text-red-600">Chefs</span>
      </h1>
      <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        <div data-aos='fade-right' data-aos-anchor-placement='top-center'><TeamCards image={team1.src} name='Johan Doe' position='Kitchen Poter' /></div>
        <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='300'><TeamCards image={team2.src} name='kohan Doe' position='Executive Chef'/></div>
        <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='600'><TeamCards image={team3.src} name='Hohan Doe' position='Head Chef'/></div>
      </div>
    </div>
  );
};

export default Team;
