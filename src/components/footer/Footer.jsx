import Image from "next/image";
import { useTranslations } from "next-intl";
import commeta from "../../images/commeta.svg";
import logo from "../../images/Logo.svg";
import SocialMedia from "../socialMedia/socialMedia";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[#fcfcfc] px-4 md:px-8 md:mt-[57px]">
      <hr />
      <div className="container">
        <div className="mx-auto px-30 pt-[35px]">
          <div className="flex flex-col md:flex-row justify-between md:items-start">
            <div className="md:text-left mb-6 md:mb-0">
              <div className="flex items-center md:justify-start">
                <Image src={logo} alt="Company Logo" />
              </div>

              <p className="text-gray-500 mt-2 text-[16px] font-[400] max-w-[464px]">
                {t("businessDescription")}
              </p>
              <SocialMedia />
            </div>

            <div className="flex flex-col md:flex-row md:space-x-8 max-md:justify-start">
              <div className="md:text-left mb-6 md:mb-0">
                <h4 className="text-[14px] md:ml-6 font-[400] text-[#2b2b2b]">
                  {t("products.mk")}
                </h4>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      href="/uz/stt"
                      className="text-[#778292] text-[16px] font-[600] md:duration-[.5] flex items-center gap-1 group md:focus:outline-none md:focus:ring-2 md:focus:ring-slateblue"
                    >
                      <FaAngleRight className="md:opacity-0 transform translate-x-1 md:group-hover:opacity-100 transition-all duration-500 md:group-hover:translate-x-6 md:group-hover:text-[#595DD2]" />
                      <span className="transform translate-x-1 md:group-hover:translate-x-7 transition-transform duration-500 md:group-hover:text-[#595DD2]">
                        {t("products.stt")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/uz/tts" // Barcha linklarni birinchi linkga o'xshatamiz
                      className="text-[#778292] text-[16px] font-[600] md:duration-[.5] flex items-center gap-1 group focus:outline-none focus:ring-2 focus:ring-slateblue"
                    >
                      <FaAngleRight className="md:opacity-0 transform translate-x-1 md:group-hover:opacity-100 transition-all duration-500 md:group-hover:translate-x-6 md:group-hover:text-[#595DD2]" />
                      <span className="transform translate-x-1 md:group-hover:translate-x-7 transition-transform duration-500 md:group-hover:text-[#595DD2]">
                        {t("products.tts")}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="md:text-left">
                <h4 className="text-[14px]  md:ml-6  font-[400] text-[#2b2b2b]">
                  {t("company.tk")}
                </h4>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      href="/uz/about" // Barcha linklarni birinchi linkga o'xshatamiz
                      className="text-[#778292] text-[16px] font-[600] md:duration-[.5] flex items-center gap-1 group md:focus:outline-none md:focus:ring-2 md:focus:ring-slateblue"
                    >
                      <FaAngleRight className="md:opacity-0 transform translate-x-1 md:group-hover:opacity-100 transition-all duration-500 md:group-hover:translate-x-6 md:group-hover:text-[#595DD2]" />
                      <span className="transform translate-x-1 md:group-hover:translate-x-7 transition-transform duration-500 md:group-hover:text-[#595DD2]">
                        {" "}
                        {t("company.aboutUs")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/uz/blog" // Barcha linklarni birinchi linkga o'xshatamiz
                      className="text-[#778292] text-[16px] font-[600] md:duration-[.5] flex items-center gap-1 group md:focus:outline-none md:focus:ring-2 md:focus:ring-slateblue"
                    >
                      <FaAngleRight className="md:opacity-0 transform translate-x-1 md:group-hover:opacity-100 transition-all duration-500 md:group-hover:translate-x-6 md:group-hover:text-[#595DD2]" />
                      <span className="transform translate-x-1 md:group-hover:translate-x-7 transition-transform duration-500 md:group-hover:text-[#595DD2]">
                        {t("company.blog")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/uz/privacy" // Barcha linklarni birinchi linkga o'xshatamiz
                      className="text-[#778292] text-[16px] font-[600] md:duration-[.5] flex items-center gap-1 group md:focus:outline-none md:focus:ring-2 md:focus:ring-slateblue"
                    >
                      <FaAngleRight className="md:opacity-0 transform translate-x-1 md:group-hover:opacity-100 transition-all duration-500 md:group-hover:translate-x-6 md:group-hover:text-[#595DD2]" />
                      <span className="transform translate-x-1 md:group-hover:translate-x-7 transition-transform duration-500 md:group-hover:text-[#595DD2]">
                        {t("company.privacy")}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 py-4 border-t border-gray-200 mt-6">
          <div className="mx-auto flex flex-col sm:flex-row justify-between">
            <span className="text-gray-500 text-sm mb-2 sm:mb-0 text-6">
              © 2024 AIsha. All rights reserved.
            </span>
            <a
              href="https://sharh.commeta.uz/en"
              target="_blank"
              className="flex items-center gap-2 p-1.5 max-md:max-w-[200px] rounded-md bg-[rgba(226,230,234,0.70)]"
            >
              <p className="text-[#8E9BA8] text-[14px] font-roboto font-normal leading-[130%] pr-2">
                {t("poweredBy")}
              </p>
              <Image src={commeta} alt="Powered by Commeta" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
