import "../../../App.css";
import "../../../Archive.css";
import ArchiveTitle from "./ArchiveTitle";
import ArchiveGrid from "./ArchiveGrid";
import NavigationBox from "./NavigationBox";

const MainArchive = () => {
  return (
    <div>
      <ArchiveTitle />
      <ArchiveGrid />
      <NavigationBox />
    </div>
  );
};

export default MainArchive;