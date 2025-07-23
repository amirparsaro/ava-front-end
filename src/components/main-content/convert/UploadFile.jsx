import "../../../App.css";
import UploadButton from "./UploadButton";
import { useState, useContext } from "react";
import { InputContext } from "./InputContext";

const UploadFile = () => {
  const { handleInputValue } = useContext(InputContext);

  const handleUpload = async (file) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "dev-ava");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dipvq4qnh/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      const fileUrl = data.secure_url;

      console.log("File URL:", fileUrl);
      handleInputValue(fileUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="upload-file-container">
      <UploadButton onFileSelect={handleUpload} />
      <p className="upload-file-explanation">
        برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید. متن پیاده
        شده آن، در اینجا ظاهر می شود.
      </p>
    </div>
  );
};

export default UploadFile;
