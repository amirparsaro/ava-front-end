import "../../../App.css";
import TextControl from "./TextControl";
import SimpleText from "./SimpleText";
import Player from "./Player";
import TimedText from "./TimedText";

const TextReview = () => {
  return (
    <div className="text-review-container">
      <div className="review-padding">
        <TextControl />
        <TimedText />
        <Player />
      </div>
    </div>
  );
};

export default TextReview;
