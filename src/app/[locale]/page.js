"use client";
import React, { memo, useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner"; // Spinner komponentini import qiling
import Experement from "@/components/Experement/Experement";
import Blog from "@/components/blog/Blog";

// Komponentlarni dinamik yuklash orqali sayt yuklanish tezligini oshirish
const Hero = dynamic(() => import("@/components/hero/Hero"));
const Cooperation = dynamic(() => import("@/components/Cooperation/Cooperation"));
const Product = dynamic(() => import("@/components/products/Product"));
const BusinessAdvice = dynamic(() => import("@/components/BusinessAdvice/BusinessAdvice"));
const VoiceSection = dynamic(() => import("@/components/voice/Voice"));
const Audio = dynamic(() => import("@/components/audio/Audio"));

const Home = memo(function Home() {
  // const [loading, setLoading] = useState(true); // Yuklanish holatini qo'shing





  return (
    <>
      <Head>
        <title>AIsha - O'zbek tilida muloqot qilivchi sun'iy intellekt</title>
        <meta name="googlebot" content="notranslate" />
        <meta name="og:site_name" content="Aisha" />
        <meta
          name="keywords"
          content="aisha, aisha ai, aisha group, aisha community, suniy intellekt haqidagi yangiliklar. suniy intellekt nima, o'zbek tilidagi sun'iy intellekt. o'zbekcha sun'iy intellekt, uzbek sun'iy intellekt. uzbek ai, artificial intelligence in uzbek language, ai in uzbekistan, aisha qanday ishlaydi, aisha ai nima, aisha ai haqida malumot, uzbekvoice.ai, mohir ai, muxlisa ai, tts, stt, speech recognition, diarization, voice cloning, chatbot, uzbek chatbot, LLM model, suniy intellekt bilan telefonda gaplashish, suniy intellekt bilan muloqot"
        />
        <meta name="theme-color" content="#595DD2" />
        <link rel="canonical" href="https://www.yoursite.com" />
        <link rel="dns-prefetch" href="https://cdn.aisha.group" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="description"
          content="AIsha — bu bizneslar uchun sun'iy intellekt bilan integratsiyalangan telefon qo'ng'iroqlari infratuzilmasi. Hozirda bizning saytimizda Matndan nutqqa (Text-to-Speech, TTS), Nutqdan matnga (Speech-to-Text, STT), Nutqni aniqlash, Diarizatsiya va Ovozni klonlash kabi imkoniyatlarni taklif qilamiz."
        />
        <meta property="og:title" content="AIsha" />
        <meta
          property="og:description"
          content="AIsha — bu bizneslar uchun sun'iy intellekt bilan integratsiyalangan telefon qo'ng'iroqlari infratuzilmasi. Hozirda bizning saytimizda Matndan nutqqa (Text-to-Speech, TTS), Nutqdan matnga (Speech-to-Text, STT), Nutqni aniqlash, Diarizatsiya va Ovozni klonlash kabi imkoniyatlarni taklif qilamiz."
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://www.yoursite.com" />
        <meta name="twitter:title" content="AIsha" />
        <meta
          name="twitter:description"
          content="AIsha — bu bizneslar uchun sun'iy intellekt bilan integratsiyalangan telefon qo'ng'iroqlari infratuzilmasi. Hozirda bizning saytimizda Matndan nutqqa (Text-to-Speech, TTS), Nutqdan matnga (Speech-to-Text, STT), Nutqni aniqlash, Diarizatsiya va Ovozni klonlash kabi imkoniyatlarni taklif qilamiz."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AishaCommunity" />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
      </Head>
      <main>
        <div className="md:mt-[85px] mt-[24px]">
          <Hero /> {/* Hero komponentini birinchi qo'yish */}
          <Experement />
          <Cooperation />
          <Product />
          <BusinessAdvice />
          <VoiceSection />
          <Audio />
         <Blog/>
        </div>
      </main>
    </>
  );
});

export default Home;