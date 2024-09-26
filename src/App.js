/* eslint-disable no-unused-vars */
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

    const sections = [
      document.getElementById("section1"),
      document.getElementById("section2"),
      document.getElementById("section3"),
      document.getElementById("section4"),
      document.getElementById("section5"),
      document.getElementById("section6"),
      document.getElementById("section7"),
    ];

    const sectionTops = sections.map((section) =>
      section ? section.offsetTop : 0
    );

    // Thay đổi màu nền của header dựa trên vị trí cuộn
    if (scrollY >= sectionTops[6]) {
      setHeaderBg("bg-cover bg-center bg-[url('./assets/images/image.png')]");
    } else if (scrollY >= sectionTops[5]) {
      setHeaderBg("bg-[#f7d6e9]");
    } else if (scrollY >= sectionTops[4]) {
      setHeaderBg("bg-white");
    } else if (scrollY >= sectionTops[3]) {
      setHeaderBg("bg-[#fed614]"); // Màu vàng cho bên trái
    } else if (scrollY >= sectionTops[2]) {
      setHeaderBg("bg-white");
    } else if (scrollY >= sectionTops[1]) {
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

  const handleRadioChange = (index) => {
    setActiveIndex(index);
    const section = document.getElementById(`section${index + 1}`);
    if (section) {
      const sectionTop = section.offsetTop;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
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
