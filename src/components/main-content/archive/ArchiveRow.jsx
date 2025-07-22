import "../../../Archive.css";
import { useState } from "react";
import downloadIcon from "../../../assets/images/download-Icon.svg";
import downloadIconHover from "../../../assets/images/download-Icon-hover.svg";
import wordIcon from "../../../assets/images/Word-icon-grey.svg";
import wordIconHover from "../../../assets/images/Word-icon-hover.svg";
import copyIcon from "../../../assets/images/copy-Icon-grey.svg";
import copyIconHover from "../../../assets/images/copy-Icon-hover.svg";
import deleteIcon from "../../../assets/images/del-Btn-grey.svg";
import deleteIconHover from "../../../assets/images/del-Btn-hover.svg";
import recordBtn from "../../../assets/images/record-Btn.svg";
import linkBtn from "../../../assets/images/link-Btn.svg";
import uploadBtn from "../../../assets/images/upload-Btn.svg";
import { dateToPersianDigits, getFileExtension } from "../../../utils/utils";
import { toPersianDigits } from "../../../utils/utils";
import { timeToPersianDigits } from "../../../utils/utils";
import DeleteModal from "./DeleteModal";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import { Alert, Snackbar, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import FileSize from "./FileSize";

const ArchiveRow = ({ file, deleteFile, setSelectedIndex }) => {
  const [hoverDownload, setHoverDownload] = useState(false);
  const [hoverCopy, setHoverCopy] = useState(false);
  const [hoverDelete, setHoverDelete] = useState(false);
  const [hoverWord, setHoverWord] = useState(false);
  const [OpenState, setOpenState] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [sizeMB, setSizeMB] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = (file) => {
    fetch(file.url)
      .then((res) => res.blob())
      .then((blob) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        console.log(file.name);
        a.download = file.name;
        a.click();
        URL.revokeObjectURL(a.href);
      })
      .catch((err) => {
        console.error("Download failed:", err);
      });
  };

  async function getFileSize(url) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Range: "bytes=0-0",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentRange = response.headers.get("Content-Range");
      if (contentRange) {
        const totalBytes = contentRange.split("/")[1];
        const sizeInMB = Number(totalBytes) / (1024 * 1024);
        console.log(`File size: ${sizeInMB.toFixed(2)} MB`);
        return sizeInMB;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Fetch error:", error);
      return null;
    }
  }

  const handleMouseEnter = () => {
    setLoading(true);
    getFileSize(file.url).then((size) => {
      setSizeMB(size);
      setLoading(false);
    });
  };

  const handleMouseLeave = () => {
    setSizeMB(null);
    setLoading(false);
  };

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenAlert(false);
  };

  function handleUploadTypeIcon(uploadType) {
    switch (uploadType) {
      case "record":
        return recordBtn;
      case "link":
        return linkBtn;
      case "upload":
        return uploadBtn;
      default:
        return null;
    }
  }

  function formatText(file) {
    let segments = "";
    for (const segment of file.segments) {
      segments += segment.text + " ";
    }
    return segments;
  }

  function generateWordDoc() {
    const doc = new Document({
      sections: [
        {
          children: [new Paragraph(formatText(file))],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, file.name.split + ".docx");
    });
  }

  const time = file?.duration ?? "";
  const duration = timeToPersianDigits(time);

  return (
    <div className="archive-table-row-wrapper">
      <Snackbar
        onClick={(e) => {
          e.stopPropagation();
        }}
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          icon={<CheckIcon fontSize="inherit" />}
          sx={{ width: "100%" }}
          className="alert-text"
        >
          <p className="alert-text">متن مورد نظر شما کپی شد!</p>
        </Alert>
      </Snackbar>

      <div className="archive-table-row">
        <img src={handleUploadTypeIcon(file.uploadType)} alt="icon" />
        <p className="row-first">{file.name}</p>
        <p>{dateToPersianDigits(file.date)}</p>
        <p>{getFileExtension(file.name)}</p>
        <p>{duration}</p>

        <div className="tooltip">
          <img
            className="hoverable"
            src={hoverDownload ? downloadIconHover : downloadIcon}
            onMouseEnter={() => {
              setHoverDownload(true);
              handleMouseEnter();
            }}
            onMouseLeave={() => {
              setHoverDownload(false);
              handleMouseLeave();
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleDownload(file);
            }}
            alt="download"
          />
          <FileSize fileSize={sizeMB} loading={loading} />
        </div>

        <img
          className="hoverable"
          src={hoverWord ? wordIconHover : wordIcon}
          onMouseEnter={() => setHoverWord(true)}
          onMouseLeave={() => setHoverWord(false)}
          onClick={(e) => {
            e.stopPropagation();
            generateWordDoc();
          }}
          alt="word"
        />

        <img
          className="hoverable"
          src={hoverCopy ? copyIconHover : copyIcon}
          onMouseEnter={() => setHoverCopy(true)}
          onMouseLeave={() => setHoverCopy(false)}
          onClick={(e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(formatText(file));
            handleClickAlert();
          }}
          alt="copy"
        />

        <img
          className="hoverable"
          src={hoverDelete ? deleteIconHover : deleteIcon}
          onMouseEnter={() => setHoverDelete(true)}
          onMouseLeave={() => setHoverDelete(false)}
          onClick={(e) => {
            e.stopPropagation();
            setOpenState(true);
          }}
          alt="delete"
        />
      </div>

      <DeleteModal
        OpenState={OpenState}
        onClose={() => setOpenState(false)}
        onDelete={() => {
          setSelectedIndex(null);
          deleteFile(file.id);
          setOpenState(false);
        }}
      />
    </div>
  );
};

export default ArchiveRow;
