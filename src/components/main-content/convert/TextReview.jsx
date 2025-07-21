import "../../../App.css";
import TextControl from "./TextControl";
import SimpleText from "./SimpleText";
import Player from "./Player";
import TimedText from "./TimedText";
import { Outlet } from "react-router-dom";

const TextReview = ({ filePack }) => {
  return (
    <div className="text-review-container">
      <div className="review-padding">
        <TextControl />
        <Outlet filePack={filePack} />
        <Player color="#118ad3" />
      </div>
    </div>
  );
};

export default TextReview;
