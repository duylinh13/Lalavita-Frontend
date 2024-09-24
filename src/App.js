// App.js
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Section1 from "./components/Section01/Section01";
import Section2 from "./components/Section02/Section02";
import Section3 from "./components/Section03/Section03";
import Section4 from "./components/Section04/Section04";
import Section5 from "./components/Section05/Section05";
import Section6 from "./components/Section06/Section06";
import Section7 from "./components/Section07/Section07";
import RadioButtons from "./components/RadioButtons/RadioButtons"; // Nhập RadioButtons

function App() {
  const [headerBg, setHeaderBg] = useState("bg-white");
  const [activeIndex, setActiveIndex] = useState(0); // Trạng thái để theo dõi section hiện tại

  const handleScroll = () => {
    const scrollY = window.scrollY;

    const section2 = document.getElementById("section2");
    const section3 = document.getElementById("section3");
    const section4 = document.getElementById("section4");
    const section5 = document.getElementById("section5");
    const section6 = document.getElementById("section6");
    const section7 = document.getElementById("section7");

    const section2Top = section2 ? section2.offsetTop : 0;
    const section3Top = section3 ? section3.offsetTop : 0;
    const section4Top = section4 ? section4.offsetTop : 0;
    const section5Top = section5 ? section5.offsetTop : 0;
    const section6Top = section6 ? section6.offsetTop : 0;
    const section7Top = section7 ? section7.offsetTop : 0;

    // Thay đổi màu nền của header dựa trên vị trí cuộn
    if (scrollY >= section7Top) {
      setHeaderBg("bg-cover bg-center bg-[url('./assets/images/image.png')]");
    } else if (scrollY >= section6Top) {
      setHeaderBg("bg-[#f7d6e9]");
    } else if (scrollY >= section5Top) {
      setHeaderBg("bg-white");
    } else if (scrollY >= section4Top) {
      setHeaderBg("bg-[#fed614]"); // Màu vàng cho bên trái
    } else if (scrollY >= section3Top) {
      setHeaderBg("bg-white");
    } else if (scrollY >= section2Top) {
      setHeaderBg("bg-[#fed614]");
    } else {
      setHeaderBg("bg-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hàm để cập nhật activeIndex khi nút radio được nhấn
  const handleRadioChange = (index) => {
    setActiveIndex(index);
    const section = document.getElementById(`section${index + 1}`);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Lấy vị trí của section
      const offset = window.innerHeight / 2 - section.offsetHeight / 2; // Tính toán offset để đưa section vào giữa màn hình
      window.scrollTo({
        top: sectionTop - offset, // Cuộn đến vị trí mới
        behavior: "smooth", // Cuộn mượt mà
      });
    }
  };

  return (
    <div className="w-[1920px]">
      <Header bgClass={headerBg} />

      <main className="mt-40">
        <Section1 id="section1" />
        <Section2 id="section2" />
        <Section3 id="section3" />
        <Section4 id="section4" />
        <Section5 id="section5" />
        <Section6 id="section6" />
        <Section7 id="section7" />
      </main>

      <RadioButtons
        activeIndex={activeIndex}
        setActiveIndex={handleRadioChange}
      />
    </div>
  );
}

export default App;
