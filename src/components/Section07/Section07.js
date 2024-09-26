import React from "react";
import youtubeIcon from "../../assets/images/sns-youtube.png"; // Thay thế import
import instagramIcon from "../../assets/images/sns-instagram.png"; // Thay thế import

const Section7 = () => {
  return (
    <div
      id="section7"
      className="h-[1080px] flex items-center justify-center bg-cover bg-center bg-[url('./assets/images/main-bg-07.png')]"
    >
      <div className="container max-w-screen-2xl space-y-[104px]">
        {/* Địa chỉ */}
        <div className="space-y-8">
          <h3 className="text-lg leading-[40px] text-white">Address</h3>
          <p className="text-4xl leading-[48px] text-white">
            1234, Dosan-daero 1-gil, <br /> lalavita Building
          </p>
        </div>

        {/* Hợp tác */}
        <div className="space-y-8">
          <h3 className="text-lg leading-[40px] text-white">Partnership</h3>
          <p className="text-4xl leading-[48px] text-white">
            +82 10 12347 890 <br />
            lalavita@gmail.com
          </p>
        </div>

        {/* Liên kết mạng xã hội */}
        <div className="space-y-8">
          <h3 className="text-lg leading-[40px] text-white">Social Media</h3>
          <div>
            <span className="text-4xl leading-[48px] text-white underline flex gap-2">
              Youtube
              <img
                src={youtubeIcon}
                alt="sns-youtube"
                width={37}
                height={37}
                className="object-contain"
              />
            </span>

            <span className="text-4xl leading-[48px] text-white underline flex gap-2">
              Instagram
              <img
                src={instagramIcon}
                alt="sns-instagram"
                width={37}
                height={37}
                className="object-contain"
              />
            </span>
          </div>
        </div>
        <div className="flex justify-start  mt-[166px]">
          <span className="w-full h-[18px] text-[20.5px] font-normal leading-[1.24] text-left text-white">
            © 2022 Lalavita. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section7;
