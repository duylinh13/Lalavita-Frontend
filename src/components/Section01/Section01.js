import React, { useState } from "react";
import mainIllust from "../../assets/images/main-illust-01.png"; // Main image
import smallLetter1 from "../../assets/images/main-letter-1.png"; // Small letter images
import smallLetter2 from "../../assets/images/main-letter-2.png";
import smallLetter3 from "../../assets/images/main-letter-3.png";
import smallLetter4 from "../../assets/images/main-letter-4.png";
import confirmLogo1 from "../../assets/images/main-confirm-logo-1.png"; // Confirmation logos
import confirmLogo2 from "../../assets/images/main-confirm-logo-2.png";
import confirmLogo3 from "../../assets/images/main-confirm-logo-3.png";
import confirmLogo4 from "../../assets/images/main-confirm-logo-4.png";
import confirmLogo5 from "../../assets/images/main-confirm-logo-5.png";
import arrow from "../../assets/images/bk-down-arrow.png";
import RadioButtons from "../../components/RadioButtons/RadioButtons";

const Section1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="section1"
      className="lg:w-[1920px] w-full h-full lg:h-[970px] bg-white lg:pl-[160px] flex flex-col-reverse lg:flex-row"
    >
      {/* Left side: 60% for text content */}
      <div className="w-full lg:w-[40%] flex flex-col justify-start">
        {/* Section title */}
        <div className="lg:mt-20 mt-0 mr-[56px] mb-6 lg:mb-[39px] ml-5 lg:ml-[49px]">
          <span className="text-xl font-semibold text-[#42c0cc]">
            왜 라라비타 NMN일까요?
          </span>
        </div>

        {/* Main heading */}
        <div className="mb-6 lg:mb-[39px] ml-5 lg:ml-[48px]">
          <span className="lg:text-[55.5px] font-semibold text-[#222] lg:leading-[1.31] text-4xl">
            노화를 늦추고
            <br />
            건강을 지키는
            <br />
            최적의 방법
          </span>
        </div>

        {/* Description */}
        <div className="ml-5 lg:ml-[49px] lg:mr-[214px] mb-6 lg:mb-[49px]">
          <span className="text-sm lg:text-xl text-[#222]">
            라라비타의 SUPERCONDRIA ®NMN은 전세계적으로 인증 받은
            <br />
            Uthever® NMN로 만든 고순도 제품입니다.
          </span>
        </div>

        {/* First set of small images */}
        <div className="flex gap-4 ml-5 lg:ml-[49px] mb-6 lg:mb-10">
          <img src={smallLetter1} alt="Small 1" className="w-[48px] h-[72px]" />
          <img src={smallLetter2} alt="Small 2" className="w-[63px] h-[74px]" />
          <img src={smallLetter3} alt="Small 3" className="w-[78px] h-[56px]" />
          <img src={smallLetter4} alt="Small 4" className="w-[65px] h-[64px]" />
        </div>

        {/* Second set of small images */}
        <div className="flex gap-4 ml-5 lg:ml-10">
          <img src={confirmLogo1} alt="Logo 1" className="w-[42px] h-[42px]" />
          <img src={confirmLogo2} alt="Logo 2" className="w-[42px] h-[42px]" />
          <img src={confirmLogo3} alt="Logo 3" className="w-[50px] h-[41px]" />
          <img
            src={confirmLogo4}
            alt="Logo 4"
            className="w-[60px] h-[14px] mt-4"
          />
          <img
            src={confirmLogo5}
            alt="Logo 5"
            className="w-[80px] h-[15px] mt-4"
          />
        </div>

        <div className="lg:pt-40 py-10 bg-white lg:pl-6">
          <img
            src={arrow} // Đường dẫn đến ảnh mũi tên
            alt="Down Arrow"
            className="w-[49px] h-[49px] object-contain"
          />
        </div>
      </div>

      {/* Right side: 40% for the main image */}
      <div className="w-[60%] flex justify-start items-start pl-0">
        <img
          src={mainIllust}
          alt="Main Illustration"
          className="lg:w-[700px] lg:h-[768px] h-[200px] w-[400px] object-contain"
          style={{
            margin: "0", // Xóa margin nếu cần
            padding: "0", // Xóa padding nếu cần
          }}
        />
      </div>

      <RadioButtons activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </section>
  );
};

export default Section1;
