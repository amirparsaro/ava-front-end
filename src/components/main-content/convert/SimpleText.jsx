import { useEffect } from "react";
import "../../../App.css";
import { useSelector } from "react-redux";
import { timeToSeconds } from "../../../utils/utils";

const SimpleText = ({ file, color }) => {
  const time = useSelector((state) => state.currentTime.value);

  useEffect(() => {
  }, [time]); // فقط برای تست: هر وقت time آپدیت شد، لاگ بزن

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
    <div className="simple-text-container">
      {file.segments.map((item, index) => (
        <p
          style={{
            color: setColor(color, time, item.start, item.end),
            display: "inline",
          }}
          key={index}
        >
          {item.text + " "}
        </p>
      ))}
    </div>
  );
};

export default SimpleText;
