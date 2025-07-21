import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import MainTitle from "./components/main-content/convert/MainTitle";
import UserDropDown from "./components/main-content/UserDropDown";
import Upload from "./components/main-content/convert/Upload";
import Language from "./components/main-content/Language";
import ArchiveTitle from "./components/main-content/archive/ArchiveTitle";
import ArchiveGrid from "./components/main-content/archive/ArchiveGrid";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="main-content">
        <UserDropDown />
        <MainTitle />
        <Upload />
        <Language />
      </div>
      {/* <div className="main-content">
        <UserDropDown />
        <ArchiveTitle />
        <ArchiveGrid />
      </div> */}
    </div>
  );
}

export default App;
