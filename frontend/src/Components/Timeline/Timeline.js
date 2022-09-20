import React from "react";

import Line from "./../../Images/Timeline.svg";
import One from "./../../Images/1.svg";
import Two from "./../../Images/2.svg";
import Three from "./../../Images/3.svg";
import Four from "./../../Images/4.svg";

const Timeline = () => {
  return (
    <div className="p-5 md:p-20 lg:p-20">
      <h1 className="font-mudclaw text-center text-6xl pb-10">TimeLine</h1>

      <div>
        <img src={Line} alt="" className="py-20" />
      </div>
    </div>
  );
};

export default Timeline;
