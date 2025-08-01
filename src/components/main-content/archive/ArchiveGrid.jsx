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
import { useEffect } from "react";
import { listRequests } from "../../../service/api/listRequests";

const ArchiveGrid = () => {
  const [files, setFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedFiles = files.slice(startIndex, endIndex);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [boxPosition, setBoxPosition] = useState("bottom");
  const [boxHeightCount, setBoxHeightCount] = useState(5);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const fetchedFiles = await listRequests();
        if (fetchedFiles) {
          setFiles(fetchedFiles);
        }
      } catch (error) {
        let file = {
          serverId: 0,
          id: 0,
          uploadType: "link",
          name: "تست",
          url: "https://i.ganjoor.net/a2/41417.mp3",
          date: "2025-07-27",
          duration: "00:00:07",
          segments: [],
        };

        let segment = {
          start: "00:00:00",
          end: "00:00:07",
          text: "تست",
        };

        file.segments[0] = segment;
        const fetchedFiles = [file];
        setFiles(fetchedFiles);
      }
    }

    fetchFiles();
  }, []);

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
      } else if (index === 4) {
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
                    <ArchiveRow
                      file={file}
                      deleteFile={deleteFile}
                      setSelectedIndex={setSelectedIndex}
                    />
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
                  <ArchiveRow
                    file={file}
                    deleteFile={deleteFile}
                    setSelectedIndex={setSelectedIndex}
                  />
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
