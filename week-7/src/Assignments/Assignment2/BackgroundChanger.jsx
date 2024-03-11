import React, { useState } from "react";

const colors = [
  {
    id: 1,
    color: "red",
    name: "Red",
  },
  {
    id: 2,
    color: "yellow",
    name: "Yellow",
  },
  {
    id: 3,
    color: "black",
    name: "Black",
  },
  {
    id: 4,
    color: "purple",
    name: "Purple",
  },
  {
    id: 5,
    color: "green",
    name: "Green",
  },
  {
    id: 6,
    color: "blue",
    name: "Blue",
  },
  {
    id: 7,
    color: "Orange",
    name: "Default",
  },
];

const BackgroundChanger = () => {
  const [background, setBackground] = useState("white");

  return (
    <>
    <div
      style={{ backgroundColor: background }}
      className={`w-screen h-full`}
    >
      <div className='absolute flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          {colors.map((color) => (
            <button
              onClick={() => setBackground(color.color)}
              key={color.id}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ color: "black", outline: `2px solid ${color.color}`}}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default BackgroundChanger;
