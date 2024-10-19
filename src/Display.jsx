import React, { useState } from "react";

const Display = ({ onDisplay }) => {
  return (
    <div>
      <input
        className="inputfield"
        type="text"
        name="input"
        value={onDisplay}
        readOnly
      />
    </div>
  );
};

export default Display;
