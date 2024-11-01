import React from "react";
import { FaArrowRight } from "react-icons/fa";
import hue from "../images/m1.png";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <html>
      <body>
        <div className="container mx-auto px-4">
          <div className="mt-[129px] flex flex-col lg:flex-row gap-8 lg:gap-48 mb-8 lg:mb-0">
            <div className="flex flex-col text-center lg:text-left">
              <p className="font-bold text-[72px] lg:text-[172px] text-[#595DD2] leading-[72px] lg:leading-[223.6px]">
                404
              </p>
              <div className="flex flex-col gap-4 lg:gap-[42.5px]">
                <p className="text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[28px] max-w-full lg:max-w-[580px] mx-auto lg:mx-0">
                  Siz qidirayotgan sahifa oʻchirilgan, nomi oʻzgartirilgan yoki
                  vaqtincha mavjud boʻlmagan boʻlis hi mumkin.
                </p>
                <Link href="/">
                  <button className="flex items-center bg-[#595DD2] text-white py-[12px] lg:py-[18.5px] px-[16px] lg:px-[24px] rounded-[8px] max-w-full lg:max-w-[238px] mx-auto lg:mx-0">
                    <span className="mr-2">Bosh sahifaga qaytish</span>
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <Image src={hue} alt="Not Found" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
