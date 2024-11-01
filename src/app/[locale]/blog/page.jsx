import React from "react";
import Head from "next/head";
import Image from "next/image";
import blog from "../../../images/blog.png";
import CardGrid from "@/components/card/CardGrid";
// import CardGrid from "@/components/card/Card";

const metadata = {
  title: 'AIsha - O\'zbek tilida muloqot qilivchi sun\'iy intellekt',
  description: 'AIsha — bu bizneslar uchun sun\'iy intellekt bilan integratsiyalangan telefon qo\'ng\'iroqlari infratuzilmasi. Hozirda bizning saytimizda Matndan nutqqa (Text-to-Speech, TTS), Nutqdan matnga (Speech-to-Text, STT), Nutqni aniqlash, Diarizatsiya va Ovozni klonlash kabi imkoniyatlarni taklif qilamiz.',
};

export default function Page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="googlebot" content="notranslate" />
        <meta name="og:site_name" content="Aisha" />
        <meta
          name="keywords"
          content="aisha, aisha ai, aisha group, aisha community, suniy intellekt haqidagi yangiliklar. suniy intellekt nima, o'zbek tilidagi suniy intellekt. o'zbekcha suniy intellekt, uzbek suniy intellekt. uzbek ai, artificial intellegence in uzbek language, ai in uzbekistan, aisha qanday ishlaydi, aisha ai nima, aisha ai haqida malumot, uzbekvoice.ai, mohir ai, muxlisa ai, tts, stt,  speech recognition, diarization, voice cloning, chatbot, uzbek chatbot, LLM model, suniy intellekt bilan telefonda gaplashish, suniy intellekt bilan muloqot"
        />
        <meta name="theme-color" content="#595DD2" />
        <link rel="canonical" href="https://www.yoursite.com" />
        <link rel="dns-prefetch" href="https://cdn.aisha.group" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta
          property="og:description"
          content={metadata.description}
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://www.yoursite.com" />
        <meta name="twitter:title" content={metadata.title} />
        <meta
          name="twitter:description"
          content={metadata.description}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AishaCommunity" />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
      </Head>
      <main>
        <section className="md:mt-[32px] mb-[61px]">
          <div className="container">
            <div className="bg-[#fcfcfc] max-h-[124px] p-6 rounded-[16px] border border-[#f1f1f1] border-solid flex flex-col items-center md:flex-row max-md:border-none max-md:bg-transparent">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-[700] mb-2">
                  Suniy intellekt olamidagi so'nggi yangiliklar
                </h1>
                <p className="text-gray-600 font-[400] text-[14px]">
                  Nutqni matnga (speech-to-text) va matnni nutqqa (text-to-speech)
                  o‘girish uchun API
                </p>
              </div>
              <div className="flex-shrink-0 mt-4 md:mt-0 hidden lg:flex">
                <Image
                  src={blog}
                  alt="AI Image"
                  className="w-20 h-20 lg:w-32 lg:h-32 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <CardGrid/>
        </section>
      </main>
    </>
  );
}
