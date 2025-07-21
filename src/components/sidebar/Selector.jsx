import "../../App.css";
import { Link } from "react-router-dom";

const Title = ({ title, icon, to }) => {
  return (
    <Link className="selector" to={to}>
      <img src={icon} alt="icon" />
      <p>{title}</p>
    </Link>
  );
};

export default Title;
