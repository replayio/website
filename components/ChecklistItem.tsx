import React, { useState } from "react";
import Icons from "./Icons";
import "./ChecklistItem.css"; // Import the CSS file

const ChecklistItem = ({ text }: { text: string }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(true);
  };

  return (
    <li onClick={handleClick} className={isChecked ? "checked" : ""}>
      {isChecked ? <Icons type="check" /> : <Icons type="circle" />}
      {text}
    </li>
  );
};

export default ChecklistItem;
