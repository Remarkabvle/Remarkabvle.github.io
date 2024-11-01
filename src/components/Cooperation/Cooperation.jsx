"use client";
import React, { useEffect, memo } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";
import HAM1 from "../../images/UIC.svg";
import HAM2 from "../../images/Cometa.svg";
import HAM3 from "../../images/Paylov.svg";

const Cooperation = () => {
  const t = useTranslations("Cooperation");

  useEffect(() => {
    AOS.init({ duration: 200 }); // Default animation duration
  }, []);

  return (
    <section
      className="container flex gap-[155px] items-center max-md:flex-col max-md:gap-0 max-md:w-[100%]"
      aria-labelledby="cooperation-title"
    >
      <div
        className="md:w-1/2 max-md:text-center max-md:px-4 flex flex-col"
        data-aos="fade-right"
        data-aos-duration="200" // Faster duration for fade-right
      >
        <p
          className="text-[#595DD2] font-inter text-sm font-normal uppercase max-md:hidden"
          aria-hidden="true"
        >
          Hamkorlik
        </p>
        <h2
          id="cooperation-title"
          className="text-[#2B2B2B] max-md:text-[20px] font-inter text-2xl font-semibold max-md:mt-[69px] max-md:mb-2"
        >
          {t("title")}
        </h2>
        <p className="text-[#778292] font-inter max-md:text-[14px] text-xl font-normal">
          {t("description")}
        </p>
      </div>
      <div
        className="mt-14 max-md:mt-[20px] flex flex-col items-end gap-10 max-md:gap-3 max-md:flex-row bg-no-repeat md:pt-[24px] md:bg-[120px] max-md:bg-[center_15px]"
        style={{
          backgroundImage: `url(/krug.svg)`,
        }}
        data-aos="fade-left"
        data-aos-duration="200" // Faster duration for fade-left
      >
        <div
          className="flex w-[194px] z-[999] bottom-10 h-[74px] p-[21px_19px_22px_20px] justify-center items-center flex-shrink-0 rounded-[16px] border-[1.5px] border-[#F1F1F1] bg-white/20 backdrop-blur-[2px] max-md:w-[103px] max-md:h-[40px]"
          data-aos="fade-up"
          data-aos-duration="200"
          data-aos-delay="100" // Staggered delay for entrance
          role="img"
          aria-labelledby="partner-paylov"
        >
          <Image src={HAM3} alt={t("partners.ham3")} />
          <span id="partner-paylov" className="sr-only">
            {t("partners.ham3")}
          </span>
        </div>
        <div
          className="flex w-[278px] z-[999] h-[108px] px-[27px] py-[35px] justify-center items-center flex-shrink-0 rounded-xl border-[1.5px] border-[#F1F1F1] bg-[rgba(255,255,255,0.2)] backdrop-blur-sm max-md:w-[144px] max-md:h-[51px] max-md:mb-[63px]"
          data-aos="fade-up"
          data-aos-duration="200"
          data-aos-delay="200" // Staggered delay for entrance
          role="img"
          aria-labelledby="partner-cometa"
        >
          <Image src={HAM2} alt={t("partners.ham2")} />
          <span id="partner-cometa" className="sr-only">
            {t("partners.ham2")}
          </span>
        </div>
        <div
          className="flex w-[194px] z-[999] h-[74px] p-[21px_19px_22px_20px] justify-center items-center flex-shrink-0 rounded-[16px] border-[1.5px] border-[#F1F1F1] bg-white/20 backdrop-blur-[2px] max-md:w-[103px] max-md:h-[40px]"
          data-aos="fade-up"
          data-aos-duration="200"
          data-aos-delay="300" // Staggered delay for entrance
          role="img"
          aria-labelledby="partner-uic"
        >
          <Image src={HAM1} alt={t("partners.ham1")} />
          <span id="partner-uic" className="sr-only">
            {t("partners.ham1")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default memo(Cooperation);