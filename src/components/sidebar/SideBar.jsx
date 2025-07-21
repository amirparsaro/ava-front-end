import "../../App.css";
import SpeechIcon from "../../assets/images/speech-icon.svg";
import ArchiveIcon from "../../assets/images/archive-Icon.svg";
import Title from "./Title";
import Selector from "./Selector";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <Title />
      
      <div className="selector-container">
        <Selector title="تبدیل گفتار" icon={SpeechIcon} />
        <Selector title="آرشیو" icon={ArchiveIcon} />
      </div>
    </aside>
  );
};

export default SideBar;
