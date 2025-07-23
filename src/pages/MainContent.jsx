import "../App.css";
import MainTitle from "../components/main-content/convert/MainTitle";
import Upload from "../components/main-content/convert/Upload";
import Language from "../components/main-content/Language";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <div>
      <MainTitle />
      <Outlet />
      <Language />
    </div>
  );
};

export default MainContent;