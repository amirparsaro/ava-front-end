import "../../../App.css";

const Option = ({ title, lightIcon, darkIcon, color, isSelected, onClick }) => {
  return (
    <button
      className="option-button"
      style={{ backgroundColor: isSelected ? color : "#ffffff" }}
      onClick={onClick}
    >
      <div className="option-button-container">
        <img src={isSelected ? lightIcon : darkIcon}></img>
        <p style={{ color: isSelected ? "#ffffff" : "#969696" }}>{title}</p>
      </div>
    </button>
  );
};

export default Option;
