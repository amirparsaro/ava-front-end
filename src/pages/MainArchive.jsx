import "../App.css";
import "../Archive.css";
import ArchiveTitle from "../components/main-content/archive/ArchiveTitle";
import ArchiveGrid from "../components/main-content/archive/ArchiveGrid";
import NavigationBox from "../components/main-content/archive/NavigationBox";

const MainArchive = ({ filePack }) => {
  return (
    <div>
      <ArchiveTitle />
      <ArchiveGrid filePack={filePack} />
      <NavigationBox />
    </div>
  );
};

export default MainArchive;
