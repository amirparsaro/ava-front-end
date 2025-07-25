import "../../../App.css";

const SimpleText = ({ file }) => {
  if (!file || !Array.isArray(file.segments)) {
    return <p>در حال بارگذاری... </p>;
  }
  function formatText(file) {
    let segments = "";
    for (const segment of file.segments) {
      segments += segment.text + " ";
    }
    return segments;
  }

  return (
    <div className="simple-text-container">
      <p>{formatText(file)}</p>
    </div>
  );
};

export default SimpleText;
