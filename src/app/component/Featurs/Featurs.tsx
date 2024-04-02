import React from "react";
import Img1 from "../image/f1.jpg";
import Img2 from "../image/f2.jpg";
import Img3 from "../image/f3.jpg";
import Image from "next/image";
const Featurs = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* heading */}
      <h1 className="heading">
        Burgers made with <br /> love And
        <span className="text-red-600">Care</span>
      </h1>
      {/* Cards */}
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        {/* 1st card */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-slate-200 rounded-lg transition-all duration-200">
            <Image src={Img1} alt="img" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Our Burger
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              nulla commodi accusantium sunt atque consequuntur odio sit
              eligendi magni, nesciunt deleniti iste quibusdam velit?
            </p>
          </div>
        </div>
        {/* 2nd cards */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-slate-200 lg:translate-y-[3rem] rounded-lg transition-all duration-200">
            <Image src={Img2} alt="img" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Your Opinion is Important
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              nulla commodi accusantium sunt atque consequuntur odio sit
              eligendi magni, nesciunt deleniti iste quibusdam velit?
            </p>
          </div>
        </div>
        {/* 3rd card */}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-slate-200 rounded-lg transition-all duration-200">
            <Image src={Img3} alt="img" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Chicken Burger
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              nulla commodi accusantium sunt atque consequuntur odio sit
              eligendi magni, nesciunt deleniti iste quibusdam velit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featurs;
