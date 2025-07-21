import "../../../App.css";
import RecordButton from "./RecordButton";
import { useState } from "react";

const Record = () => {
  const [audioUrl, setAudioUrl] = useState(null);

  const handleRecordingComplete = (audioBlob) => {
    const url = URL.createObjectURL(audioBlob);
    setAudioUrl(url);
  };

  return (
    <div className="record-container">
      <RecordButton onRecordingComplete={handleRecordingComplete} />
      <p className="record-explanation">
        برای شروع به صحبت، دکمه را فشار دهید تا متن پیاده شده آن، در اینجا ظاهر شود.
      </p>
      {audioUrl && (
        <audio controls src={audioUrl} style={{ marginTop: "10px" }} />
      )}
    </div>
  );
};

export default Record;