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
import { Outlet, useNavigate } from "react-router-dom";
import { InputContext } from "./InputContext";

const Upload = () => {
  const [option, setOption] = useState(1);
  const [inputValue, setInputValue] = useState(null);
  const [lastRouteToReview, setLastRouteToReview] = useState(null);
  const navigate = useNavigate();

  const isInReviewPage = window.location.pathname.endsWith("review");
  useEffect(() => {
    if (isInReviewPage) {
      if (lastRouteToReview == "record") setOption(1);
      else if (lastRouteToReview == "link") setOption(3);
      else setOption(3);
    }
  });

  function lastRoute(route) {
    if (route.endsWith("record")) setLastRouteToReview("record");
    else if (route.endsWith("link")) setLastRouteToReview("link");
    else if (route.endsWith("upload-file")) setLastRouteToReview("upload-file");
    else setLastRouteToReview("record");
  }

  function handleInputValue(value) {
    setInputValue(value);
    navigate("/convert/upload/review");
  }

  return (
    <InputContext.Provider
      value={{ handleInputValue, inputValue, lastRoute, lastRouteToReview }}
    >
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
    </InputContext.Provider>
  );
};

export default Upload;
