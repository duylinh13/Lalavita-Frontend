// src/components/Sections/Section6.js
import React, { useState } from "react";

import image6 from "../../assets/images/image06.png";

const Section6 = () => {
  // State to manage the active button
  const [activeIndex, setActiveIndex] = useState(0); // Start with the first index

  // List of items with corresponding content for the boxes
  const items = [
    {
      title: "NMN ",
      description:
        "남자의 관절, 연골 건강에 도움을 줄 수 있는 제품입니다. 관절&연골 건강기능성 제품",
      image: image6,
    },
    {
      title: "트렌스-레스베라트롤",
      description:
        "남자의 관절, 연골 건강에 도움을 줄 수 있는 제품입니다. 관절&연골 건강기능성 제품",
      image: image6,
    },
    {
      title: "비타민 K2+D3",
      description:
        "남자의 관절, 연골 건강에 도움을 줄 수 있는 제품입니다. 관절&연골 건강기능성 제품",
      image: image6,
    },
    {
      title: "아피제닌",
      description:
        "남자의 관절, 연골 건강에 도움을 줄 수 있는 제품입니다. 관절&연골 건강기능성 제품",
      image: image6,
    },
    {
      title: "피세틴",
      description:
        "남자의 관절, 연골 건강에 도움을 줄 수 있는 제품입니다. 관절&연골 건강기능성 제품",
      image: image6,
    },
    {
      title: "케르세틴",
      description:
        "남자의 관절, 연골 건강에 도움을 줄 수 있는 제품입니다. 관절&연골 건강기능성 제품",
      image: image6,
    },
    {
      title: "CoQ10",
      description:
        "남자의 관절, 연골 건강에 도움을 줄 수 있는 제품입니다. 관절&연골 건강기능성 제품.",
      image: image6,
    },
    {
      title: "Tmg",
      description: "TMG may support healthy methylation.",
      image: image6,
    },
    {
      title: "Lutein",
      description: "Lutein is important for eye health.",
      image: image6,
    },
    {
      title: "MSM",
      description: "MSM may support joint health and mobility.",
      image: image6,
    },
  ];

  return (
    <div
      id="section6"
      className="h-[1080px] flex flex-col items-center justify-center bg-[#f7d6e9] pt-[100px]"
    >
      <span className="w-[300px] h-[36px] font-PretendardVariable text-[40px] font-semibold leading-[1.21] text-center text-[#222] mb-[47px]">
        라라비타 스토어
      </span>

      {/* Horizontal List */}
      <div className="flex space-x-[40px] whitespace-nowrap overflow-x-auto">
        {items.map((item, index) => (
          <button
            key={index}
            className={`min-w-[79px] h-[38px] rounded-[19px] flex items-center justify-center ${
              activeIndex === index
                ? "bg-[#f2599c] text-[#222222] font-bold" // Bold for active item
                : "bg-[#f7d6e9] text-[#222222] font-normal" // Normal for inactive items
            } transition duration-200`}
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Flex Boxes */}
      <div className="flex w-full justify-center mt-12 space-x-4">
        {Array(3)
          .fill(null)
          .map((_, boxIndex) => (
            <div
              key={boxIndex}
              className="w-[400px] h-[486px] bg-white shadow-lg rounded-lg flex flex-col items-center p-4"
            >
              <img
                src={items[activeIndex].image}
                alt={items[activeIndex].title}
                className="w-[400px] h-[286px] mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">
                {items[activeIndex].title}
              </h2>
              <p className="text-gray-500 mb-4">
                {items[activeIndex].description}
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4 border-t w-[400px]">
                <span className="text-gray-400 line-through mt-4">
                  67,000원
                </span>
                <span className="text-lg font-bold text-[#222222] mt-4">
                  56,900원
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Section6;
