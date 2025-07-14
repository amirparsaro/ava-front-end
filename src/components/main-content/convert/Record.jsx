import "../../../App.css";
import RecordButton from "./RecordButton";

const Record = () => {
  return (
    <div className="record-container">
      <RecordButton />
      <p className="record-explanation">
        برای شروع به صحبت، دکمه را فشار دهید تا متن پیاده شده آن، در اینجا ظاهر شود.
      </p>
    </div>
  );
};

export default Record;