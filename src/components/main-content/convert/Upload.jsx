import "../../../App.css";
import Option from "./Option";
import UploadFile from "./UploadFile";
import Record from "./Record";
import Link from "./Link";
import Player from "./Player";
import TextControl from "./TextControl";
import { useEffect, useState } from "react";
import lightMicIcon from "../../../assets/images/mic-Icon-white.svg";
import darkMicIcon from "../../../assets/images/mic-Icon-grey.svg";
import lightUploadIcon from "../../../assets/images/upload-Icon-white.svg";
import darkUploadIcon from "../../../assets/images/upload-Icon-grey.svg";
import lightChainIcon from "../../../assets/images/chain-Icon-white.svg";
import darkChainIcon from "../../../assets/images/chain-Icon-grey.svg";
import TextReview from "./TextReview";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { InputContext } from "./InputContext";
import { useSelector } from "react-redux";

const Upload = () => {
  const lastRouteToReview = useSelector((state) => state.lastRoute.value);
  const [option, setOption] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const isInReviewPage = window.location.pathname.endsWith("review");
  useEffect(() => {
    if (isInReviewPage) {
      if (lastRouteToReview == "record") setOption(1);
      else if (lastRouteToReview == "link") setOption(3);
      else setOption(2);
    } else {
      if (location.pathname.endsWith("record")) setOption(1);
      else if (location.pathname.endsWith("link")) setOption(3);
      else setOption(2);
    }
  });

  return (
    <div className="upload-container">
      <div className="option-container">
        <Option
          to="/convert/upload/record"
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
