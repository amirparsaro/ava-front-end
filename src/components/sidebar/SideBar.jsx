import "../../App.css";
import SpeechIcon from "../../assets/images/speech.png";
import ArchiveIcon from "../../assets/images/archive.png";
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
