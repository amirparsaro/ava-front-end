import "../../../App.css";
import TextControl from "./TextControl";
import SimpleText from "./SimpleText";
import Player from "./Player";

const TextReview = () => {
  return (
    <div className="text-review-container">
      <div className="review-padding">
        <TextControl />
        <SimpleText />
        <Player />
      </div>
    </div>
  );
};

export default TextReview;
