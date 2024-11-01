"use client";
import { useEffect, useMemo } from "react";
import { TiArrowRight } from "react-icons/ti";
import HeroCards from "../HeroCards/HeroCards";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React from "react";
import AOS from 'aos';
import Link from "next/link";

function Hero() {
  useEffect(() => {
    if (window.innerWidth > 905) {
      AOS.init({
        duration: 150, // Default animation duration
      });
    }
  }, []);

  const t = useTranslations("Hero");
  const pathname = usePathname();

  const language = useMemo(() => {
    if (pathname.startsWith("/en")) return "EN";
    if (pathname.startsWith("/ru")) return "RU";
    return "O'Z";
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event) => {
      const targetId = event.currentTarget.getAttribute("href");
      if (targetId?.startsWith("#")) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        targetElement?.scrollIntoView({ behavior: "smooth" });
      }
    };

    const anchorLinks = document.querySelectorAll("a[href^='#']");
    anchorLinks.forEach((link) => link.addEventListener("click", handleClick));
    return () =>
      anchorLinks.forEach((link) =>
        link.removeEventListener("click", handleClick)
      );
  }, []);

  return (
    <section
      className="container flex max-md:flex-col lg:flex-row max-md:flex-col-reverse justify-between gap-8 py-16 bg-white items-center"
      aria-label={t("sectionLabel")}
    >
      <div
        className="space-y-6 w-full md:w-1/2 max-md:px-4"
        data-aos="fade-right"
        data-aos-duration="200"
        data-aos-delay="0"
      >
        <div
          className="inline-flex bg-[#efeffb] p-1 rounded-[16px] max-lg:hidden"
          role="group"
          aria-label={t("buttonGroupLabel")}
          style={{ fontFamily: "'Inter', sans-serif !important" }}
        >
          <button
            className="bg-white border !mr-4 border-[#acaee8] leading-normal text-indigo-600 px-3 py-1 rounded-full !font-[500] !text-[14px] md:text-base"
            aria-label={t("title")}
          >
            {t("title")}
          </button>
          <Link
            href="/uz/about"
            className="flex items-center text-indigo-600 text-[14px] font-medium"
            aria-label={t("readMore")}
          >
            {t("readMore")}
            <TiArrowRight className="text-[35px] pr-[12px]" aria-hidden="true" />
          </Link>
        </div>
        <h1
          className="text-2xl md:text-[40px] font-[600] text-[#2B2B2B] leading-tight md:leading-[48px] text-center md:text-left"
          data-aos="fade-right"
          data-aos-duration="250"
          data-aos-delay="50"
        >
          {t("heading")}
        </h1>
        <p
          className="text-lg md:text-2xl text-gray-500 text-center md:text-left"
          data-aos="fade-right"
          data-aos-duration="200"
          data-aos-delay="100"
        >
          {t("subheading")}
        </p>
        <a href="#VoiceSection">
          <button
            className="bg-[#595DD2] duration-[.5s] max-md:mx-auto w-[95%] py-3 px-4 rounded-[12px] shadow-lg text-white font-semibold hover:bg-indigo-700   w-full md:w-auto flex mt-[32px] items-center justify-center focus:outline-none focus:ring-4 focus:ring-indigo-500"
            aria-label={t("buttonText")}
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-delay="150"
          >
            {t("buttonText")}
            <TiArrowRight className="text-[20px]" aria-hidden="true" />
          </button>
        </a>
      </div>
      <div
        className="w-full md:w-[532px] max-md:px-[16px]"
        data-aos="fade-left"
        data-aos-duration="200"
        data-aos-delay="0"
        role="region"
        aria-labelledby="hero-cards"
      >
        <HeroCards />
      </div>
    </section>
  );
}

export default React.memo(Hero);