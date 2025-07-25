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
import { getFileExtension } from "../../utils/utils";
import { useEffect, useState } from "react";
import "../../App.css";
import "../../index.css";
import "../../Archive.css";
import { listRequests } from "../../service/api/listRequests.jsx";

const Archive = () => {
  return (
    <div className="flex justify-center w-full">
      <SideBar />
      <div className="main-content">
        <UserDropDown />

        <Routes>
          <Route path="/" element={<Navigate to="/convert/upload/record" />} />

          <Route path="/convert" element={<MainContent />}>
            <Route path="upload" element={<Upload />}>
              <Route path="record" element={<Record />} />
              <Route path="upload-file" element={<UploadFile />} />
              <Route path="link" element={<Link />} />
              <Route path="review" element={<TextReview />} />
            </Route>
          </Route>

          <Route path="/archive" element={<MainArchive />}>
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
