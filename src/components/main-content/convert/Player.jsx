import "../../../App.css";
import pauseIcon from "../../../assets/images/pause.svg";
import stopIcon from "../../../assets/images/Stop.svg";
import volumeIcon from "../../../assets/images/volume-icon.svg";
import { useRef, useState, useEffect } from "react";
import { timeToPersianDigits } from "../../../utils/utils";
import playIcon from "../../../assets/images/play-icon.svg";
import { useDispatch } from "react-redux";
import { time } from "../../../features/currentTime";

const Player = ({ color, file }) => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setIsPLaying] = useState(false);

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  }

  const handlePlay = () => {
    if (!audioRef.current || !file?.url) {
      console.error("Audio file not found or invalid URL");
      return;
    }
    audioRef.current.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  };
  const handlePause = () => {
    audioRef.current?.pause();
  };

  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  useEffect(() => {
    dispatch(time(currentTime));
  }, [currentTime, dispatch]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPLaying(true);
    const handlePause = () => setIsPLaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  function handleStop() {
    audioRef.current?.pause();
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
  }

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="player-container">
      <audio ref={audioRef} src={file.url}></audio>

      <div className="play-buttons-container">
        <img src={stopIcon} alt="stop-icon" onClick={handleStop}></img>
        {isPlaying ? (
          <img src={pauseIcon} alt="pause-icon" onClick={handlePause} />
        ) : (
          <img
            src={playIcon}
            alt="play-icon"
            className="h-[13px]"
            onClick={handlePlay}
          />
        )}
      </div>

      <div
        className="progress-bar-wrapper"
        onClick={(e) => {
          if (!audioRef.current || !file?.url) {
            console.error("Audio file not found or invalid URL");
            return;
          }
          const rect = e.currentTarget.getBoundingClientRect();
          const percent = (e.clientX - rect.left) / rect.width;
          const newTime = percent * duration;
          audioRef.current.currentTime = newTime;
          setCurrentTime(newTime);
        }}
      >
        <div className="progress-bar">
          <div
            className="progress-filled"
            style={{ width: `${progressPercent}%`, backgroundColor: color }}
          ></div>
          <div
            className="progress-handle"
            style={{ backgroundColor: color, left: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      <div className="volume-container">
        <p>{timeToPersianDigits(formatTime(currentTime))}</p>

        <img src={volumeIcon} alt="volume-icon"></img>
        <div
          className="h-[20px] cursor-pointer flex items-center"
          onClick={(e) => {
            if (!audioRef.current || !file?.url) {
              console.error("Audio file not found or invalid URL");
              return;
            }
            const rect = e.currentTarget.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            if (percent < 0) percent = 0;
            if (percent > 1) percent = 1;
            setVolume(percent);
          }}
        >
          <div className="volume-bar">
            <div
              className="filled-volume-bar"
              style={{ backgroundColor: color, width: `${volume * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
