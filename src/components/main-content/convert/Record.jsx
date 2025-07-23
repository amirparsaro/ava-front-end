import "../../../App.css";
import RecordButton from "./RecordButton";
import { useState, useContext } from "react";
import { InputContext } from "./InputContext";

const Record = () => {
  const [audioUrl, setAudioUrl] = useState(null);
  const [link, setLink] = useState("");

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
      setLink(fileUrl);
      handleInputValue(fileUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleRecordingComplete = (audioBlob) => {
    const url = URL.createObjectURL(audioBlob);
    setAudioUrl(url);

    handleUpload(audioBlob);
  };

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
