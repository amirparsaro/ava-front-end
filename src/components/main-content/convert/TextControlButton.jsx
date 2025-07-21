import "../../../App.css";

const TextControlButton = ({
  text,
  greyIcon,
  blackIcon,
  isSelected,
  onClick,
}) => {
  return (
    <button
      class={isSelected ? "text-control-button clicked" : "text-control-button"}
      onClick={onClick}
    >
      <img src={isSelected ? blackIcon : greyIcon}></img>
      <p style={{ color: isSelected ? "#000000" : "#969696" }}>{text}</p>
    </button>
  );
};

export default TextControlButton;
