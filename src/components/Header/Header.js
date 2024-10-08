import React from "react";
import logo from "../../assets/images/100-bk-logo.png"; // Điều chỉnh đường dẫn
import menuIcon from "../../assets/images/bk-line-menu.png"; // Đường dẫn cho ảnh menu

const Header = ({ bgClass }) => {
  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between py-5 lg:py-10 px-5 lg:px-20 z-50 ${bgClass}`}
    >
      <img src={logo} alt="Logo" className="_bk_logo" />
      <div className="flex flex-col justify-end items-end">
        <img src={menuIcon} alt="Menu" className="bk_line_menu mb-1" />{" "}
        {/* Thêm khoảng cách bên dưới ảnh */}
        <div className="flex mt-2">
          <span className="KR">KR</span>
          <span className="EN ml-2">EN</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
