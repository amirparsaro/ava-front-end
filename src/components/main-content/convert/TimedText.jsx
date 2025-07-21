import "../../../App.css";
import TimeBox from "./TimeBox";

import { timeToPersianDigits } from "../../../utils/utils";

const timeData = [
  { start: "00:00", end: "00:03", text: "[با]" },
  { start: "00:03", end: "00:06", text: "[---]" },
  { start: "00:06", end: "00:08", text: "[---]" },
  { start: "00:08", end: "00:12", text: "[با]" },
  { start: "00:12", end: "00:14", text: "و" },
  { start: "00:14", end: "00:17", text: "[---]" },
  { start: "00:17", end: "00:20", text: "[---]" },
];

const TimedText = ({ filePack }) => {
  return (
    <div className="timed-text-container">
  {timeData.map((item, index) => (
    <TimeBox
      key={index}
      startTime={timeToPersianDigits(item.start)}
      endTime={timeToPersianDigits(item.end)}
      text={item.text}
      style={{
        backgroundColor: index % 2 === 0 ? "#F2F2F2" : "white",
      }}
    />
  ))}
</div>
  );
};

export default TimedText;
