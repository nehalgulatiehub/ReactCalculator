import React from "react";

const Buttons = ({ onButton }) => {
  function change(event) {
    console.log(event);
  }
  const mybutt = [
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "/",
    "7",
    "8",
    "*",
    "9",
    "0",
    "/",
    "C",
    "=",
  ];
  return (
    <>
      {mybutt.map((e) => (
        <button
          key={Math.random()}
          className="calbtn"
          onClick={() => onButton(e)}
        >
          {e}
        </button>
      ))}
    </>
  );
};

export default Buttons;
