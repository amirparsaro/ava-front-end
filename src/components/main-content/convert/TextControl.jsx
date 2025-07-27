import "../../../App.css";
import "../../../Archive.css";
import TextControlButton from "./TextControlButton";
import GreyTextIcon from "../../../assets/images/text-icon-grey.svg";
import BlackTextIcon from "../../../assets/images/text-icon-black.svg";
import GreyTimeIcon from "../../../assets/images/time-icon-grey.svg";
import BlackTimeIcon from "../../../assets/images/time-icon-black.svg";
import copyIcon from "../../../assets/images/copy-Icon.svg";
import downloadIcon from "../../../assets/images/download-Icon.svg";
import restartIcon from "../../../assets/images/Restart-icon.svg";
import { useEffect, useState } from "react";
import { Alert, Snackbar, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useLocation } from "react-router-dom";

const TextControl = ({ file, onOptionChange, onRestart, color }) => {
  const handleDownload = (file) => {
    fetch(file.url)
      .then((res) => res.blob())
      .then((blob) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = file.url;
        a.click();
        URL.revokeObjectURL(a.href);
      })
      .catch((err) => {
        console.error("Download failed:", err);
      });
  };

  const [option, setOption] = useState(1);
  const [openAlert, setOpenAlert] = useState(false);
  const location = useLocation();

  function formatText(file) {
    let segments = "";
    for (const segment of file.segments) {
      segments += segment.text + " ";
    }
    return segments;
  }

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenAlert(false);
  };

  function handleRestart() {
    if (onRestart) onRestart(true);
  }

  return (
    <div className="text-control-container">
      <Snackbar
        onClick={(e) => {
          e.stopPropagation();
        }}
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          icon={<CheckIcon fontSize="inherit" />}
          sx={{ width: "100%" }}
          className="alert-text"
        >
          <p className="alert-text">متن مورد نظر شما کپی شد!</p>
        </Alert>
      </Snackbar>

      <div className="text-buttons-container">
        <TextControlButton
          text="متن ساده"
          onClick={() => {
            setOption(1);
            onOptionChange(1);
          }}
          greyIcon={GreyTextIcon}
          blackIcon={BlackTextIcon}
          isSelected={option === 1}
        />

        <TextControlButton
          text="متن زمان بندی شده"
          onClick={() => {
            setOption(2);
            onOptionChange(2);
          }}
          greyIcon={GreyTimeIcon}
          blackIcon={BlackTimeIcon}
          isSelected={option === 2}
        />
      </div>
      <div className="right-control-buttons">
        <div className="copy-container">
          <img
            src={downloadIcon}
            alt="download-icon"
            onClick={() => {
              if (file) handleDownload(file);
              else console.error("File does not exist.");
            }}
          ></img>
          <img
            src={copyIcon}
            alt="copy-icon"
            onClick={() => {
              if (file) {
                navigator.clipboard.writeText(formatText(file));
                handleClickAlert();
              } else {
                console.error("File does not exist.");
              }
            }}
          ></img>
        </div>

        <button
          className="restart-button"
          onClick={handleRestart}
          style={{ backgroundColor: color }}
        >
          <p>شروع دوباره</p>
          <img src={restartIcon} alt="restart-icon"></img>
        </button>
      </div>
    </div>
  );
};

export default TextControl;
