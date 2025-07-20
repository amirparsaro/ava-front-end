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

const ArchiveRow = ({ file }) => {
  const [hoverDownload, setHoverDownload] = useState(false);
  const [hoverCopy, setHoverCopy] = useState(false);
  const [hoverDelete, setHoverDelete] = useState(false);
  const [hoverWord, setHoverWord] = useState(false);

  return (
    <div className="archive-table-row-wrapper">
      <div className="archive-table-row">
        <img src={file.icon} alt="icon" />
        <p className="row-first">{file.name}</p>
        <p>{file.date}</p>
        <p>{file.type}</p>
        <p>{file.duration}</p>
        <img className="hoverable"
          src={hoverDownload ? downloadIconHover : downloadIcon}
          onMouseEnter={() => setHoverDownload(true)}
          onMouseLeave={() => setHoverDownload(false)}
          alt="download"
        />
        <img className="hoverable"
          src={hoverWord ? wordIconHover : wordIcon}
          onMouseEnter={() => setHoverWord(true)}
          onMouseLeave={() => setHoverWord(false)}
          alt="word"
        />
        <img className="hoverable"
          src={hoverCopy ? copyIconHover : copyIcon}
          onMouseEnter={() => setHoverCopy(true)}
          onMouseLeave={() => setHoverCopy(false)}
          alt="copy"
        />
        <img className="hoverable"
          src={hoverDelete ? deleteIconHover : deleteIcon}
          onMouseEnter={() => setHoverDelete(true)}
          onMouseLeave={() => setHoverDelete(false)}
          alt="delete"
        />
      </div>
    </div>
  );
};

export default ArchiveRow;
