import { Inter } from '@next/font/google';
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Head from "next/head";

// Inter shriftini import qilish
const inter = Inter({
  subsets: ['latin'], // 'latin' subsetini ishlatmaymiz
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Shrift vaznlar
  variable: "--font-inter",
});

export default async function LocaleLayout({ children, params: { locale } }) {
  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.className}>
      <head>
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
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
