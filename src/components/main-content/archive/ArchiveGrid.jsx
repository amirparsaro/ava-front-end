import "../../../Archive.css";
import { dateToPersianDigits } from "../../../utilities/utils";
import { toPersianDigits } from "../../../utilities/utils";
import { useState } from "react";
import recordBtn from "../../../assets/images/record-Btn.svg";
import linkBtn from "../../../assets/images/link-Btn.svg";
import uploadBtn from "../../../assets/images/upload-Btn.svg";
import ArchiveRow from "./ArchiveRow";
import BoxComponent from "./BoxComponent";

const files = [
  {
    color: "#ff1654",
    icon: linkBtn,
    name: "https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khosravi%20%7C%20Tanha%20Nazar%20(320).mp3",
    date: dateToPersianDigits("1400-08-21"),
    type: ".mp3",
    duration: toPersianDigits("4:29"),
  },
  {
    color: "#118ad3",
    icon: uploadBtn,
    name: "khaterate To",
    date: dateToPersianDigits("1400-08-20"),
    type: ".mp4",
    duration: toPersianDigits("4:28"),
  },
  {
    color: "#ff1654",
    icon: linkBtn,
    name: "https://dls.loudmusic.ir/Music/1401/01/Baraye%20-Shervin%20Hajipour%20[loudmusic.ir]-320.mp3",
    date: dateToPersianDigits("1400-08-20"),
    type: ".wav",
    duration: toPersianDigits("3:14"),
  },
  {
    color: "#00b5a0",
    icon: recordBtn,
    name: "پادکست رادیو راه - فصل دوم -قسمت ششم- راه سروش",
    date: dateToPersianDigits("1400-08-19"),
    type: ".mp3",
    duration: toPersianDigits("1:28:18"),
  },
  {
    color: "#ff1654",
    icon: linkBtn,
    name: "https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khosravi%20%7C%20Tanha%20Nazar%20(320).mp3",
    date: dateToPersianDigits("1400-08-21"),
    type: ".mp3",
    duration: toPersianDigits("1:28:18"),
  },
  {
    color: "#118ad3",
    icon: uploadBtn,
    name: "khaterate To",
    date: dateToPersianDigits("1400-08-20"),
    type: ".mp4",
    duration: toPersianDigits("4:28"),
  },
  {
    color: "#ff1654",
    icon: linkBtn,
    name: "https://dls.loudmusic.ir/Music/1401/01/Baraye%20-Shervin%20Hajipour%20[loudmusic.ir]-320.mp3",
    date: dateToPersianDigits("1400-08-20"),
    type: ".wav",
    duration: toPersianDigits("4:14"),
  },
  {
    color: "#00b5a0",
    icon: recordBtn,
    name: "پادکست رادیو راه - فصل دوم -قسمت ششم- راه سروش",
    date: dateToPersianDigits("1400-08-19"),
    type: ".mp3",
    duration: toPersianDigits("1:28:18"),
  },
];

const ArchiveGrid = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [boxPosition, setBoxPosition] = useState("bottom");
  const [boxHeightCount, setBoxHeightCount] = useState(5);

  const onClickItem = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);

      if (index <= 2) {
        setBoxPosition("bottom");
        setBoxHeightCount(5);
      } else if (index >= 5) {
        setBoxPosition("top");
        setBoxHeightCount(5);
      } else if (index == 4) {
        setBoxPosition("top");
        setBoxHeightCount(4);
      } else {
        setBoxPosition("bottom");
        setBoxHeightCount(4);
      }
    }
  };

  const shouldRender = (index) => {
    if (selectedIndex === null) return true;

    if (boxPosition === "bottom") {
      if (index === selectedIndex) return true;
      if (index > selectedIndex && index <= selectedIndex + boxHeightCount)
        return false;
      return true;
    }

    if (boxPosition === "top") {
      if (index === selectedIndex) return true;
      if (index < selectedIndex && index >= selectedIndex - boxHeightCount)
        return false;
      return true;
    }

    return true;
  };

  return (
    <div className="archive-table-wrapper">
      <div className="archive-table">
        <div className="archive-table-header-wrapper">
          <div className="archive-table-header">
            <img></img>
            <p>نام فایل</p>
            <p>تاریخ بارگذاری</p>
            <p>نوع فایل</p>
            <p>مدت زمان</p>
            <img></img>
            <img></img>
            <img></img>
            <img></img>
          </div>
        </div>

        {files.map((file, index) =>
          shouldRender(index) ? (
            <div key={index}>
              {index === selectedIndex ? (
                <div
                  className="rounded-xl border-2 overflow-hidden"
                  style={{ borderColor: file.color }}
                >
                  {boxPosition === "top" && (
                    <BoxComponent
                      boxHeightCount={boxHeightCount}
                      color={file.color}
                    />
                  )}

                  <div onClick={() => onClickItem(index)}>
                    <ArchiveRow file={file} />
                  </div>

                  {boxPosition === "bottom" && (
                    <BoxComponent
                      boxHeightCount={boxHeightCount}
                      color={file.color}
                    />
                  )}
                </div>
              ) : (
                <div
                  className="transition-all duration-300"
                  onClick={() => onClickItem(index)}
                >
                  <ArchiveRow file={file} />
                </div>
              )}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ArchiveGrid;
