import React from "react";
// Importing images
import ImageLeft from "../../assets/images/main-illust-04-1.png";
import ImageRight from "../../assets/images/main-illust-04-2.png";

const Section4 = () => {
  return (
    <div id="section4" className="min-h-[1080px] flex flex-col md:flex-row">
      {/* Left side (Yellow) */}
      <div className="md:w-1/2 w-full bg-[#fed614] flex flex-col items-center justify-center p-6 mt-[62px]">
        {/* Text */}
        <span
          className="text-[#42c0cc] text-center font-semibold"
          style={{
            fontFamily: "PretendardVariable",
            fontSize: "18.5px",
            lineHeight: "4.3",
          }}
        >
          Advantages 1
        </span>
        <span
          className="text-center text-[#222] font-semibold mb-8 mt-4 w-[350px]"
          style={{
            fontFamily: "PretendardVariable",
            fontSize: "40.5px",
            lineHeight: "1.17",
          }}
        >
          99% 이상 고순도의 Uthever® NMN
        </span>

        <span
          className="text-center text-[#222] mb-[47px] w-[457px]"
          style={{
            fontFamily: "PretendardVariable",
            fontSize: "18px",
            lineHeight: "1.67",
          }}
        >
          1. 가장 높은 고순도 NMN.
          <br />
          2. 세계 최대 시험인증기관 인터텍 인증 획득.
        </span>

        {/* Image */}
        <img
          src={ImageLeft}
          alt="Illustration Left"
          className="w-[371px] h-[218px] md:w-[451px] md:h-[450px] object-contain"
        />
      </div>

      {/* Right side (White) */}
      <div className="md:w-1/2 w-full bg-white flex flex-col items-center justify-center p-6 mt-[62px]">
        {/* Text */}
        <span
          className="text-[#42c0cc] text-center font-semibold"
          style={{
            fontFamily: "PretendardVariable",
            fontSize: "18.5px",
            lineHeight: "4.3",
          }}
        >
          Advantages 2
        </span>
        <span
          className="text-center text-[#222] font-semibold mb-8 mt-4 w-[224px]"
          style={{
            fontFamily: "PretendardVariable",
            fontSize: "40.5px",
            lineHeight: "1.17",
          }}
        >
          높은 안전성 및 유효성
        </span>

        <span
          className="text-center text-[#222] mb-[47px] w-[457px]"
          style={{
            fontFamily: "PretendardVariable",
            fontSize: "18px",
            lineHeight: "1.67",
          }}
        >
          1. Effepharm에서는 Uthever® NMN에 대한 동물실험과 인체 임상실험을 통해
          안정성 및 유효성 인증. <br />
          2. 흡수성과 온도에 휠씬 덜 민감하여 실온에서 보관 가능.
        </span>

        {/* Image */}
        <img
          src={ImageRight}
          alt="Illustration Right"
          className="w-[371px] h-[218px] md:w-[451px] md:h-[450px] object-contain"
        />
      </div>
    </div>
  );
};

export default Section4;
