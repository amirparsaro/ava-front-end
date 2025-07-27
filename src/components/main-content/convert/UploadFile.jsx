import "../../../App.css";
import UploadButton from "./UploadButton";
import { useState, useContext, useEffect } from "react";
import { InputContext } from "./InputContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uploadType } from "../../../features/lastRoute";
import { fileURL } from "../../../features/file";

const UploadFile = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(uploadType("upload-file"));
  }, [location.pathname]);

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
      dispatch(fileURL(fileUrl));
      navigate("/convert/upload/review");
      
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
