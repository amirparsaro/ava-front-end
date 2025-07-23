import "../../../App.css";
import { useRef } from "react";
import lightUploadIcon from "../../../assets/images/upload-Icon-white.svg";

const UploadButton = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };

  return (
    <div>
      <button class="upload-file-button" onClick={handleClick}>
        <img src={lightUploadIcon} alt="upload-file-button"></img>
      </button>

      <input
        type="file"
        accept="audio/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadButton;
