import "../../../App.css";
import { Link } from "react-router-dom";

const Option = ({ title, lightIcon, darkIcon, color, isSelected, onClick, to }) => {
  return (
    <Link to={to}
      className="option-button"
      style={{ backgroundColor: isSelected ? color : "#ffffff" }}
      onClick={onClick}
    >
      <div className="option-button-container">
        <img src={isSelected ? lightIcon : darkIcon}></img>
        <p style={{ color: isSelected ? "#ffffff" : "#969696" }}>{title}</p>
      </div>
    </Link>
  );
};

export default Option;
