import "../../../App.css";
import Option from "./Option";
import { useState } from "react";
import lightMicIcon from "../../../assets/images/mic-Icon-white.svg";
import darkMicIcon from "../../../assets/images/mic-Icon-grey.svg";
import lightUploadIcon from "../../../assets/images/upload-Icon-white.svg";
import darkUploadIcon from "../../../assets/images/upload-Icon-grey.svg";
import lightChainIcon from "../../../assets/images/chain-Icon-white.svg";
import darkChainIcon from "../../../assets/images/chain-Icon-grey.svg";
const Upload = () => {
  const [option, setOption] = useState(1);
  return (
    <div className="upload-container">
      <div className="option-container">
        <Option
          title="ضبط صدا"
          isSelected={option === 1}
          onClick={() => setOption(1)}
          lightIcon={lightMicIcon}
          darkIcon={darkMicIcon}
          color="#00BA9F"
        />
        <Option
          title="بارگذاری فایل"
          isSelected={option === 2}
          onClick={() => setOption(2)}
          lightIcon={lightUploadIcon}
          darkIcon={darkUploadIcon}
          color="#118AD3"
        />
        <Option
          title="لینک"
          isSelected={option === 3}
          onClick={() => setOption(3)}
          lightIcon={lightChainIcon}
          darkIcon={darkChainIcon}
          color="#FF1654"
        />
      </div>

      
    </div>
  );
};

export default Upload;
