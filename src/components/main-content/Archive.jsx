import MainArchive from "../../pages/MainArchive";
import MainContent from "../../pages/MainContent";
import SideBar from "../sidebar/SideBar";
import MainTitle from "./convert/MainTitle";
import UserDropDown from "./UserDropDown";
import Upload from "./convert/Upload";
import Language from "./Language";
import ArchiveTitle from "./archive/ArchiveTitle";
import ArchiveGrid from "./archive/ArchiveGrid";
import NavigationBox from "./archive/NavigationBox";
import UploadFile from "./convert/UploadFile";
import Record from "./convert/Record";
import Link from "./convert/Link";
import TextReview from "./convert/TextReview";
import { Routes, Route, Navigate } from "react-router-dom";
import TimedText from "./convert/TimedText";
import SimpleText from "./convert/SimpleText";
import recordBtn from "../../assets/images/record-Btn.svg";
import linkBtn from "../../assets/images/link-Btn.svg";
import uploadBtn from "../../assets/images/upload-Btn.svg";
import { dateToPersianDigits } from "../../utils/utils";
import { toPersianDigits } from "../../utils/utils";
import { useState } from "react";
import "../../App.css";
import "../../index.css";
import "../../Archive.css";

const Archive = () => {
  const [files, setFiles] = useState([
    {
      id: 1,
      color: "#ff1654",
      icon: linkBtn,
      name: "https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khosravi%20%7C%20Tanha%20Nazar%20(320).mp3",
      date: dateToPersianDigits("1400-08-21"),
      type: ".mp3",
      duration: toPersianDigits("4:29"),
    },
    {
      id: 2,
      color: "#118ad3",
      icon: uploadBtn,
      name: "khaterate To",
      date: dateToPersianDigits("1400-08-20"),
      type: ".mp4",
      duration: toPersianDigits("4:28"),
    },
    {
      id: 3,
      color: "#ff1654",
      icon: linkBtn,
      name: "https://dls.loudmusic.ir/Music/1401/01/Baraye%20-Shervin%20Hajipour%20[loudmusic.ir]-320.mp3",
      date: dateToPersianDigits("1400-08-20"),
      type: ".wav",
      duration: toPersianDigits("3:14"),
    },
    {
      id: 4,
      color: "#00b5a0",
      icon: recordBtn,
      name: "پادکست رادیو راه - فصل دوم -قسمت ششم- راه سروش",
      date: dateToPersianDigits("1400-08-19"),
      type: ".mp3",
      duration: toPersianDigits("1:28:18"),
    },
    {
      id: 5,
      color: "#ff1654",
      icon: linkBtn,
      name: "https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khosravi%20%7C%20Tanha%20Nazar%20(320).mp3",
      date: dateToPersianDigits("1400-08-21"),
      type: ".mp3",
      duration: toPersianDigits("1:28:18"),
    },
    {
      id: 6,
      color: "#118ad3",
      icon: uploadBtn,
      name: "khaterate To",
      date: dateToPersianDigits("1400-08-20"),
      type: ".mp4",
      duration: toPersianDigits("4:28"),
    },
    {
      id: 7,
      color: "#ff1654",
      icon: linkBtn,
      name: "https://dls.loudmusic.ir/Music/1401/01/Baraye%20-Shervin%20Hajipour%20[loudmusic.ir]-320.mp3",
      date: dateToPersianDigits("1400-08-20"),
      type: ".wav",
      duration: toPersianDigits("4:14"),
    },
    {
      id: 8,
      color: "#00b5a0",
      icon: recordBtn,
      name: "پادکست رادیو راه - فصل دوم -قسمت ششم- راه سروش",
      date: dateToPersianDigits("1400-08-19"),
      type: ".mp3",
      duration: toPersianDigits("1:28:18"),
    },
  ]);

  const addFile = (file) => {
    setFiles((prev) => {
      const maxId = prev.length > 0 ? Math.max(...prev.map((f) => f.id)) : 0;
      const newFile = { id: maxId + 1, ...file };
      return [...prev, newFile];
    });
  };

  const deleteFile = (id) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  const getFile = (id) => {
    return files.find((file) => file.id === id);
  };

  const updateFile = (id, newData) => {
    setFiles((prev) =>
      prev.map((file) => (file.id === id ? { ...file, ...newData } : file))
    );
  };

  const filePack = {
    files,
    addFile,
    deleteFile,
    getFile,
    updateFile,
  };

  return (
    <div className="flex justify-center w-full">
      <SideBar />
      <div className="main-content">
        <UserDropDown />

        <Routes>
          <Route path="/" element={<Navigate to="/convert/upload/record" />} />
          <Route
            path="/convert/upload/review"
            element={<Navigate to="/convert/upload/review/simple" />}
          />

          <Route path="/convert" element={<MainContent filePack={filePack} />}>
            <Route path="upload" element={<Upload />}>
              <Route path="record" element={<Record />} />
              <Route path="upload-file" element={<UploadFile />} />
              <Route path="link" element={<Link />} />
              <Route path="review" element={<TextReview />}>
                <Route path="timed" element={<TimedText />} />
                <Route path="simple" element={<SimpleText />} />
              </Route>
            </Route>
          </Route>

          <Route path="/archive" element={<MainArchive filePack={filePack} />}>
            <Route path=":id" element={<MainArchive />} />
            <Route path=":id/simple" element={<MainArchive />} />
            <Route path=":id/timed" element={<MainArchive />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Archive;
