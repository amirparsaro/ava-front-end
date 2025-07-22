import "../../App.css";
import UserIcon from "../../assets/images/user-Icon.svg";
import DropIcon from "../../assets/images/drop-Icon.svg";
import LogoutIcon from "../../assets/images/logout.svg";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Language = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("فارسی");
  const [isClickable, setClickable] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/convert/upload/review"
    ) {
      setClickable(false);
    } else {
      setClickable(true);
    }
  }, [location.pathname]);

  return (
    <div
      className={
        isClickable ? "language-button" : "language-button unclickable"
      }
    >
      <div className="language-text">
        <p>زبان گفتار:</p>
      </div>
      <div className="footer">
        <button
          className={isOpen ? "user-button open" : "user-button"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="user-title">
            <img src={DropIcon} alt="drop-icon" className="drop-icon"></img>
            <p>فارسی</p>
          </div>
        </button>
        <button className={isOpen ? "dropdown open" : "dropdown"}>
          <div className="logout-title">
            <p>انگلیسی</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Language;
