// components/LanguageSelector.jsx

"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import uz from "../../images/uz.jpg";
import en from "../../images/en.jpg";
import ru from "../../images/russia.png";
import { FiChevronDown } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";

const LanguageSelector = ({ language, setLanguage }) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);

    const locale = lang === "O'Z" ? "uz" : lang === "ENG" ? "en" : "ru";
    const currentPath = pathname.split("/").slice(2).join("/");
    router.push(`/${locale}/${currentPath}`);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleLangMenu}
      >
        <Image
          src={language === "O'Z" ? uz : language === "ENG" ? en : ru}
          className="w-[16px]"
        />
        <span className="ml-1">{language}</span>
        <FiChevronDown
          className={`inline-block text-xl ml-1 transition-transform duration-300 ${
            isLangMenuOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {isLangMenuOpen && (
        <div
          ref={langMenuRef}
          className="absolute top-10 right-0 mt-1 py-1 flex-shrink-0 rounded border border-[#F1F1F1] bg-[#FCFCFC]"
        >
          <button
            className={`flex items-center w-full px-3 py-1 hover:bg-gray-100 ${
              language === "O'Z" ? "bg-gray-200" : ""
            }`}
            onClick={() => changeLanguage("O'Z")}
          >
            <Image src={uz} className="w-[16px]" />
            <span className="ml-1">O'Z</span>
            {language === "O'Z" && <i className="icon-tick text-sm" />}
          </button>
          <button
            className={`flex items-center w-full px-3 py-1 hover:bg-gray-100 ${
              language === "ENG" ? "bg-gray-200" : ""
            }`}
            onClick={() => changeLanguage("ENG")}
          >
            <Image src={en} className="w-[16px]" />
            <span className="ml-1 pr-2">ENG</span>
            {language === "ENG" && <i className="icon-tick text-sm " />}
          </button>
          <button
            className={`flex items-center w-full px-3 py-1 hover:bg-gray-100 ${
              language === "RU" ? "bg-gray-200" : ""
            }`}
            onClick={() => changeLanguage("RU")}
          >
            <Image src={ru} className="w-[16px]" />
            <span className="ml-1">RU</span>
            {language === "RU" && <i className="icon-tick text-sm" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
