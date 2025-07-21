import "../../../App.css";
import TextControlButton from "./TextControlButton";
import GreyTextIcon from "../../../assets/images/text-icon-grey.svg";
import BlackTextIcon from "../../../assets/images/text-icon-black.svg";
import GreyTimeIcon from "../../../assets/images/time-icon-grey.svg";
import BlackTimeIcon from "../../../assets/images/time-icon-black.svg";
import copyIcon from "../../../assets/images/copy-Icon.svg";
import downloadIcon from "../../../assets/images/download-Icon.svg";
import restartIcon from "../../../assets/images/Restart-icon.svg";
import { useState } from "react";

const TextControl = () => {
  const [option, setOption] = useState(1);

  return (
    <div class="text-control-container">
      <div class="text-buttons-container">
        <TextControlButton
          text="متن ساده"
          onClick={() => setOption(1)}
          greyIcon={GreyTextIcon}
          blackIcon={BlackTextIcon}
          isSelected={option === 1}
          pathname={"/convert/upload/review/simple"}
        />

        <TextControlButton
          text="متن زمان بندی شده"
          onClick={() => setOption(2)}
          greyIcon={GreyTimeIcon}
          blackIcon={BlackTimeIcon}
          isSelected={option === 2}
          pathname={"/convert/upload/review/timed"}
        />
      </div>
      <div class="right-control-buttons">
        <div class="copy-container">
          <img src={downloadIcon} alt="download-icon"></img>
          <img src={copyIcon} alt="copy-icon"></img>
        </div>

        <button class="restart-button">
          <p>شروع دوباره</p>
          <img src={restartIcon} alt="restart-icon"></img>
        </button>
      </div>
    </div>
  );
};

export default TextControl;
