import React from "react";
import Marquee from "react-fast-marquee";

import b1 from "./../../Images/b1.svg";
import b2 from "./../../Images/b2.svg";
import b3 from "./../../Images/b3.svg";
import b4 from "./../../Images/b4.svg";

const Banner = () => {
  return (
    <div className="md:py-16 lg:py-32">
      <div className="flex flex-row border-4 border-black  justify-between items-center rotate-[10deg] w-[300vw] -translate-x-[40rem] md:-translate-x-[100rem] lg:-translate-x-[100rem] bg-white">
        <Marquee gradient={false} speed={100}>
          <h1 className="font-mudclaw text-4xl px-20">Don't Miss out</h1>
          <img src={b1} alt="" className="w-20" />
          <h1 className="font-mudclaw text-4xl px-20">CodeChef</h1>
          <img src={b2} alt="" className="w-20" />
          <h1 className="font-mudclaw text-4xl px-20">Register Now</h1>

          <h1 className="font-mudclaw text-4xl pl-96">Don't Miss out</h1>
          <img src={b1} alt="" className="w-20" />
          <h1 className="font-mudclaw text-4xl px-20">CodeChef</h1>
          <img src={b2} alt="" className="w-20" />
          <h1 className="font-mudclaw text-4xl px-20">Register Now</h1>
        </Marquee>
      </div>

      <div className="flex flex-row border-4	 border-black  justify-between items-center -rotate-[10deg] w-[300vw] -translate-x-[30rem] md:-translate-x-[70rem] lg:-translate-x-[150rem] bg-white">
        <Marquee gradient={false} speed={100}>
          <h1 className="font-mudclaw text-4xl px-20">COOK OFF 7.0</h1>
          <img src={b3} alt="" className="w-20" />
          <h1 className="font-mudclaw text-4xl px-20">CodeChef</h1>
          <img src={b4} alt="" className="w-20" />
          <h1 className="font-mudclaw text-4xl px-20">Secret Message</h1>

          <h1 className="font-mudclaw text-4xl pl-96">COOK OFF 7.0</h1>
          <img src={b3} alt="" className="w-20" />
          <h1 className="font-mudclaw text-4xl px-20">CodeChef</h1>
          <img src={b4} alt="" className="w-20" />
          <h1 className="font-mudclaw text-4xl px-20">Secret Message</h1>
        </Marquee>
      </div>
    </div>
  );
};

export default Banner;
