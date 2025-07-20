import "../../App.css";
import UserIcon from "../../assets/images/user-Icon.svg";
import DropIcon from "../../assets/images/drop-Icon.svg";
import LogoutIcon from "../../assets/images/logout.svg";
import { useState } from "react";

const Language = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <button
        className={isOpen ? "user-button open" : "user-button"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="user-title">
          <img src={UserIcon} alt="user-icon" className="user-icon"></img>
          <p>مهمان</p>
          <img src={DropIcon} alt="drop-icon" className="drop-icon"></img>
        </div>
      </button>
      <button className={isOpen ? "dropdown open" : "dropdown"}>
        <div className="logout-title">
          <img src={LogoutIcon} alt="user-icon" className="logout-icon"></img>
          <p>خروج</p>
        </div>
      </button>
    </div>
  );
};

export default Language;
