import React from "react";

import Clock from "./../../Images/ClockCircleFilled.svg";
import Info from "./../../Images/InfoCircleFilled.svg";

const Cards = (props) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-20">
        <div className="bg-[#F4CED3] border-4 border-black rounded-xl md:max-w-xs lg:min-w-max mb-4">
          <div className="flex flex-row justify-between items-center py-3 px-5">
            <p>TIME</p>
            <img src={Clock} alt="clock" className="w-6 rounded-full" />
          </div>
          <hr className="border-black border-2 bg-black" />
          <h1 className="md:text-2xl lg:text-4xl py-9 px-5 ">
            {props.data.time}
          </h1>
        </div>
        <div className="bg-[#F4CED3] border-4 border-black rounded-xl md:max-w-xs lg:max-w-lg">
          <div className="flex flex-row justify-between items-center py-3 px-5">
            <p>INFORMATION</p>
            <img src={Info} alt="clock" className="w-6 rounded-full" />
          </div>
          <hr className="border-black border-2 bg-black" />
          <p className="text-xl lg:text-xl md:text-sm py-9 px-5">
            {props.data.info}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
