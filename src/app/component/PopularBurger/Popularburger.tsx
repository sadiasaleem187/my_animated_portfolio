"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCards from "./BurgerCards";
import Image from "next/image";
import Burger1 from '../image/b1.png'
import Burger2 from '../image/b2.png'
import Burger3 from '../image/b3.png'
import Burger4 from '../image/b4.png'
import Burger5 from '../image/b5.png'
import Burger6 from '../image/b6.png'
import Burger7 from '../image/b7.png'
import Burger8 from '../image/b8.png'
import Burger9 from '../image/b9.png'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Popularburger = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h1 className="heading">
        Our Popular <span className="text-red-600">Burger</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
>
   <BurgerCards title='Beefy Bite' image={Burger1.src} reviews='6' price='10.88$' />
   <BurgerCards title='Beefy Bite' image={Burger2.src} reviews='6' price='10.88$' />
   <BurgerCards title='Beefy Bite' image={Burger3.src} reviews='6' price='10.88$' />
   <BurgerCards title='Beefy Bite' image={Burger4.src} reviews='6' price='10.88$' />
   <BurgerCards title='Beefy Bite' image={Burger5.src} reviews='6' price='10.88$' />
   <BurgerCards title='Beefy Bite' image={Burger6.src} reviews='6' price='10.88$' />
   <BurgerCards title='Beefy Bite' image={Burger7.src} reviews='6' price='10.88$' />
   <BurgerCards title='Beefy Bite' image={Burger8.src} reviews='6' price='10.88$' />
   <BurgerCards title='Beefy Bite' image={Burger9.src} reviews='6' price='10.88$' />
</Carousel>
      </div>
    </div>
  );
};

export default Popularburger;
