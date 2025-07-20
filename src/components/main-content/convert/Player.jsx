import "../../../App.css";
import pauseIcon from "../../../assets/images/pause.svg";
import stopIcon from "../../../assets/images/Stop.svg";
import volumeIcon from "../../../assets/images/volume-icon.svg";

import { timeToPersianDigits } from "../../../utilities/utils";

const Player = ({ color }) => {
  return (
    <div className="player-container">
      <div className="play-buttons-container">
        <img src={pauseIcon} alt="pause-icon"></img>
        <img src={stopIcon} alt="stop-icon"></img>
      </div>

      <div className="progress-bar">
        <div className="progress-filled" style={{ backgroundColor: color }}></div>
        <div className="progress-handle" style={{ backgroundColor: color }}></div>
      </div>

      <p>{timeToPersianDigits("4:29")}</p>

      <div className="volume-container">
        <img src={volumeIcon} alt="volume-icon"></img>
        <div className="volume-bar">
          <div className="filled-volume-bar" style={{ backgroundColor: color }}></div>
        </div>
      </div>
    </div>
  );
};

export default Player;
