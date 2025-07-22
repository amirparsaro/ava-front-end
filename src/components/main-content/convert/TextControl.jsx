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
import { useState } from "react";
import { Alert, Snackbar, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const TextControl = ({ file, onOptionChange }) => {
  const [option, setOption] = useState(1);
  const [openAlert, setOpenAlert] = useState(false);

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

  return (
    <div class="text-control-container">
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

      <div class="text-buttons-container">
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
      <div class="right-control-buttons">
        <div class="copy-container">
          <img src={downloadIcon} alt="download-icon"></img>
          <img
            src={copyIcon}
            alt="copy-icon"
            onClick={() => {
              navigator.clipboard.writeText(formatText(file));
              handleClickAlert();
            }}
          ></img>
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
