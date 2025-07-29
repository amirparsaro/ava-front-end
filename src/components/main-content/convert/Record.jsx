import "../../../App.css";
import RecordButton from "./RecordButton";
import { useState, useContext, useEffect } from "react";
import { InputContext } from "./InputContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uploadType } from "../../../features/lastRoute";
import { fileURL } from "../../../features/file";

const Record = () => {
  const dispatch = useDispatch();
  const [audioUrl, setAudioUrl] = useState(null);
  const [link, setLink] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

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

      setLink(fileUrl);
      dispatch(fileURL(fileUrl));
      navigate("/convert/upload/review");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleRecordingComplete = (audioBlob) => {
    const url = URL.createObjectURL(audioBlob);
    setAudioUrl(url);

    handleUpload(audioBlob);
  };

  useEffect(() => {
    dispatch(uploadType("record"));
  }, [location.pathname]);

  return (
    <div className="record-container">
      <RecordButton onRecordingComplete={handleRecordingComplete} />
      <p className="record-explanation">
        برای شروع به صحبت، دکمه را فشار دهید تا متن پیاده شده آن، در اینجا ظاهر
        شود.
      </p>
    </div>
  );
};

export default Record;
