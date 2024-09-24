// src/components/Sections/Section3.js
import React from "react";
import mainIllustration from "../../assets/images/main-illust-03.png"; // Import your image

const Section3 = () => {
  return (
    <div
      id="section3"
      className="flex flex-col md:flex-row items-center justify-center bg-white h-auto md:h-[1090px] px-[20px] md:px-[229px] py-8 overflow-hidden" // Thêm overflow-hidden ở đây
    >
      {/* Left Side: Text */}
      <div className="flex flex-col justify-center w-full md:w-1/2 md:pr-10">
        <span className="-NMN- text-[#42c0cc] font-[PretendardVariable] text-[18.5px] md:text-[18.5px] font-[600] leading-[1.62] mb-2 text-left">
          라라비타 NMN 원료
        </span>

        <span className="text-[#222] font-[PretendardVariable] text-[40px] font-[600] leading-[1.21] text-left">
          Uthever® NMN이
          <br />
          SUPERCONDRIA® NMN으로
          <br />
          새롭게 태어났습니다.
        </span>

        <span className="-Uthever-NMN-Uthever-NMN- text-[#222] font-[PretendardVariable] text-[18px] md:text-[16px] leading-[1.67] text-left w-[554px]">
          라라비타는 Uthever® NMN 상표 사용 허가를 받은 최초의 한국
          브랜드입니다. Uthever® NMN은 라라비타의 SUPERCONDRIA® NMN으로 전
          세계에 판매되고 있습니다. Effepharm의 Uthever® NMN은 시장에서 순도,
          효능 및 품질에서 가장 뛰어난 원료로 인정 받고 있습니다. 99% 이상의
          고순도를 가지고 있는 것이 특징입니다.
        </span>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
        <img
          src={mainIllustration}
          alt="Main Illustration"
          className="object-contain w-[700px] h-[768px] mt-[32px] mx-[115px] px-[48px] pt-[51px] pb-[97px] h-auto" // Đảm bảo hình ảnh phản hồi
        />
      </div>
    </div>
  );
};

export default Section3;
