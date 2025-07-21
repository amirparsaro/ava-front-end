import "../../../App.css";
import lightUploadIcon from "../../../assets/images/upload-Icon-white.svg";

const RecordButton = () => {
    return (
        <button class="upload-file-button">
            <img src={lightUploadIcon} alt="upload-file-button"></img>
        </button>
    );
};

export default RecordButton;