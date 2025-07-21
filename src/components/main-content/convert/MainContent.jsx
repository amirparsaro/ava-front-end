import "../../../App.css";
import MainTitle from "./MainTitle";
import Upload from "./Upload";
import Language from "../Language";
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