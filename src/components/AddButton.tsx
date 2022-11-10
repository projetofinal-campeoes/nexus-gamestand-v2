import React from "react";
import { FaPlus } from "react-icons/fa";

const AddButton = () => {
  return (
    <button className="flex rounded-[10px] w-[100%%] h-[100%] bg-[#131A39] text-[#ffffff] text-[20px] font-bold p-4">
      <FaPlus />
    </button>
  );
};

export default AddButton;
