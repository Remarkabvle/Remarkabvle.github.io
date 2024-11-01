// components/SkeletonLoader.jsx
import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-5 container mx-auto px-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-white p-4  rounded-lg ">
          <div className="bg-gray-200 h-32 rounded-lg animate-pulse mb-4" /> {/* Image Skeleton */}
          <div className="bg-gray-200 h-6 rounded-lg animate-pulse mb-2" /> {/* Title Skeleton */}
          <div className="bg-gray-200 h-4 rounded-lg animate-pulse mb-2" /> {/* Description Skeleton */}
          {/* <div className="bg-gray-200 h-4 rounded-lg animate-pulse mb-2" /> Another Description Skeleton */}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
