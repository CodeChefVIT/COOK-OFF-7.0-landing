import React, { useState } from "react";
import Cards from "./../Cards/Cards";

const Timeline = () => {
  const arr = [
    {
      time: "10:04 AM - 12:00 PM",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quibusdam, quod, voluptas, voluptates quas voluptatibus",
    },
    {
      time: "12:00 AM - 01:00 PM",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quibusdam, quod, voluptas, voluptates quas voluptatibus",
    },
    {
      time: "01:00 AM - 11:00 PM",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quibusdam, quod, voluptas, voluptates quas voluptatibus",
    },
    {
      time: "15:00 AM - 14:00 PM",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quibusdam, quod, voluptas, voluptates quas voluptatibus",
    },
    {
      time: "20:00 AM - 18:00 PM",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quibusdam, quod, voluptas, voluptates quas voluptatibus",
    },
  ];

  const [data, setData] = useState(arr[0]);
  const [css, setCss] = useState(
    "btn py-3 px-5 bg-[#E486A1] border-4 border-black mb-4"
  );

  const handleChange = (e) => {
    setData(arr[e]);
  };

  return (
    <div className="p-5 md:p-20 lg:p-20 flex flex-col items-center">
      <h1 className="font-mudclaw text-center text-6xl pb-10">TimeLine</h1>

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
