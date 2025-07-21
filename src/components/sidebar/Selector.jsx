import "../../App.css";

const Title = ({ title, icon }) => {
  return (
    <div className="selector">
      <img src={icon} alt="icon" />
      <p>{title}</p>
    </div>
  );
};

export default Title;
