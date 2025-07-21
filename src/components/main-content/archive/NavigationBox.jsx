import "../../../Archive.css";
import leftArrowIcon from "../../../assets/images/left-arrow-Icon.svg";
import rightArrowIcon from "../../../assets/images/right-arrow-Icon.svg";
import { toPersianDigits } from "../../../utilities/utils";

const NavigationBox = () => {
  return (
    <div className="flex justify-center items-center h-[25px] mt-[50px]">
      <div className="w-1/4 flex justify-center items-center h-full gap-3 number-text">
        <img src={rightArrowIcon} alt="right-arrow-icon"></img>
        <p>{toPersianDigits("1")}</p>
        <p className="exclude-pointer">...</p>
        <p className="bg-[#07B49B] rounded-full text-white p-1">{toPersianDigits("123")}</p>
        <p>{toPersianDigits("124")}</p>
        <p>{toPersianDigits("125")}</p>
        <p>{toPersianDigits("126")}</p>
        <p className="exclude-pointer">...</p>
        <p>{toPersianDigits("356")}</p>
        <img src={leftArrowIcon} alt="left-arrow-icon"></img>
      </div>
    </div>
  );
};

export default NavigationBox;
