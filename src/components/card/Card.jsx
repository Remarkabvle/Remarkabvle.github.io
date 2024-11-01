"use client";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

const Card = ({ date, title, description, image, views, slug }) => {
  return (
    <Link
      href={`/uz/blog/${slug}`}
      aria-label={`Read more about ${title}`}
      passHref
    >
      <div
        className="bg-white overflow-hidden group cursor-pointer  max-md:items-center max-md:mb-[24px] max-lg:flex max-md:px-4 max-lg:gap-[12px]"
        data-aos="fade-up"
        role="region"
        aria-labelledby={`card-title-${title}`}
      >
        <Image
          className="w-full h-48 rounded-[16px] border-2 border-white group-hover:hover:shadow-inner group-hover:border-[#595dd2] duration-[.4s] max-h-[212px] object-cover max-lg:w-[127px] max-lg:h-[79px] max-lg:rounded-[6px]"
          src={image}
          alt={title}
          width={500}
          height={300}
        />
        <div className="flex">
          <div className="pt-[10px]">
            <p className="text-sm text-[#595DD2]">{date}</p>
            <h3
              id={`card-title-${title}`}
              className="text-[20px] group-hover:text-[#595DD2] duration-[.5s] cursor-pointer font-[600] md:max-w-[300px] text-gray-900 mt-1 max-lg:text-[14px] line-clamp-2"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </h3>
            <p
              className="text-[#778292] max-lg:!hidden  mt-2 max-w-[400px]  text-[16px]  line-clamp-2"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {description}
            </p>
            {/* <p className="text-sm text-gray-400">Ko'rishlar soni: {views}</p> */}
          </div>
          <div className="flex items-center mt-4 text-blue-500 max-lg:hidden">
            <GoArrowUpRight
              className="ml-2 mb-[100px] text-[23.33px] text-[#595DD2] cursor-pointer"
              role="img"
              aria-label="External link icon"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
