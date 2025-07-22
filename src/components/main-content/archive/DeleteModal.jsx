import { TfiAlert } from "react-icons/tfi";
import "../../../Archive.css";

const DeleteModal = ({ OpenState, onClose, onDelete }) => {
  return (
    OpenState && (
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed flex justify-center items-center z-[100] left-0 top-0 w-full h-full bg-black bg-opacity-40 pointer-events-auto inset-0"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white flex justify-center items-center flex-col p-4 rounded-lg w-1/4 h-1/4 pointer-events-auto gap-4"
        >
          <div style={{ width: 50, height: 50 }}>
            <TfiAlert size={50} className="text-[#e63754]" />
          </div>
          <p className="text-[#545454]">آیا می‌خواهید این فایل را حذف کنید؟</p>
          <div className="flex flex justify-center items-center flex-row gap-4">
            <button
              onClick={onClose}
              className="bg-[#F2F2F2] hover:bg-[#f7f7f7] transition-all duration-300 ease-in-out text-[#545454] px-4 py-2 rounded-lg w-100"
            >
              انصراف
            </button>
            <button
              onClick={onDelete}
              className="bg-[#e63754] hover:bg-[#fa526f] transition-all duration-300 ease-in-out text-[#fff] px-4 py-2 rounded-lg w-100"
            >
              حذف
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteModal;
