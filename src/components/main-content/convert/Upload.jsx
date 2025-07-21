import "../../../App.css";
import Option from "./Option";
import UploadFile from "./UploadFile";
import Record from "./Record";
import Link from "./Link";
import Player from "./Player";
import TextControl from "./TextControl";
import { useState } from "react";
import lightMicIcon from "../../../assets/images/mic-Icon-white.svg";
import darkMicIcon from "../../../assets/images/mic-Icon-grey.svg";
import lightUploadIcon from "../../../assets/images/upload-Icon-white.svg";
import darkUploadIcon from "../../../assets/images/upload-Icon-grey.svg";
import lightChainIcon from "../../../assets/images/chain-Icon-white.svg";
import darkChainIcon from "../../../assets/images/chain-Icon-grey.svg";
import TextReview from "./TextReview";
import { Outlet } from "react-router-dom";

const Upload = () => {
  const [option, setOption] = useState(1);
  return (
    <div className="upload-container">
      <div className="option-container">
        <Option
          to="/"
          title="ضبط صدا"
          isSelected={option === 1}
          onClick={() => setOption(1)}
          lightIcon={lightMicIcon}
          darkIcon={darkMicIcon}
          color="#00BA9F"
        />
        <Option
          to="/convert/upload/upload-file"
          title="بارگذاری فایل"
          isSelected={option === 2}
          onClick={() => setOption(2)}
          lightIcon={lightUploadIcon}
          darkIcon={darkUploadIcon}
          color="#118AD3"
        />
        <Option
          to="/convert/upload/link"
          title="لینک"
          isSelected={option === 3}
          onClick={() => setOption(3)}
          lightIcon={lightChainIcon}
          darkIcon={darkChainIcon}
          color="#FF1654"
        />
      </div>

      <Outlet />
    </div>
  );
};

export default Upload;
