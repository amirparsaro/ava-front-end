import "../../../App.css";
import { useLocation, useNavigate } from "react-router-dom";

const TextControlButton = ({
  text,
  greyIcon,
  blackIcon,
  isSelected,
  onClick,
  pathname,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToPath = () => {
    navigate(pathname);
  };

  return (
    <button
      class={isSelected ? "text-control-button clicked" : "text-control-button"}
      onClick={() => {
        onClick();
        goToPath();
      }}
    >
      <img src={isSelected ? blackIcon : greyIcon}></img>
      <p style={{ color: isSelected ? "#000000" : "#969696" }}>{text}</p>
    </button>
  );
};

export default TextControlButton;
