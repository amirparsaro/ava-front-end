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
      uploadType: "link",
      name: "https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khosravi%20%7C%20Tanha%20Nazar%20(320).mp3",
      date: "1400-08-21",
      type: ".mp3",
      duration: "4:29",
      segments: [
        {
          start: "0:00:0.150",
          end: "0:00:7.980",
          text: "رحمان رحیم سلام عرض می کنم خدا قوت میگم به مهندس احمدی آذر",
        },
        {
          start: "0:00:8.000",
          end: "0:00:15.000",
          text: "این یک بخش دیگر از فایل است",
        },
        {
          start: "0:00:15.000",
          end: "0:00:22.000",
          text: "ادامه فایل صوتی",
        },
      ],
    },
    {
      id: 2,
      uploadType: "upload",
      name: "khaterate To",
      date: "1400-08-20",
      type: ".mp4",
      duration: "4:28",
      segments: [
        {
          start: "0:00:1.530",
          end: "0:00:6.630",
          text: "مکتب حافظ غزل شماره یک استاد شهریار",
        },
        {
          start: "0:00:6.630",
          end: "0:00:12.000",
          text: "بخش دوم خاطرات تو",
        },
        {
          start: "0:00:12.000",
          end: "0:00:18.000",
          text: "ادامه ویدیو",
        },
      ],
    },
    {
      id: 3,
      uploadType: "link",
      name: "https://dls.loudmusic.ir/Music/1401/01/Baraye%20-Shervin%20Hajipour%20[loudmusic.ir]-320.mp3",
      date: "1400-08-20",
      type: ".wav",
      duration: "3:14",
      segments: [
        {
          start: "0:00:0.150",
          end: "0:00:7.980",
          text: "رحمان رحیم سلام عرض می کنم خدا قوت میگم به مهندس احمدی آذر",
        },
        {
          start: "0:00:8.000",
          end: "0:00:15.000",
          text: "بخش دوم آهنگ برای",
        },
        {
          start: "0:00:15.000",
          end: "0:00:22.000",
          text: "ادامه آهنگ",
        },
      ],
    },
    {
      id: 4,
      uploadType: "record",
      name: "پادکست رادیو راه - فصل دوم -قسمت ششم- راه سروش",
      date: "1400-08-19",
      type: ".mp3",
      duration: "1:28:18",
      segments: [
        {
          start: "0:00:1.530",
          end: "0:00:6.630",
          text: "مکتب حافظ غزل شماره یک استاد شهریار",
        },
        {
          start: "0:00:6.630",
          end: "0:00:12.000",
          text: "بخش دوم پادکست",
        },
        {
          start: "0:00:12.000",
          end: "0:00:18.000",
          text: "ادامه پادکست",
        },
        {
          start: "0:00:18.000",
          end: "0:00:24.000",
          text: "پایان بخش اول",
        },
      ],
    },
    {
      id: 5,
      uploadType: "link",
      name: "https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khosravi%20%7C%20Tanha%20Nazar%20(320).mp3",
      date: "1400-08-21",
      type: ".mp3",
      duration: "1:28:18",
      segments: [
        {
          start: "0:00:0.150",
          end: "0:00:7.980",
          text: "رحمان رحیم سلام عرض می کنم خدا قوت میگم به مهندس احمدی آذر",
        },
        {
          start: "0:00:8.000",
          end: "0:00:15.000",
          text: "بخش دوم فایل",
        },
        {
          start: "0:00:15.000",
          end: "0:00:22.000",
          text: "ادامه فایل",
        },
      ],
    },
    {
      id: 6,
      uploadType: "upload",
      name: "khaterate To",
      date: "1400-08-20",
      type: ".mp4",
      duration: "4:28",
      segments: [
        {
          start: "0:00:1.530",
          end: "0:00:6.630",
          text: "مکتب حافظ غزل شماره یک استاد شهریار",
        },
        {
          start: "0:00:6.630",
          end: "0:00:12.000",
          text: "بخش دوم خاطرات تو",
        },
        {
          start: "0:00:12.000",
          end: "0:00:18.000",
          text: "ادامه ویدیو",
        },
      ],
    },
    {
      id: 7,
      uploadType: "link",
      name: "https://dls.loudmusic.ir/Music/1401/01/Baraye%20-Shervin%20Hajipour%20[loudmusic.ir]-320.mp3",
      date: "1400-08-20",
      type: ".wav",
      duration: "4:14",
      segments: [
        {
          start: "0:00:0.150",
          end: "0:00:7.980",
          text: "رحمان رحیم سلام عرض می کنم خدا قوت میگم به مهندس احمدی آذر",
        },
        {
          start: "0:00:8.000",
          end: "0:00:15.000",
          text: "بخش دوم آهنگ برای",
        },
        {
          start: "0:00:15.000",
          end: "0:00:22.000",
          text: "ادامه آهنگ",
        },
      ],
    },
    {
      id: 8,
      uploadType: "record",
      name: "پادکست رادیو راه - فصل دوم -قسمت ششم- راه سروش",
      date: "1400-08-19",
      type: ".mp3",
      duration: "1:28:18",
      segments: [
        {
          start: "0:00:1.530",
          end: "0:00:6.630",
          text: "مکتب حافظ غزل شماره یک استاد شهریار",
        },
        {
          start: "0:00:6.630",
          end: "0:00:12.000",
          text: "بخش دوم پادکست",
        },
        {
          start: "0:00:12.000",
          end: "0:00:18.000",
          text: "ادامه پادکست",
        },
        {
          start: "0:00:18.000",
          end: "0:00:24.000",
          text: "پایان بخش اول",
        },
      ],
    },
    {
      id: 9,
      uploadType: "upload",
      name: "Random Song 1",
      date: "1400-08-22",
      type: ".mp3",
      duration: "2:45",
      segments: [
        {
          start: "0:00:0.000",
          end: "0:00:10.000",
          text: "شروع آهنگ تصادفی یک",
        },
        {
          start: "0:00:10.000",
          end: "0:00:20.000",
          text: "ادامه آهنگ تصادفی یک",
        },
        {
          start: "0:00:20.000",
          end: "0:00:30.000",
          text: "پایان بخش اول آهنگ",
        },
      ],
    },
    {
      id: 10,
      uploadType: "link",
      name: "https://example.com/music/random2.mp3",
      date: "1400-08-23",
      type: ".mp3",
      duration: "3:30",
      segments: [
        {
          start: "0:00:0.000",
          end: "0:00:15.000",
          text: "آغاز آهنگ دوم تصادفی",
        },
        {
          start: "0:00:15.000",
          end: "0:00:30.000",
          text: "ادامه آهنگ دوم تصادفی",
        },
        {
          start: "0:00:30.000",
          end: "0:00:45.000",
          text: "پایان بخش اول آهنگ دوم",
        },
      ],
    },
    {
      id: 11,
      uploadType: "record",
      name: "پادکست تصادفی",
      date: "1400-08-24",
      type: ".wav",
      duration: "0:58:00",
      segments: [
        {
          start: "0:00:0.000",
          end: "0:00:30.000",
          text: "شروع پادکست تصادفی",
        },
        {
          start: "0:00:30.000",
          end: "0:01:00.000",
          text: "ادامه پادکست تصادفی",
        },
        {
          start: "0:01:00.000",
          end: "0:01:30.000",
          text: "پایان بخش اول پادکست",
        },
      ],
    },
    {
      id: 12,
      uploadType: "upload",
      name: "Random Video",
      date: "1400-08-25",
      type: ".mp4",
      duration: "5:00",
      segments: [
        {
          start: "0:00:0.000",
          end: "0:00:20.000",
          text: "شروع ویدیو تصادفی",
        },
        {
          start: "0:00:20.000",
          end: "0:00:40.000",
          text: "ادامه ویدیو تصادفی",
        },
        {
          start: "0:00:40.000",
          end: "0:01:00.000",
          text: "پایان بخش اول ویدیو",
        },
      ],
    },
    {
      id: 13,
      uploadType: "link",
      name: "https://example.com/music/random5.mp3",
      date: "1400-08-26",
      type: ".mp3",
      duration: "4:10",
      segments: [
        {
          start: "0:00:0.000",
          end: "0:00:30.000",
          text: "آغاز آهنگ پنجم تصادفی",
        },
        {
          start: "0:00:30.000",
          end: "0:01:00.000",
          text: "ادامه آهنگ پنجم تصادفی",
        },
        {
          start: "0:01:00.000",
          end: "0:01:30.000",
          text: "پایان بخش اول آهنگ پنجم",
        },
      ],
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
