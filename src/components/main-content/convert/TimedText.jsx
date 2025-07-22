import "../../../App.css";
import TimeBox from "./TimeBox";

import { timeToPersianDigits } from "../../../utils/utils";

const TimedText = ({ file }) => {
  return (
    <div className="timed-text-container">
      {
      file.segments.map((item, index) => (
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
