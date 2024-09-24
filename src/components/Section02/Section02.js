// src/components/Sections/Section2.js
import React from "react";
import mainIllustration from "../../assets/images/main-illust-02-1.png";
import illust2 from "../../assets/images/main-illust-02-2.png";
import illust3 from "../../assets/images/main-illust-02-3.png";

const Section2 = () => {
  return (
    <div
      id="section2"
      className="h-[1090px] flex flex-col items-center justify-start bg-[#fed614] text-center pt-[240px]" // Sử dụng justify-start để căn trên
    >
      {/* Dòng chữ chính */}
      <h1 className="font-[PretendardVariable] text-[18.5px] font-[600] leading-[1.62] text-[#42c0cc] mb-0">
        NMN는 왜 중요할까요?
      </h1>

      {/* Nội dung chính */}
      <h2 className="font-[PretendardVariable] text-[40px] font-[600] leading-[1.2] text-[#222] mb-0 w-[900px] h-[58px] mt-[31px]">
        “노화는 질병, 그것도 치료할 수 있는 질병에 불과하다. 그리고 이것에 가장
        근접한 물질은<span className="text-style-2">‘</span>
        <span className="text-style-3">NMN</span>
        <span className="text-style-4">’</span>이다.
        <span className="text-style-5">”</span>
      </h2>

      {/* Tên tác giả */}
      <p className="font-[PretendardVariable] text-[17.5px] leading-[1.11] text-[#222] mt-[74px]">
        미국 하버드대학교 의과대학 블라바트닉 연구소 유전학 데이비드 싱클레어
        교수
      </p>
      <div className="three-items flex flex-col md:flex-row md:justify-between mt-24 w-full px-0 md:px-52">
        <div className="relative flex flex-col items-start justify-start h-auto p-[60px] rounded-[20px] shadow-lg bg-white w-full md:w-1/3 mx-2 mb-4 md:mb-10">
          {/* Hình ảnh */}
          <img
            src={mainIllustration}
            alt="Main Illustration"
            className="w-[62px] h-[61px] object-contain mb-[30px]"
          />

          {/* Text chính */}
          <span className="text-[#222] font-[PretendardVariable] text-[32px] font-semibold leading-[1.25] text-start mb-[30px]">
            인체의 NAD+ 균형 유지를 위해
          </span>

          {/* Đoạn văn bản bên dưới */}
          <span className="text-[#999] font-[PretendardVariable] text-[18px] leading-[1.67] text-start">
            인체에서 에너지 생성, 대사 및 유전자 발현에 중요한 역할을 하는 NAD+
            는 모든 살아 있는 세포에서 발견되는 보조인자입니다. 사람은 나이가
            들수록 가졌던 NAD+ 수준이 감소하여 노화 속도가 빨라지고 관련 신체
            건강 상태도 나빠지기도 합니다.
          </span>
        </div>
        <div className="relative flex flex-col items-start justify-start h-auto p-[60px] rounded-[20px] shadow-lg bg-[#42c0cc] w-full md:w-1/3 mx-2 mb-4 md:mb-10">
          {/* Hình ảnh */}
          <img
            src={illust2}
            alt="illust2"
            className="w-[62px] h-[61px] object-contain mb-[30px]"
          />

          {/* Text chính */}
          <span className="text-[#222] font-[PretendardVariable] text-[32px] font-semibold leading-[1.25] text-start mb-[30px]">
            인체 내의 주요 세포 에너지원
          </span>

          {/* Đoạn văn bản bên dưới */}
          <span className="text-black font-[PretendardVariable] text-[18px] leading-[1.67] text-start">
            인체에서 에너지 생성, 대사 및 유전자 발현에 중요한 역할을 하는 NAD+
            는 모든 살아 있는 세포에서 발견되는 보조인자입니다. 사람은 나이가
            들수록 가졌던 NAD+ 수준이 감소하여 노화 속도가 빨라지고 관련 신체
            건강 상태도 나빠지기도 합니다.
          </span>
        </div>
        <div className="relative flex flex-col items-start justify-start h-auto p-[60px] rounded-[20px] shadow-lg bg-white w-full md:w-1/3 mx-2 mb-4 md:mb-10">
          {/* Hình ảnh */}
          <img
            src={illust3}
            alt="illust2"
            className="w-[62px] h-[61px] object-contain mb-[30px]"
          />

          {/* Text chính */}
          <span className="text-[#222] font-[PretendardVariable] text-[32px] font-semibold leading-[1.25] text-start mb-[30px]">
            젊음 유지 및 노화 억제에 탁월한 효과
          </span>

          {/* Đoạn văn bản bên dưới */}
          <span className="text-[#999] font-[PretendardVariable] text-[18px] leading-[1.67] text-start">
            NMN은 노화를 되돌릴 뿐만 아니라 관련된 질병을 억제하는데
            효과적입니다. 연구를 진행한 결과, NMN가 노화로 인한 세포 손상, 신경
            퇴행, 심장기능 악화 등의 문제 개선과 젊음을 유지하는데 효과가 있다는
            것을 발견했습니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section2;
