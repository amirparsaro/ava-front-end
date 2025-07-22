import "../../App.css";
import SpeechIcon from "../../assets/images/speech-icon.svg";
import ArchiveIcon from "../../assets/images/archive-Icon.svg";
import Title from "./Title";
import Selector from "./Selector";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  let pathStartsWith = "";
  if (location.pathname.startsWith("/convert")) {
    pathStartsWith = "convert";
  } else if (location.pathname.startsWith("/archive")) {
    pathStartsWith = "archive";
  }

  return (
    <aside className="sidebar">
      <Title />
      
      <div className="selector-container">
        <Selector title="تبدیل گفتار" icon={SpeechIcon} to="/" selected={pathStartsWith === "convert"} />
        <Selector title="آرشیو" icon={ArchiveIcon} to="/archive" selected={pathStartsWith === "archive"} />
      </div>
    </aside>
  );
};

export default SideBar;
