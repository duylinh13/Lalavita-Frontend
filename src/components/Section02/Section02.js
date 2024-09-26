import React from "react";
import mainIllustration from "../../assets/images/main-illust-02-1.png";
import illust2 from "../../assets/images/main-illust-02-2.png";
import illust3 from "../../assets/images/main-illust-02-3.png";

const Section2 = () => {
  return (
    <div
      id="section2"
      className="lg:h-[1090px] h-full flex flex-col items-center justify-start bg-[#fed614] text-center pt-[100px] pb-[100px] sm:pt-0 sm:pt-[120px] md:pt-[240px] overflow-hidden" // Thêm overflow-hidden ở đây
    >
      {/* Dòng chữ chính */}
      <h1 className="font-[PretendardVariable] text-[16px] md:text-[18.5px] font-[600] leading-[1.62] text-[#42c0cc] mb-0">
        NMN는 왜 중요할까요?
      </h1>

      {/* Nội dung chính */}
      <h2 className="font-[PretendardVariable] text-lg lg:text-2xl md:text-[40px] font-[600] md:leading-[1.2] text-[#222] mb-0 w-[100%] md:w-[90%] lg:w-[900px] h-[auto] md:h-[58px] mt-[20px] md:mt-[31px]">
        “노화는 질병, 그것도 치료할 수 있는 질병에 불과하다. 그리고 이것에 가장
        근접한 물질은<span className="text-style-2">‘</span>
        <span className="text-style-3">NMN</span>
        <span className="text-style-4">’</span>이다.
        <span className="text-style-5">”</span>
      </h2>

      {/* Tên tác giả */}
      <p className="font-[PretendardVariable] text-[14px] md:text-[17.5px] leading-[1.4] md:leading-[1.11] text-[#222] mt-[40px] md:mt-[74px]">
        미국 하버드대학교 의과대학 블라바트닉 연구소 유전학 데이비드 싱클레어
        교수
      </p>

      <div className="three-items flex flex-col lg:flex-row justify-center mt-20 w-full px-4 md:px-52 gap-x-8">
        {/* Card 1 */}
        <div className="relative flex flex-col items-start justify-start p-4 rounded-[20px] shadow-lg bg-white w-full sm:w-[60%] md:w-[30%] mx-0 mb-6 transition-transform duration-300 transform h-[400px] sm:h-[340px] md:h-[448px]">
          <img
            src={mainIllustration}
            alt="Main Illustration"
            className="w-[62px] h-[61px] object-contain mb-10 mt-6 ml-6"
          />
          <span className="text-[#222] font-[PretendardVariable] text-xl lg:text-[28px] font-semibold lg:leading-[1.25] text-start mb-6 ml-6 mr-[100px] lg:mr-[167px]">
            인체의 NAD+ 균형 유지를 위해
          </span>
          <span className="text-[#999] mx-6 font-[PretendardVariable] text-sm text-start">
            인체에서 에너지 생성, 대사 및 유전자 발현에 중요한 역할을 하는 NAD+
            는 모든 살아 있는 세포에서 발견되는 보조인자입니다. 사람은 나이가
            들수록 가졌던 NAD+ 수준이 감소하여 노화 속도가 빨라지고 관련 신체
            건강 상태도 나빠지기도 합니다.
          </span>
        </div>

        {/* Card 2 */}
        <div className="relative flex flex-col items-start justify-start p-4 rounded-[20px] shadow-lg bg-[#42c0cc] w-[90%] sm:w-[60%] md:w-[30%] mx-0 mb-6 transition-transform duration-300 transform h-[400px] sm:h-[340px] md:h-[448px]">
          <img
            src={illust2}
            alt="Illustration 2"
            className="w-[62px] h-[61px] object-contain mb-10 mt-6 ml-6"
          />
          <span className="text-[#222] font-[PretendardVariable] text-xl lg:text-[28px] font-semibold lg:leading-[1.25] text-start mb-6 ml-6 mr-[100px]">
            인체 내의 주요 세포 에너지원
          </span>
          <span className="text-black font-[PretendardVariable] text-sm text-start mx-6">
            니코틴아마이드 모노뉴클레오타이드(NMN)는 인체 내의 주요 세포
            에너지원 중에 하나입니다. 감소된 NAD+ 를 보충제 역할을 함으로써
            노화를 늦추는 효과가 있으며, 건강을 향상시키는데 도움이 됩니다.
          </span>
        </div>

        {/* Card 3 */}
        <div className="relative flex flex-col items-start justify-start p-4 rounded-[20px] shadow-lg bg-white w-[90%] sm:w-[60%] md:w-[30%] mx-0 mb-6 transition-transform duration-300 transform h-[400px] sm:h-[340px] md:h-[448px]">
          <img
            src={illust3}
            alt="Illustration 3"
            className="w-[62px] h-[61px] object-contain mb-10 mt-6 ml-6"
          />
          <span className="text-[#222] font-[PretendardVariable] text-xl lg:text-[28px] font-semibold lg:leading-[1.25] text-start mb-6 mx-6">
            젊음 유지 및 노화 억제에 탁월한 효과
          </span>
          <span className="text-[#999] font-[PretendardVariable] text-sm text-start mx-6">
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
