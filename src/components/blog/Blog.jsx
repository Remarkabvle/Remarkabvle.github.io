// import React from "react";
import React, { memo, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
// const CardGrid = dynamic(() => import("@/components/card/CardGrid"));

import { FaArrowRight } from "react-icons/fa";
import CardGrid from "../card/CardGrid";

const Blog = () => {
  const [language, setLanguage] = useState("UZ");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setLanguage("EN");
    } else if (pathname.startsWith("/ru")) {
      setLanguage("RU");
    } else {
      setLanguage("UZ");
    }
  }, [pathname]);
  return (
    <div>
      <section>
        <div className="container flex flex-col lg:flex-row justify-between items-start lg:space-x-8">
          <div className="max-md:px-4">
            <h2 className="text-[#2B2B2B] font-inter max-md:items-start text-[24px] lg:text-[28px] font-semibold mb-4 lg:mb-0">
              Blog
            </h2>
            <p className="text-[#778292] mb-8 max-md:mb-4 font-inter text-[14px] lg:text-[16px] font-normal">
              Ushbu blogda Sun’iy Intellekt olamidagi so‘ngi yangiliklar haqida
              turli maqolalarni o‘qishingiz mumkin
            </p>
          </div>
          <Link href={`/${language.toLowerCase()}/blog`}>
            <button
              className="flex justify-center items-center gap-[4px] mt-4 lg:mt-0 p-[12px_20px] rounded-[10px] bg-[#595DD21A] text-[#595DD2] font-inter text-[14px] font-semibold hover:text-white transition-[.3s] hover:bg-[#595DD2] max-lg:hidden"
              aria-label="Barcha maqolalar sahifasiga o'tish"
            >
              Barcha maqolalar
              <FaArrowRight />
            </button>
          </Link>
        </div>
        <CardGrid />
      </section>;
    </div>
  );
};

export default Blog;
