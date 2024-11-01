"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TeamMember from "./TeamMember";
import Head from "next/head";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 200, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>AIsha - O'zbek tilida muloqot qilivchi sun'iy intellekt</title>
        <meta name="googlebot" content="notranslate" />
        <meta name="og:site_name" content="Aisha" />
        <meta
          name="keywords"
          content="aisha, aisha ai, aisha group, aisha community, suniy intellekt haqidagi yangiliklar. suniy intellekt nima, o'zbek tilidagi suniy intellekt. o'zbekcha suniy intellekt, uzbek suniy intellekt. uzbek ai, artificial intelligence in uzbek language, ai in uzbekistan, aisha qanday ishlaydi, aisha ai nima, aisha ai haqida malumot, uzbekvoice.ai, mohir ai, muxlisa ai, tts, stt, speech recognition, diarization, voice cloning, chatbot, uzbek chatbot, LLM model, suniy intellekt bilan telefonda gaplashish, suniy intellekt bilan muloqot"
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
      <main className="container max-md:px-4">
        <div className="text-center mb-12 max-md:mb-9" data-aos="fade-up">
          <h2 className="text-4xl max-md:text-3xl font-bold md:my-4 max-md:mb-2 mt-4 text-[#020817]">
            AIsha
          </h2>
          <p className="text-xl max-md:text-[17px] text-[#768499]">
            Artificial Intelligence that communicates perfectly in Uzbek
          </p>
        </div>

        <section className="mb-12" data-aos="fade-right">
          <h2 className="text-3xl max-md:text-2xl font-semibold mb-4 max-md:mb-2 text-[#020817]">
            About Our Project
          </h2>
          <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
            <div className="p-6 max-md:p-4 pt-6">
              <p className="text-[#768499] max-md:text-[14px]">
                Aisha bizneslar uchun kommunikatsiyani yaxshilashga
                ixtisoslashgan ilg'or yechimlarni taklif etadi. Hozirda biz
                Ovozdan Matnga (STT) va Matndan Ovozga (TTS) xizmatlarni taqdim
                etamiz va yaqin kelajakda sun'iy intellektga asoslangan telefon
                qo'ng'iroqlarini joriy etishni rejalashtirmoqdamiz. Bizning
                texnologiyalarimiz bilan bizneslar o’z samaradorligini kutish
                vaqtlarini yo'qotish, ma'lumotlar analitikasini yaxshilash,
                telefon qo’ng’iroqlarinidagi suhbat sifatini oshirish va
                mijozlarga shaxsiylashtirilgan yondashuvlarni taqdim etish bilan
                oshirmoqchi.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12" data-aos="fade-left">
          <h2 className="text-3xl max-md:text-2xl font-semibold mb-4 max-md:mb-2 text-[#020817]">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:gap-2">
            <TeamMember
              name="Elzodxon Sharofaddinov"
              role="Product Owner"
              imgSrc="https://media.licdn.com/dms/image/v2/C4D03AQH0sUP-lP_k4Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1626026862909?e=1731542400&amp;v=beta&amp;t=glcRb5s0Al58wD2KFhIAQV05Y8yDfRJAQhZDnJ4S9Rs"
              fallback="ES"
            />
            <TeamMember
              name="Tulkin Yusupov"
              role="AI Researcher"
              imgSrc="https://media.licdn.com/dms/image/v2/D4D03AQFv2ljEelefPA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720617785915?e=1731542400&amp;v=beta&amp;t=jGjg3cTQZhFhUgL1IhDs3HP0xv_oYABQluKYIr0-vsQ"
              fallback="TY"
            />
            <TeamMember
              name="Baxtiyor Maxsudov"
              role="Architect"
              imgSrc="https://media.licdn.com/dms/image/v2/C5603AQFewYlm2BeKkw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517404388159?e=1731542400&amp;v=beta&amp;t=FyMludxp8NU_H9PtvpGo2AANiRr4lhb4agsUbNxzcfU"
              fallback="BM"
            />
            <TeamMember
              name="Rifat Mamayusupov"
              role="AI/ML Engineer"
              imgSrc="https://media.licdn.com/dms/image/v2/D4D03AQF73orUXNwgZA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723387574876?e=1731542400&amp;v=beta&amp;t=yQOeZzdKbRSQeMZR4nfEHp_Nzky2cFK50A2gh9mzfes"
              fallback="RM"
            />
            <TeamMember
              name="Ravshan Jumanazarov"
              role="AI/ML Engineer"
              imgSrc="https://media.licdn.com/dms/image/v2/D4E03AQH_AChhvGxr0Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711004388003?e=1731542400&amp;v=beta&amp;t=OdN9mTvqubBRu1MOCkXw0x7DBO48Q_0mB4_wHD4r5BE"
              fallback="RJ"
            />
            <TeamMember
              name="Aziza Shokambarova"
              role="Project Manager"
              imgSrc="https://media.licdn.com/dms/image/v2/D4E03AQG-EoI5UGpa8g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1713340866973?e=1731542400&v=beta&t=o4DfLVTnAWUI_f-_Vt77mgSoWqocFYkwWw8tik1NLdY"
              fallback="AS"
            />
            <TeamMember
              name="Jaxongir Abduxamidov"
              role="Data Scientist"
              imgSrc="https://media.licdn.com/dms/image/v2/D4D03AQG6bPGCx2pxug/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723024362296?e=1731542400&amp;v=beta&amp;t=XN17Xk1VoXc5SvWjo9ppRdFOWHFh5OSeP3V_pWKa3TY"
              fallback="JA"
            />
            <TeamMember
              name="Aziz Abdumalikov"
              role="Data Scientist"
              imgSrc="https://media.licdn.com/dms/image/v2/D5603AQHr2NJ3NhBSew/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1708585946990?e=1731542400&amp;v=beta&amp;t=6i_kAVo1PTfm9KfepLvhlvBkEH7xB-P9vMDhK6Kp1aw"
              fallback="AA"
            />
            <TeamMember
              name="Shahnoza Abdualimova"
              role="Frontend Developer"
              imgSrc=""
              fallback="SA"
            />
          </div>
        </section>

        <section className="mb-9" data-aos="fade-up">
          <h2 className="text-3xl max-md:text-2xl  font-semibold mb-4 max-md:mb-2 text-[#020817]">
            Our Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-md:gap-3">
            <div
              className="bg-card text-card-foreground rounded-lg border shadow-sm"
              data-aos="zoom-in"
            >
              <div className="flex flex-col space-y-1.5 p-6 max-md:p-4 max-md:pb-2">
                <h3 className="text-lg max-md:text-[16px] font-semibold leading-none tracking-tight text-[#020817]">
                  Perfect Uzbek Communication
                </h3>
              </div>
              <div className="p-6 max-md:p-4 max-md:pt-0 pt-0">
                <p className="text-[#768499] max-md:text-[14px]">
                  Develop AI that understands and generates natural Uzbek
                  language with high accuracy.
                </p>
              </div>
            </div>
            <div
              className="bg-card text-card-foreground rounded-lg border shadow-sm"
              data-aos="zoom-in"
            >
              <div className="flex flex-col space-y-1.5 p-6 max-md:p-4 max-md:pb-2">
                <h3 className="text-lg max-md:text-[16px] font-semibold leading-none tracking-tight text-[#020817]">
                  Bridging the Language Gap
                </h3>
              </div>
              <div className="p-6 max-md:p-4 max-md:pt-0 pt-0">
                <p className="text-[#768499] max-md:text-[14px]">
                  Make advanced AI technology accessible to Uzbek-speaking
                  communities worldwide.
                </p>
              </div>
            </div>
            <div
              className="bg-card text-card-foreground rounded-lg border shadow-sm"
              data-aos="zoom-in"
            >
              <div className="flex flex-col space-y-1.5 p-6 max-md:p-4 max-md:pb-2">
                <h3 className="text-lg font-semibold   max-md:text-[16px] leading-none tracking-tight text-[#020817]">
                  Cutting-edge Technology
                </h3>
              </div>
              <div className="p-6 pt-0 max-md:p-4 max-md:pt-0">
                <p className="text-[#768499] max-md:text-[14px]">
                  Utilize the latest advancements in AI and machine learning to
                  ensure the best performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
