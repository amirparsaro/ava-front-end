import "../../../App.css";
import TextControl from "./TextControl";
import SimpleText from "./SimpleText";
import Player from "./Player";
import TimedText from "./TimedText";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { sendToTranscribe } from "../../../service/api/sendToTranscribe";
import { useContext } from "react";
import { InputContext } from "./InputContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TextReview = () => {
  const lastRouteToReview = useSelector((state) => state.lastRoute.value);
  const inputValue = useSelector((state) => state.fileURL.value);
  const [option, setOption] = useState(1);
  const [uploadFile, setUploadFile] = useState(null);
  const [color, setColor] = useState(null);
  const navigate = useNavigate();

  async function fetchFile() {
    setUploadFile(null);
    const file = await sendToTranscribe(inputValue);
    setUploadFile(file);
  }

  useEffect(() => {
    if (lastRouteToReview == "record") {
      setColor("#00ba9f");
    } else if (lastRouteToReview == "link") {
      setColor("#ff1654");
    } else {
      setColor("#118ad3");
    }
  }, [lastRouteToReview]);

  useEffect(() => {
    fetchFile();
  }, [inputValue]);

  function handleRestart(shouldRestart) {
    if (shouldRestart) {
      navigate("/convert/upload/" + lastRouteToReview);
    }
  }

  return (
    <div
      className="text-review-container"
      style={{
        border: `2px solid ${color}`,
        borderTopRightRadius: lastRouteToReview == "record" ? 0 : "15px",
        borderTopLeftRadius: "15px",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
      }}
    >
      <div className="review-padding">
        <TextControl
          color={color}
          file={uploadFile}
          option={option}
          onOptionChange={setOption}
          onRestart={handleRestart}
        />
        {option === 1 && <SimpleText file={uploadFile} color={color} />}
        {option === 2 && <TimedText file={uploadFile} color={color} />}
        {uploadFile != null && <Player color={color} file={uploadFile} />}
      </div>
    </div>
  );
};

export default TextReview;
