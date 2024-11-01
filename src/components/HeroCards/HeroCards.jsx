"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import firstImage from "../../images/3D.svg";
import secondImage from "../../images/vector.svg";
import thirdImage from "../../images/h3.svg";
import micro from "../../images/Group.svg";
import fourthImage from "../../images/Asterisk.svg";
import fiveImage from "../../images/H0.svg";
import { useTranslations } from "next-intl";
const HeroCards = () => {
  const t = useTranslations("HeroCards");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex max-md:gap-3 gap-4 max-md:justify-center bg-grid-pattern bg-opacity-10 bg-cover bg-center" role="region" aria-labelledby="hero-cards">
      <div className="flex flex-col gap-4 max-w-[260px] max-md:w-1/2 max-md:w">
        <div
          className="max-md:h-[182px]  md:h-[260px] flex flex-col items-center gap-[13px] px-4 rounded-[16px] border border-[#F1F1F1] bg-white bg-opacity-10 backdrop-blur-sm self-stretch"
          data-aos="fade-left" data-aos-duration="200" data-aos-delay="0"
          role="group"
          aria-labelledby="natural-effective"
        >
          <Image src={firstImage} alt={t("firstImageAlt")} className="max-md:w-[118px] max-md:mt-4 md:mt-[19px] max-md:h-[80px]" />
          <p id="natural-effective" className="text-center max-md:px-[12px] max-md:text-[14px] max-md:leading-[18.2px] text-[#2B2B2B] font-inter text-[20px] font-[600] leading-[24px] w-[238px] max-md:w-[200px]">
            {t("naturalAndEffective")}
          </p>
        </div>
        <div
          className="max-md:h-[60px] max-md:px-[12px] md:h-[100px] flex max-md:gap-[8px] items-center md:justify-center self-stretch p-6 md:px-1.5 rounded-[16px] border border-[#F1F1F1] bg-white bg-opacity-10 backdrop-blur-sm"
          data-aos="fade-left" data-aos-duration="200" data-aos-delay="100"
          role="group"
          aria-labelledby="fast-accurate"
        >
          <Image src={secondImage} alt={t("secondImageAlt")} className="max-md:w-[28px] max-md:h-[28px]" />
          <p id="fast-accurate" className="max-md:text-[12px] md:ml-[9px] flex flex-col items-center justify-center md:w-[179px] md:h-[44px] text-[#2B2B2B] font-inter text-[20px] font-semibold md:leading-[24px]">
            {t("fastAccurateConvenient")}
          </p>
        </div>
        <div
          className="max-md:h-[144px] md:h-[180px] flex flex-col items-center justify-end gap-[16px] p-[24px_29px_0_29px] self-stretch rounded-[16px] border-[1.5px] border-[#f1f1f1] bg-white bg-opacity-10 backdrop-blur-[2px]"
          data-aos="fade-left" data-aos-duration="200" data-aos-delay="200"
          role="group"
          aria-labelledby="growing-ai"
        >
          <p id="growing-ai" className="max-md:text-[14px] max-md:pt-[16px] md:w-[242px] md:height-[48px] text-[#2B2B2B] text-center font-inter text-[20px] font-[600] md:leading-[24px]">
            {t("growingAI")}
          </p>
          <Image src={thirdImage} alt={t("thirdImageAlt")} />
        </div>
      </div>
      <div className="flex flex-col gap-[16px] max-md:w-1/2">
        <div
          className="max-md:h-[60px] flex md:h-[100px] p-[28px_24px] justify-center items-center self-stretch rounded-[16px] border-[1.5px] border-[#F1F1F1] bg-white bg-opacity-10 backdrop-blur-[2px]"
          data-aos="fade-up" data-aos-duration="200" data-aos-delay="0"
          role="group"
          aria-labelledby="microphone"
        >
          <Image src={micro} alt={t("microAlt")} />
        </div>
        <div
          className="md:h-[340px] max-md:h-[266px] flex flex-col items-center gap-[38px] p-[24px_30px_30px_30px] self-stretch rounded-[16px] border-[1.5px] border-[#F1F1F1] bg-white bg-opacity-10 backdrop-blur-[2px]"
          data-aos="fade-up" data-aos-duration="200" data-aos-delay="100"
          role="group"
          aria-labelledby="comprehensive-ai"
        >
          <p id="comprehensive-ai" className="md:w-[178px] max-md:text-[14px] text-[#2B2B2B] text-center font-inter text-[20px] font-[600] md:leading-[24px]">
            {t("comprehensiveAI")}
          </p>
          <Image src={fourthImage} alt={t("fourthImageAlt")} />
        </div>
        <div
          className="md:h-[100px] max-md:h-[60px] flex p-[26px_18.5px_26px_19.5px] justify-center items-center self-stretch rounded-[16px] border-[1.5px] border-[#F1F1F1] bg-white bg-opacity-10 backdrop-blur-[2px]"
          data-aos="fade-up" data-aos-duration="200" data-aos-delay="200"
          role="group"
          aria-labelledby="latest-solutions"
        >
          <Image src={fiveImage} alt={t("fiveImageAlt")} />
          <p id="latest-solutions" className="max-md:text-[12px] md:ml-[9px] text-[#2B2B2B] text-center font-inter text-[20px] font-[600] md:leading-[24px]">
            {t("latestBusinessSolutions")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCards;

