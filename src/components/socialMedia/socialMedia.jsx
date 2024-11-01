import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { PiTelegramLogo } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";

// import { FaArrowRight } from "react-icons/fa";

const socialMedia = () => {
  return (
    <div>
      <div className="flex space-x-4 mt-4  md:justify-start ">
        <a
          href="https://www.instagram.com/aisha.uzbekistan/"
          target="_blank"
          aria-label="Instagram"
          className="text-[slateblue] bg-[#ececf8] p-[10px] rounded-[15px] max-w-[48px] max-h-[48px] hover:bg-[slateblue] hover:text-[#ececf8] duration-[.5s] focus:outline-none focus:ring-2 focus:ring-slateblue"
        >
          <AiOutlineInstagram size={24} />
        </a>
        <a
          href="https://t.me/aisha_uzbekistan"
          target="_blank"
          aria-label="Telegram"
          className="text-[slateblue] bg-[#ececf8] p-[10px] rounded-[15px] hover:bg-[slateblue] hover:text-[#ececf8] duration-[.5s] focus:outline-none focus:ring-2 focus:ring-slateblue"
        >
          <PiTelegramLogo size={24} />
        </a>
        <a
          href="https://t.me/aisha_uzbekistan"
          target="_blank"
          aria-label="Telegram"
          className="text-[slateblue] bg-[#ececf8] p-[10px] rounded-[15px] hover:bg-[slateblue] hover:text-[#ececf8] duration-[.5s] focus:outline-none focus:ring-2 focus:ring-slateblue"
        >
          <RiTwitterXFill size={24} />
        </a>
        <a
          href=""
          target="_blank"
          aria-label="Facebook"
          className="text-[slateblue] bg-[#ececf8] p-[10px] rounded-[15px] hover:bg-[slateblue] hover:text-[#ececf8] duration-[.5s] focus:outline-none focus:ring-2 focus:ring-slateblue"
        >
          <SlSocialFacebook size={24} />
        </a>
        {/* <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  aria-label="YouTube"
                  className="text-[slateblue] bg-[#ececf8] p-[10px] rounded-[15px] hover:bg-[slateblue] hover:text-[#ececf8] duration-[.5s] focus:outline-none focus:ring-2 focus:ring-slateblue"
                >
                  <AiOutlineYoutube size={24} />
                </a> */}
      </div>
    </div>
  );
};

export default socialMedia;
