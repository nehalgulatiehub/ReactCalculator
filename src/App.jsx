import React, { useState } from "react";
import Buttons from "./assets/component/Buttons";
import "./App.css";
import Display from "./Display";

const App = () => {
  const [calval, setVal] = useState("");
  const onButton = (e) => {
    if (e === "=") {
      let result = eval(calval);
      setVal(result);
    } else if (e === "C") {
      setVal("");
    } else {
      let newDisplay = calval + e;
      setVal(newDisplay);
      console.log(calval);
    }
  };

  return (
    <>
      <div className="container1">
        <Display onDisplay={calval} />
        <Buttons onButton={onButton} />
      </div>
    </>
  );
};

export default App;
