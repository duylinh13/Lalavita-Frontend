// src/components/Sections/Section2.js
import React from "react";

const Section2 = () => {
  return (
    <div
      id="section2"
      className="h-[1080px] flex flex-col items-center justify-center bg-[#fed614] text-center"
    >
      {/* Dòng chữ chính */}
      <h1 className="font-[PretendardVariable] text-[18.5px] font-[600] leading-[1.62] text-[#42c0cc] mb-4">
        NMN는 왜 중요할까요?
      </h1>

      {/* Nội dung chính */}
      <h2 className="font-[PretendardVariable] text-[40px] font-[600] leading-[1.2] text-[#222] mb-4">
        “노화는 질병, 그것도 치료할 수 있는 질병에 불과하다. 그리고 이것에 가장
        근접한 물질은<span className="text-style-2">‘</span>
        <span className="text-style-3">NMN</span>
        <span className="text-style-4">’</span>이다.
        <span className="text-style-5">”</span>
      </h2>

      {/* Tên tác giả */}
      <p className="font-[PretendardVariable] text-[17.5px] leading-[1.11] text-[#222]">
        미국 하버드대학교 의과대학 블라바트닉 연구소 유전학 데이비드 싱클레어
        교수
      </p>
    </div>
  );
};

export default Section2;
