import React, { useState } from "react";
import Cards from "./../Cards/Cards";

const Timeline = () => {
  const arr = [
    {
      time: "10:00 AM - 12:00 PM",
      info: "The first round of Cook Off will be conducted on the CodeChef portal. It consists of 7 questions that are to be solved in 2 hours. ",
    },
    {
      time: "01:00 PM - 03:30 PM",
      info: "Round 2 consists of 7 questions that are to be solved in 2 hours. This round will be conducted on the CodeChef portal.",
    },
    {
      time: "04:30 AM - 05:30 PM",
      info: "The third round will have 3 questions that are to be solved in 1 hour. This round will take place on a portal specially developed by CodeChef-VIT.",
    },
    {
      time: "05:30 PM - 06:00 PM",
      info: "Closing ceremony. It will include Prize and certificate distribution. Look forward to the surprises we have planned for you!",
    },
  ];

  const [data, setData] = useState(arr[0]);
  const [css, setCss] = useState(
    "btn py-3 px-5 bg-[#E486A1] border-4 border-black mb-4 focus:bg-[#DEB1BE]"
  );

  const handleChange = (e) => {
    setData(arr[e]);
  };

  return (
    <div className="p-5 md:p-20 lg:p-20 flex flex-col items-center">
      <h1 className="font-mudclaw text-center text-6xl pt-10 pb-10 lg:pb-20 lg:pt-0">
        TimeLine
      </h1>

      <div className=" w-[100vw] px-20">
        <div className="flex flex-col  md:flex-row lg:flex-row justify-between items-center">
          <button className={css} onClick={() => handleChange(0)}>
            Round 1
          </button>
          <button className={css} onClick={() => handleChange(1)}>
            Round 2
          </button>
          <button className={css} onClick={() => handleChange(2)}>
            Round 3
          </button>
          <button className={css} onClick={() => handleChange(3)}>
            Formalities
          </button>
        </div>
        <Cards data={data} />
      </div>
    </div>
  );
};

export default Timeline;
