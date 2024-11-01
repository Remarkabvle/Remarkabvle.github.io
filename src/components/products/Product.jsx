"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import productlogo from "../../images/productlogo.svg";
import productlogo1 from "../../images/PR1.svg";
import productlogo2 from "../../images/PR2.svg";
import productlogo3 from "../../images/PR3.svg";
import productlogo4 from "../../images/PR4.svg";
import productlogo5 from "../../images/PR5.svg";

const Product = () => {
  const t = useTranslations("Products");

  useEffect(() => {
    AOS.init({ duration: 200, once: true });
  }, []);

  useEffect(() => {
    if (window.innerWidth > 905) {
      AOS.init({
        duration: 1200, // Animatsiya davomiyligi
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div>
        <div className="flex flex-col justify-center">
          <p
            className="text-center mt-[64px] text-[14px] font-[400] text-[#595DD2]"
            data-aos="fade-up"
          >
            {t("PRODUCTS")}
          </p>
          <p
            className="text-center font-[600] mx-auto max-w-[365px] text-[#2B2B2B] max-md:text-[20px] md:text-[28px] mt-[4px]"
            data-aos="fade-up"
          >
            {t("WHAT_WE_OFFER")}
          </p>
          <p
            className="text-center font-[400] max-md:text-[14px] md:text-[16px] text-[#4B5158]"
            data-aos="fade-up"
          >
            {t("AI_FEATURES")}
          </p>
        </div>
      </div>
      <div>
        <div className="md:mt-[72px] max-md:mt-[48px] max-md:mb-[40px] md:mb-[100px] flex flex-wrap gap-5 justify-center">
          {[
            { src: productlogo1, title: "STT", desc: "STT_DESC" },
            { src: productlogo, title: "TTS", desc: "TTS_DESC" },
            { src: productlogo2, title: "CHATBOT", desc: "CHATBOT_DESC" },
            { src: productlogo3, title: "SPEECH_RECOGNITION", desc: "SPEECH_RECOGNITION_DESC" },
            { src: productlogo4, title: "DIARIZATION", desc: "DIARIZATION_DESC" },
            { src: productlogo5, title: "VOICE_CLONING", desc: "VOICE_CLONING_DESC" },
          ].map((product, index) => (
            <div
              key={index}
              className="items-center mb-4 max-md:w-full max-md:mx-[16px] md:max-w-[367px] sm:w-[calc(50%-10px)] lg:w-[calc(33%-10px)] rounded-[20px] mt-4 bg-[#fcfcfc] border px-[24px] pb-[20px] h-auto"
              data-aos="fade-up"
            >
              <div className="bg-[#575ac6] shamow productLogo w-20 h-20 flex items-center justify-center border rounded-[110px] border-[3px] border-white flex justify-center m-[0] m-auto relative bottom-[100px]">
                <Image
                  src={product.src}
                  alt={`Product logo for ${t(product.title)}`}
                  loading="lazy"
                />
              </div>
              <div className="relative">
                <h2 className="md:text-[24px] text-[#2B2B2B] font-[600] text-center max-md:!text-[16px]">
                  {t(product.title)}
                </h2>
                <p className="md:text-[16px] max-md:text-[12px] font-[400] text-gray-500 md:max-w-[339px] mt-2 text-center">
                  {t(product.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
