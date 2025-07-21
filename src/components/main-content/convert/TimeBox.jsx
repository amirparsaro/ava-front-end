import "../../../App.css";

const TimeBox = ({startTime, endTime, text, style}) => {
    return (
        <div className="time-box-container" style={style}>
            <p>{endTime}</p>
            <p>{startTime}</p>
            <p>{text}</p>
        </div>
    );
};

export default TimeBox;