import "../../App.css";
import UserIcon from "../../assets/images/user-Icon.svg";
import DropIcon from "../../assets/images/drop-Icon.svg";

const UserDropDown = () => {
  return (
    <div class="header">
      <button className="user-button">
        <div class="user-title">
          <img src={UserIcon} alt="user-icon" class="user-icon"></img>
          <p>مهمان</p>
          <img src={DropIcon} alt="drop-icon" class="drop-icon"></img>
        </div>
      </button>
    </div>
  );
};

export default UserDropDown;
