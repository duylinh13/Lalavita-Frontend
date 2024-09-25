import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import mũi tên từ lucide-react

// Import các ảnh trực tiếp từ hệ thống file
import Image1 from "../../assets/images/main-illust-05-1.png";
import Image2 from "../../assets/images/main-illust-05-2.png";
import Image3 from "../../assets/images/main-illust-05-3.png";
import Image4 from "../../assets/images/main-illust-05-4.png";
import Image5 from "../../assets/images/main-illust-05-5.png";

// Cấu trúc dữ liệu cho các ảnh và mô tả
const items = [
  {
    image: Image1, // Sử dụng ảnh đã import
    title: "노하우 및 세포 힐링화",
    description:
      "NAD+는 신체 기능을 유지하며 수많은 세포에서 중요한 역할을 합니다. NMN 섭취를 통해 세포에서의 NAD+ 수치를 높이고 신체 기능 향상과 노화를 억제합니다.",
  },
  {
    image: Image2, // Sử dụng ảnh đã import
    title: "활성 산소 중의 미토콘드리아 생성 및 생체 에너지 보호",
    description:
      "NMN은 미토콘드리아 산화 스트레스를 약화시키고 노화된 뇌 미세혈관 내피 세포에서 미토콘드리아 생체 에너지를 향상시킵니다.",
  },
  {
    image: Image3, // Sử dụng ảnh đã import
    title: "혈액순환 촉진 및 심장 기능 개선 기능",
    description:
      "연구 결과, 신체 국소에 빈혈을 예방하는 효과가 있다고 합니다. SIRT1을 활성화함으로써 심장을 보호하고 혈액순환을 촉진시킵니다.",
  },
  {
    image: Image4, // Sử dụng ảnh đã import
    title: "세포 에너지 증가",
    description:
      "미토콘드리아 ATP 생산과 막 전위에는 보편적인 보조인자 니코틴아미드 아데닌 뉴클레오티드(NAD)가 필요합니다. NMN은 세포에서 NAD로 전환하여 세포 에너지를 증가시킵니다.",
  },
  {
    image: Image5, // Sử dụng ảnh đã import
    title: "세포 에너지 증가",
    description:
      "미토콘드리아 ATP 생산과 막 전위에는 보편적인 보조인자 니코틴아미드 아데닌 뉴클레오티드(NAD)가 필요합니다. NMN은 세포에서 NAD로 전환하여 세포 에너지를 증가시킵니다.s",
  },
];

const Section5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  // Lấy 4 ảnh liền kề, đảm bảo đủ 4 ảnh hiển thị trên màn hình
  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % items.length;
      visibleItems.push(items[index]);
    }
    return visibleItems;
  };

  return (
    <div
      id="section5"
      className="h-[1080px] w-[1920px] flex flex-col justify-center items-center bg-white mt-8 px-8"
    >
      {/* Bố cục Flex để text và nút chuyển đổi ngang hàng */}
      <div className="w-full flex justify-between items-center mb-8 mt-[250px]">
        {/* Phần bên trái: Text mô tả */}
        <div className="text-start ml-[277px]">
          <span className="block text-[#42c0cc] text-[18.5px] font-semibold mb-3">
            NMN의 효능, 효과
          </span>
          <span className="block text-[#222] text-[40px] font-semibold leading-[1.21]">
            NMN의 효능과 효과를 <br /> 한 눈에 살펴보세요.
          </span>
        </div>

        {/* Phần bên phải: Nút chuyển đổi */}
        <div className="flex justify-end items-center space-x-4 mr-[277px]">
          <button
            onClick={prevSlide}
            className="bg-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white p-2 rounded-full shadow-md"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Hiển thị các ảnh và phần mô tả */}
      <div
        className="flex w-full h-[800px] justify-center items-center overflow-hidden mx-auto"
        style={{ maxWidth: "1366px" }}
      >
        {getVisibleItems().map((item, index) => (
          <div
            key={index}
            className="w-[320px] flex-shrink-0 flex flex-col items-center justify-center mx-2"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[228px] h-[228px] object-cover"
            />
            {/* Text title dưới ảnh */}
            <span
              className="text-[#222] text-[24px] font-semibold leading-[1.25] mt-8"
              style={{
                width: "300px", // Chỉnh lại width để phù hợp hơn
                margin: "33px auto 19px auto", // Dùng auto để căn giữa
              }}
            >
              {item.title}
            </span>
            {/* Mô tả chi tiết */}
            <span
              className="text-[#999] text-[16px] leading-[1.5]"
              style={{
                width: "300px", // Chỉnh lại width để thẳng hàng với title
                margin: "0 auto 50px auto", // Dùng auto để căn giữa và bỏ margin trên
              }}
            >
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
