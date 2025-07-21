import "../../../Archive.css";
import GreyTextIcon from "../../../assets/images/text-icon-grey.svg";
import BlackTextIcon from "../../../assets/images/text-icon-black.svg";
import GreyTimeIcon from "../../../assets/images/time-icon-grey.svg";
import BlackTimeIcon from "../../../assets/images/time-icon-black.svg";
import TextControlButton from "../convert/TextControlButton";
import SimpleText from "../convert/SimpleText";
import TimedText from "../convert/TimedText";
import Player from "../convert/Player";
import { useState } from "react";

const BoxComponent = ({ boxHeightCount, color }) => {
  const [option, setOption] = useState(1);

  return (
    <div
      className="rounded-lg flex flex-col justify-center"
      style={{
        height: `${boxHeightCount * 55}px`,
      }}
    >
      <div className="text-buttons-container mr-5">
        <TextControlButton
          text="متن ساده"
          onClick={() => setOption(1)}
          greyIcon={GreyTextIcon}
          blackIcon={BlackTextIcon}
          isSelected={option === 1}
        />

        <TextControlButton
          text="متن زمان بندی شده"
          onClick={() => setOption(2)}
          greyIcon={GreyTimeIcon}
          blackIcon={BlackTimeIcon}
          isSelected={option === 2}
        />
      </div>
      {option === 1 ? <SimpleText /> : null}
      {option === 2 ? <TimedText /> : null}
      <div className="flex justify-center">
        <div className="flex justify-center w-3/4 my-2">
          <Player color={color} />
        </div>
      </div>
    </div>
  );
};

export default BoxComponent;
