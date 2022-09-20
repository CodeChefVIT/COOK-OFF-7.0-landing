import React from "react";
import Marquee from "react-fast-marquee";

import b1 from "./../../Images/b1.svg";
import b2 from "./../../Images/b2.svg";
import b3 from "./../../Images/b3.svg";
import b4 from "./../../Images/b4.svg";

const Banner = () => {
  return (
    <div className="py-36">
      <div className="flex flex-row border-4 border-black  justify-between items-center my-4 rotate-[10deg] w-[300vw] -translate-x-[40rem] md:-translate-x-[100rem] lg:-translate-x-[100rem] bg-white">
        <Marquee gradient={false} speed={200}>
          <h1 className="font-mudclaw text-4xl px-20">Don't Miss out</h1>
          <img src={b1} alt="" />
          <h1 className="font-mudclaw text-4xl px-20">CodeChef</h1>
          <img src={b2} alt="" />
          <h1 className="font-mudclaw text-4xl px-20">Register Now</h1>

          <h1 className="font-mudclaw text-4xl pl-96">Don't Miss out</h1>
          <img src={b1} alt="" />
          <h1 className="font-mudclaw text-4xl px-20">CodeChef</h1>
          <img src={b2} alt="" />
          <h1 className="font-mudclaw text-4xl px-20">Register Now</h1>
        </Marquee>
      </div>

      <div className="flex flex-row border-4	 border-black  justify-between items-center my-4 -rotate-[10deg] w-[300vw] -translate-x-[30rem] md:-translate-x-[70rem] lg:-translate-x-[150rem] bg-white">
        <Marquee gradient={false} speed={200}>
          <h1 className="font-mudclaw text-4xl px-20">COOK OFF 7.0</h1>
          <img src={b3} alt="" />
          <h1 className="font-mudclaw text-4xl px-20">CodeChef</h1>
          <img src={b4} alt="" />
          <h1 className="font-mudclaw text-4xl px-20">Secret Message</h1>

          <h1 className="font-mudclaw text-4xl pl-96">COOK OFF 7.0</h1>
          <img src={b3} alt="" />
          <h1 className="font-mudclaw text-4xl px-20">CodeChef</h1>
          <img src={b4} alt="" />
          <h1 className="font-mudclaw text-4xl px-20">Secret Message</h1>
        </Marquee>
      </div>
    </div>
  );
};

export default Banner;
