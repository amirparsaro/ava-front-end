import "../../../App.css";
import TextControl from "./TextControl";
import SimpleText from "./SimpleText";
import Player from "./Player";
import TimedText from "./TimedText";
import { Outlet } from "react-router-dom";

const TextReview = () => {
  return (
    <div className="text-review-container">
      <div className="review-padding">
        <TextControl />
        <Outlet />
        <Player color="#118ad3" />
      </div>
    </div>
  );
};

export default TextReview;
