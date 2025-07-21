import "../../../Archive.css";
import leftArrowIcon from "../../../assets/images/left-arrow-Icon.svg";
import rightArrowIcon from "../../../assets/images/right-arrow-Icon.svg";
import { toPersianDigits } from "../../../utils/utils";

const NavigationBox = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  const maxPagesToShow = 5;
  const startPage = Math.max(currentPage - 2, 1);
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center h-[25px] mt-[50px] ">
      <div className="w-1/4 flex justify-center items-center h-full gap-2 number-text">
        <img
          src={rightArrowIcon}
          alt="right-arrow-icon"
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          className="cursor-pointer"
        />

        {startPage > 1 && <p className="exclude-pointer">...</p>}

        {pageNumbers.map((page) => (
          <p
            key={page}
            onClick={() => onPageChange(page)}
            className={`cursor-pointer ${page === currentPage ? "bg-[#07B49B] rounded-full text-white px-3 py-1" : " px-3 py-1"}`}
          >
            {toPersianDigits(page.toString())}
          </p>
        ))}

        {endPage < totalPages && <p className="exclude-pointer">...</p>}

        <img
          src={leftArrowIcon}
          alt="left-arrow-icon"
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NavigationBox;