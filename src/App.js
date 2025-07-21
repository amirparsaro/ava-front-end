import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import MainTitle from "./components/main-content/convert/MainTitle";
import UserDropDown from "./components/main-content/UserDropDown";
import Upload from "./components/main-content/convert/Upload";
import Language from "./components/main-content/Language";
import ArchiveTitle from "./components/main-content/archive/ArchiveTitle";
import ArchiveGrid from "./components/main-content/archive/ArchiveGrid";
import NavigationBox from "./components/main-content/archive/NavigationBox";
import MainContent from "./components/main-content/convert/MainContent";
import MainArchive from "./components/main-content/archive/MainArchive";
import UploadFile from "./components/main-content/convert/UploadFile";
import Record from "./components/main-content/convert/Record";
import Link from "./components/main-content/convert/Link";
import TextReview from "./components/main-content/convert/TextReview";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
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

          <Route path="/archive" element={<MainArchive />} />
        </Routes>
      </div>
      {/* <div className="main-content">
        <UserDropDown />
        <MainTitle />
        <Upload />
        <Language />
      </div>

      <div className="main-content">
        <UserDropDown />
        <ArchiveTitle />
        <ArchiveGrid />
        <NavigationBox />
      </div> */}
    </div>
  );
}

export default App;
