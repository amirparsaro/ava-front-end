import "../../App.css";
import UserIcon from "../../assets/images/user-Icon.svg";
import DropIcon from "../../assets/images/drop-Icon.svg";
import LogoutIcon from "../../assets/images/logout.svg";
import { useState } from "react";

const UserDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="header">
      <button
        className={isOpen ? "user-button open" : "user-button"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div class="user-title">
          <img src={UserIcon} alt="user-icon" class="user-icon"></img>
          <p>مهمان</p>
          <img src={DropIcon} alt="drop-icon" class="drop-icon"></img>
        </div>
      </button>
      <button className={isOpen ? "dropdown open" : "dropdown"}>
        <div class="logout-title">
          <img src={LogoutIcon} alt="user-icon" class="logout-icon"></img>
          <p>خروج</p>
        </div>
      </button>
    </div>
  );
};

export default UserDropDown;
