import "../../../Archive.css";
import { dateToPersianDigits } from "../../../utils/utils";
import { toPersianDigits } from "../../../utils/utils";
import { useState } from "react";
import recordBtn from "../../../assets/images/record-Btn.svg";
import linkBtn from "../../../assets/images/link-Btn.svg";
import uploadBtn from "../../../assets/images/upload-Btn.svg";
import ArchiveRow from "./ArchiveRow";
import BoxComponent from "./BoxComponent";
import NavigationBox from "./NavigationBox";

const ArchiveGrid = ({ filePack }) => {
  const { files = [], addFile, deleteFile, updateFile, getFile } = filePack;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedFiles = files.slice(startIndex, endIndex);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [boxPosition, setBoxPosition] = useState("bottom");
  const [boxHeightCount, setBoxHeightCount] = useState(5);

  function handleUploadTypeColor(uploadType) {
    switch (uploadType) {
      case "record":
        return "#00b5a0";
      case "link":
        return "#ff1654";
      case "upload":
        return "#118ad3";
      default:
        return null;
    }
  }

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

        {paginatedFiles.map((file, index) => {
          const globalIndex = startIndex + index;

          return shouldRender(index) ? (
            <div key={globalIndex}>
              {index === selectedIndex ? (
                <div
                  className="rounded-xl border-2 overflow-hidden"
                  style={{
                    borderColor: handleUploadTypeColor(file.uploadType),
                  }}
                >
                  {boxPosition === "top" && (
                    <BoxComponent
                      file={file}
                      boxHeightCount={boxHeightCount}
                      color={handleUploadTypeColor(file.uploadType)}
                    />
                  )}

                  <div onClick={() => onClickItem(index)}>
                    <ArchiveRow file={file} deleteFile={deleteFile} setSelectedIndex={setSelectedIndex} />
                  </div>

                  {boxPosition === "bottom" && (
                    <BoxComponent
                      file={file}
                      boxHeightCount={boxHeightCount}
                      color={handleUploadTypeColor(file.uploadType)}
                    />
                  )}
                </div>
              ) : (
                <div
                  className="transition-all duration-300"
                  onClick={() => onClickItem(index)}
                >
                  <ArchiveRow file={file} deleteFile={deleteFile} setSelectedIndex={setSelectedIndex} />
                </div>
              )}
            </div>
          ) : null;
        })}
      </div>

      <NavigationBox
        currentPage={currentPage}
        totalPages={Math.ceil(files.length / itemsPerPage)}
        onPageChange={(page) => {
          setCurrentPage(page);
          setSelectedIndex(null);
        }}
      />
    </div>
  );
};

export default ArchiveGrid;
