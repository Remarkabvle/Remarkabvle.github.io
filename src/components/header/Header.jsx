"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FiChevronDown, FiMenu, FiX, FiArrowUp } from "react-icons/fi";
import Image from "next/image";
import Logo from "../../images/Logo.svg";
import { useTranslations } from "next-intl";
import Link from "next/link";

const uz = "https://cdn.commeta.uz/static/review/static/front/svg/flag/uz.svg";
const ru = "https://cdn.commeta.uz/static/review/static/front/svg/global.svg";
const en = "https://cdn.commeta.uz/static/review/static/front/svg/flag/en.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("O'Z");
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();

  const mobileMenuRef = useRef(null);
  const langMenuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const toggleLangMenu = (e) => {
    e.stopPropagation();
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setLanguage("ENG");
    } else if (pathname.startsWith("/ru")) {
      setLanguage("RU");
    } else if (pathname.startsWith("/uz")) {
      setLanguage("O'Z");
    }
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target) &&
        isLangMenuOpen
      ) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangMenuOpen]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);

    const locale = lang === "O'Z" ? "uz" : lang === "ENG" ? "en" : "ru";
    const currentPath = pathname.split("/").slice(2).join("/");
    router.push(`/${locale}/${currentPath}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="max-md:px-4 container" aria-label="Main Header">
      <div
        className={`flex justify-between items-center px-4 py-4 max-md:px-3 max-md:py-3 bg-white sticky top-0 w-full z-50 border mt-[19px] rounded-[16px] font-inter mx-auto ${
          isMenuOpen ? "relative" : ""
        }`}
      >
        <div className="flex items-center">
          <Link href="/" aria-label="Go to homepage">
          <a href="/" className="logo text-2xl font-bold text-black flex gap-1">
    <span class="bg-blue">
      My
    </span>
     Shope
</a>

            <Image
              src={Logo}
              alt="Site Logo" // Added alt attribute for better accessibility
              width={116} // Ensure a set width
              height={36} // Ensure a set height
              className="w-29 h-9 max-md:!min-w-[95px] max-md:!min-h-[32px]"
              priority
            />
          </Link>
        </div>

        <nav
          className="hidden md:flex text-[14px] font-[400] items-center font-inter"
          aria-label="Desktop Menu"
        >
          <Link
            href={`/${
              language === "O'Z" ? "uz" : language === "ENG" ? "en" : "ru"
            }/about`}
            aria-label="Go to about us"
          >
            <span className="hover:text-gray-700 transition-colors duration-200">
              {t("aboutUs")}
            </span>
          </Link>
          
          <div
            className="relative"
            onClick={toggleDropdown}
            aria-label="Toggle products dropdown"
            aria-expanded={isDropdownOpen}
          >
          
            <div
              className="flex !cursor-pointer items-center hover:text-gray-700 transition-colors duration-200"
              aria-label="Go to products"
            >
              <span className="cursor-pointer mx-3">◦</span>
              {t("products")}
              <FiChevronDown
                className={`ml-1 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute z-10 bg-white border border-gray-200 rounded shadow-lg mt-1 w-48">
                <Link
                  href="/uz/tts"
                  className="block px-4 py-2 hover:bg-gray-100"
                  aria-label="Go to Product 1"
                >
                  TTS
                </Link>
                <Link
                  href="/uz/stt"
                  className="block px-4 py-2 hover:bg-gray-100"
                  aria-label="Go to Product 2"
                >
                  STT
                </Link>
              </div>
            )}
          </div>
          <Link
            href={`/${
              language === "O'Z" ? "uz" : language === "ENG" ? "en" : "ru"
            }/blog`}
            aria-label="Go to blog"
          >
            <span className="mx-3">◦</span>
            <span className="hover:text-gray-700 transition-colors duration-200">
              {t("blog")}
            </span>
          </Link>
      
        </nav>

        <div className="md:flex max-md:flex items-center space-x-6 max-md:z-10">
          {(!isMobile || (isMobile && isMenuOpen)) && (
            <div className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleLangMenu}
                aria-label="Change language"
                aria-expanded={isLangMenuOpen}
                aria-controls="language-menu"
              >
                <Image
                  src={language === "O'Z" ? uz : language === "ENG" ? en : ru}
                  width={16}
                  height={10}
                  alt={`Current language is ${language}`}
                />
                <span className="ml-1">{language}</span>
                <FiChevronDown
                  className={`inline-block text-xl ml-1 transition-transform duration-300 ${
                    isLangMenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </div>

              {isLangMenuOpen && (
                <div
                  id="language-menu"
                  ref={langMenuRef}
                  className="absolute top-10 right-0 mt-1 py-1 w-[80px] flex-shrink-0 rounded border border-[#F1F1F1] bg-[#FCFCFC]"
                  aria-label="Language selection"
                >
                  <button
                    className={`flex items-center w-full px-3 py-1 max-md:px-4 hover:bg-gray-100 ${
                      language === "O'Z" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => changeLanguage("O'Z")}
                    aria-label="Switch to Uzbek"
                  >
                    <Image src={uz} width={16} height={10} alt="Uzbek flag" />
                    <span className="ml-1">O'Z</span>
                  </button>
                  <button
                    className={`flex items-center w-full px-3 py-1 max-md:px-4 hover:bg-gray-100 ${
                      language === "ENG" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => changeLanguage("ENG")}
                    aria-label="Switch to English"
                  >
                    <Image src={en} width={16} height={10} alt="English flag" />
                    <span className="ml-1">ENG</span>
                  </button>
                  <button
                    className={`flex items-center w-full px-3 py-1 max-md:px-4 hover:bg-gray-100 ${
                      language === "RU" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => changeLanguage("RU")}
                    aria-label="Switch to Russian"
                  >
                    <Image src={ru} width={16} height={10} alt="Russian flag" />
                    <span className="ml-1">RU</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {showScrollToTop && (
            <button
              onClick={scrollToTop}
              className="text-gray-600 hover:text-gray-800 transition-colors fixed bottom-4 right-4 z-50 bg-white p-2 rounded-full shadow-lg"
              aria-label="Scroll to top"
            >
              <FiArrowUp />
            </button>
          )}

          <button
            className="md:hidden cursor-pointer z-[999999]"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-0 left-0 right-0 bottom-0 bg-white z-40 flex items-center justify-center"
        >
          <nav className="flex flex-col items-center text-[20px] space-y-6">
            <Link
              href={`/${
                language === "O'Z" ? "uz" : language === "ENG" ? "en" : "ru"
              }/about`}
              onClick={toggleMenu}
              aria-label="Go to about us"
            >
              {t("aboutUs")}
            </Link>
            <div className="flex flex-col items-center">
              <span>{t("products")}</span>
              <Link
                href="/uz/tts"
                onClick={toggleMenu}
                className="mt-2"
                aria-label="Go to TTS"
              >
                TTS
              </Link>
              <Link
                href="/uz/stt"
                onClick={toggleMenu}
                className="mt-2"
                aria-label="Go to STT"
              >
                STT
              </Link>
            </div>
            <Link
              href={`/${
                language === "O'Z" ? "uz" : language === "ENG" ? "en" : "ru"
              }/blog`}
              onClick={toggleMenu}
              aria-label="Go to blog"
            >
              {t("blog")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;