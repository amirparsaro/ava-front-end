import "../../../App.css";
import TextControl from "./TextControl";
import SimpleText from "./SimpleText";
import Player from "./Player";
import TimedText from "./TimedText";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { sendToTranscribe } from "../../../service/api/sendToTranscribe";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { InputContext } from "./InputContext";

const TextReview = () => {
  const [option, setOption] = useState(1);
  const [uploadFile, setUploadFile] = useState(null);

  const { inputValue } = useContext(InputContext);
  useEffect(() => {
    async function fetchFile() {
      const file = await sendToTranscribe(inputValue);
      setUploadFile(file);
    }

    fetchFile();
  }, [inputValue]);

  return (
    <div className="text-review-container">
      <div className="review-padding">
        <TextControl
          file={uploadFile}
          option={option}
          onOptionChange={setOption}
        />
        {option === 1 && <SimpleText file={uploadFile} />}
        {option === 2 && <TimedText file={uploadFile} />}
        <Player color="#118ad3" />
      </div>
    </div>
  );
};

export default TextReview;
