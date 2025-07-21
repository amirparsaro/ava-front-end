import "../../../App.css";
import lightMicIcon from "../../../assets/images/mic-Icon-white.svg";

const RecordButton = () => {
    return (
        <button class="record-button">
            <img src={lightMicIcon} alt="record-button"></img>
        </button>
    );
};

export default RecordButton;