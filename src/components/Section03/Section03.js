// src/components/Sections/Section3.js
import React from "react";
import mainIllustration from "../../assets/images/main-illust-03.png"; // Import your image

const Section3 = () => {
  return (
    <div
      id="section3"
      className="flex flex-col-reverse lg:flex-row items-center justify-center bg-white h-full lg:h-[1090px] px-5 lg:px-[229px] py-8"
    >
      {/* Left Side: Text */}
      <div className="flex flex-col justify-center w-full pr-0 lg:w-1/2 lg:pr-10">
        <span className="-NMN- text-[#42c0cc] font-[PretendardVariable] text-[18.5px] font-[600] leading-[1.62] mb-2 text-left">
          라라비타 NMN 원료
        </span>

        <span className="text-[#222] font-[PretendardVariable] text-[40px] font-[600] leading-[1.21] text-left">
          Uthever® NMN이
          <br />
          SUPERCONDRIA® NMN으로
          <br />
          새롭게 태어났습니다.
        </span>

        <span className="-Uthever-NMN-Uthever-NMN- text-[#222] font-[PretendardVariable] text-[18px] leading-[1.67] text-left max-w-[554px] mt-8">
          라라비타는 Uthever® NMN 상표 사용 허가를 받은 최초의 한국
          브랜드입니다. Uthever® NMN은 라라비타의 SUPERCONDRIA® NMN으로 전
          세계에 판매되고 있습니다. Effepharm의 Uthever® NMN은 시장에서 순도,
          효능 및 품질에서 가장 뛰어난 원료로 인정 받고 있습니다. 99% 이상의
          고순도를 가지고 있는 것이 특징입니다.
        </span>
      </div>

      {/* Right Side: Image */}
      <div className="w-1/2 flex justify-center mt-0">
        <img
          src={mainIllustration}
          alt="Main Illustration"
          className="object-contain lg:w-[700px] lg:h-[768px] h-[200px] w-[400px]"
        />
      </div>
    </div>
  );
};

export default Section3;
