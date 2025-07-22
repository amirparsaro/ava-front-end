import "../../../App.css";
import TextControl from "./TextControl";
import SimpleText from "./SimpleText";
import Player from "./Player";
import TimedText from "./TimedText";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const uploadFile = {
  id: 1,
  uploadType: "link",
  name: "https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khosravi%20%7C%20Tanha%20Nazar%20(320).mp3",
  date: "1400-08-21",
  duration: "4:29",
  segments: [
    {
      start: "0:00:0.150",
      end: "0:00:7.980",
      text: "رحمان رحیم سلام عرض می کنم خدا قوت میگم به مهندس احمدی آذر",
    },
    {
      start: "0:00:8.000",
      end: "0:00:15.000",
      text: "این یک بخش دیگر از فایل است",
    },
    {
      start: "0:00:15.000",
      end: "0:00:22.000",
      text: "ادامه فایل صوتی",
    },
  ],
};

const TextReview = () => {
  const [option, setOption] = useState(1);
  return (
    <div className="text-review-container">
      <div className="review-padding">
        <TextControl file={uploadFile} option={option} onOptionChange={setOption} />
        {option === 1 && <SimpleText file={uploadFile} />}
        {option === 2 && <TimedText file={uploadFile} />}
        <Player color="#118ad3" />
      </div>
    </div>
  );
};

export default TextReview;
