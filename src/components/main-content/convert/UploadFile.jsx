import "../../../App.css";
import UploadButton from "./UploadButton";

const UploadFile = () => {
  return (
    <div className="upload-file-container">
      <UploadButton />
      <p className="upload-file-explanation">
        برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید. متن پیاده شده
        آن، در اینجا ظاهر می شود.
      </p>
    </div>
  );
};

export default UploadFile;
