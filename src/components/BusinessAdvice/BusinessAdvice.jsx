"use client";
import Image from "next/image";
import adviceFirst from "../../images/a1.svg";
import adviceSecond from "../../images/rocket.svg";
import adviceSecond1 from "../../images/a2.svg";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BusinessAdvice = () => {
  const t = useTranslations("BusinessAdvice");

  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);

  const adviceCards = [
    {
      image: adviceFirst,
      title: "specialSolutions",
      aosDelay: "0",
      // imageClass: "mx-auto",
      imageClass: "max-md:w-[90px] max-md:h-100px",
      // titleClass: "text-xl font-[600] max-md:text-[16px] text-[24px] text-white",
      titleClass:
        "text-xl font-[600] text-[24px] max-md:text-[16px] text-white relative max-md:bottom-10 md:bottom-[80px]",

      // descriptionClass: "text-[#C6C8D2] mt-2 font-[400] max-md:text-[14px] text-center",
      descriptionClass:
        "text-[#C6C8D2] max-md:text-[14px] mt-2 font-[400] text-center relative max-md:bottom-9 md:bottom-[75px]",
    },
    {
      image: adviceSecond1,
      title: "userFriendlyInterface",
      aosDelay: "100",
      imageClass: "max-md:w-[90px] max-md:h-100px",

      descriptionClass:
        "text-[#C6C8D2] max-md:text-[14px] mt-2 font-[400] text-center relative max-md:bottom-9 md:bottom-[100px]",
      titleClass:
        "text-xl font-[600] text-[24px] max-md:text-[16px] text-white relative max-md:bottom-10 md:bottom-[100px]",
    },
    {
      image: adviceSecond,
      title: "supportAndTraining",
      aosDelay: "200",
      imageClass: "max-md:w-[78px] max-md:h-[78px]",
      titleClass:
        "text-xl font-[600] max-md:text-[16px] text-[24px] text-white relative max-md:bottom-9 md:bottom-[75px]",
      descriptionClass:
        "text-[#C6C8D2] mt-2 max-md:text-[14px] font-[400] text-[16px] text-center relative max-md:bottom-8 md:bottom-[70px]",
    },
  ];

  const AdviceCard = ({
    image,
    title,
    aosDelay,
    imageClass,
    titleClass,
    descriptionClass,
  }) => (
    <div
      className="bg-[#404a80] opacity-90  max-md:h-[182px] md:max-w-[387px] md:max-h-[233px] border border-[#5a5f99] rounded-[24px] p-8 max-md:p-3 text-center mx-auto max-md:mt-[20px]"
      data-aos="zoom-in"
      data-aos-delay={aosDelay}
    >
      <div className="flex justify-center md:bottom-24 relative max-md:bottom-16">
        <Image className={imageClass} src={image} alt={t(`${title}.alt`)} />
      </div>
      <h3 className={titleClass}>{t(`${title}.title`)}</h3>
      <p className={descriptionClass}>{t(`${title}.description`)}</p>
    </div>
  );

  return (
    <section
      className="bg-custom-hero bg-no-repeat bg-center bg-cover h-[100%]"
      role="region"
      aria-label={t("sectionAriaLabel")}
    >
      <div className="container">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-sm uppercase tracking-wide max-md:hidden text-[#C6C8D2] pt-[64px] text-[14px] font-[400]"
            data-aos="fade-up"
          >
            {t("title")}
          </h2>
          <h2
            className="md:text-[28px] max-w-[365px] mx-auto max-md:pt-6 max-md:text-[20px] mt-2 text-white text-[28px] font-[600]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("heading")}
          </h2>
          <p
            className="mt-4 max-md:text-[14px] max-md:mt-2 text-lg text-[#C6C8D2] text-[16px] font-[400]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("description")}
          </p>
          <div className="md:mt-24 max-md:mt-10  pb-[20px] grid gap-8 max-md:gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {adviceCards.map((card, index) => (
              <AdviceCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAdvice;
