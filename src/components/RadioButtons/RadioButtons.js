// RadioButtons.js
import React from "react";

const RadioButtons = ({ activeIndex, setActiveIndex }) => {
  const totalPages = 7; // Tổng số nút radio

  return (
    <div className="fixed right-[80px] top-[50%] transform -translate-y-1/2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)} // Cập nhật trạng thái khi click
          className="cursor-pointer mb-2"
        >
          <div
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-300"
            } border border-gray-500`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;
