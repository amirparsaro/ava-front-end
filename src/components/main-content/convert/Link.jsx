import "../../../App.css";
import LinkForm from "./LinkForm";

const UploadFile = () => {
  return (
    <div className="link-container">
      <LinkForm />
      <p className="link-explanation">
        نشانی اینترنتی فایل حاوی گفتار (صوتی/تصویری) را وارد و دکمه را فشار دهید.
      </p>
    </div>
  );
};

export default UploadFile;
