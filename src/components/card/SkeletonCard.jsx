"use client";
import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-white animate-pulse overflow-hidden max-md:mb-[26px] md:mb-[64px] max-lg:flex max-lg:gap-[12px]">
      <div className="w-full h-48 bg-gray-200 rounded-[16px] max-h-[212px] max-lg:w-[127px] max-lg:h-[79px] max-lg:rounded-[6px]" />
      <div className="flex">
        <div className="pt-[10px]">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
          <div className="h-6 bg-gray-200 rounded w-2/3 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-full mb-2 max-lg:hidden" />
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
        </div>
        <div className="flex items-center mt-4 text-gray-200 max-lg:hidden">
          <div className="w-6 h-6 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
