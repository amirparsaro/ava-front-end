import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import MainTitle from "./components/main-content/convert/MainTitle";
import UserDropDown from "./components/main-content/UserDropDown";
import Upload from "./components/main-content/convert/Upload";
import Language from "./components/main-content/Language";
import ArchiveTitle from "./components/main-content/archive/ArchiveTitle";
import ArchiveGrid from "./components/main-content/archive/ArchiveGrid";
import NavigationBox from "./components/main-content/archive/NavigationBox";
import UploadFile from "./components/main-content/convert/UploadFile";
import Record from "./components/main-content/convert/Record";
import Link from "./components/main-content/convert/Link";
import TextReview from "./components/main-content/convert/TextReview";
import { Routes, Route, Navigate } from "react-router-dom";
import TimedText from "./components/main-content/convert/TimedText";
import SimpleText from "./components/main-content/convert/SimpleText";
import Archive from "./components/main-content/Archive";

function App() {
  return (
    <div className="App">
      <Archive />
    </div>
  );
}

export default App;
