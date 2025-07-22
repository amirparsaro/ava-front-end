import "../../../App.css";
import RecordButton from "./RecordButton";
import { useState } from "react";

const Record = () => {
  const [audioUrl, setAudioUrl] = useState(null);

  const handleRecordingComplete = (audioBlob) => {
    const url = URL.createObjectURL(audioBlob);
    setAudioUrl(url);

    const a = document.createElement("a");
    a.href = url;
    a.download = "recorded-audio5834.wav";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
