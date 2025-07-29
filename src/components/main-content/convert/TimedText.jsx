import "../../../App.css";
import TimeBox from "./TimeBox";
import { timeToPersianDigits } from "../../../utils/utils";
import { useSelector } from "react-redux";
import { timeToSeconds } from "../../../utils/utils";

const TimedText = ({ file, color }) => {
  const time = useSelector((state) => state.currentTime.value);
  
  if (!file || !Array.isArray(file.segments)) {
    return <p>در حال بارگذاری... </p>;
  }

  function setColor(color, time, start, end) {
    if (timeToSeconds(start) <= time && time <= timeToSeconds(end)) {
      return color;
    }

    return "#000000";
  }

  return (
    <div className="timed-text-container">
      {file.segments.map((item, index) => (
        <TimeBox
          key={index}
          startTime={timeToPersianDigits(item.start)}
          endTime={timeToPersianDigits(item.end)}
          text={item.text}
          style={{
            backgroundColor: index % 2 === 0 ? "#F2F2F2" : "white",
            color: setColor(color, time, item.start, item.end),
          }}
        />
      ))}
    </div>
  );
};

export default TimedText;
