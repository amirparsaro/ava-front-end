import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import MainTitle from "./components/main-content/convert/MainTitle";
import UserDropDown from "./components/main-content/UserDropDown";
import Upload from "./components/main-content/convert/Upload";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="main-content">
        <UserDropDown />
        <MainTitle />
        <Upload />
      </div>
    </div>
  );
}

export default App;
