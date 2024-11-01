"use client";
import React, { useState, useEffect } from "react";
import apiClient from "../../services/api"; // Axios instance
import Card from "./Card"; // Card komponentini import qilish
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader"; // SkeletonLoader komponentini import qilish

const CardGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await apiClient.get("/api/v1/blogs/");
        setBlogs(response.data.results); // Barcha natijalarni saqlaymiz
        setLoading(false);
      } catch (error) {
        console.error("Xatolik:", error);
        setError("Xatolik yuz berdi, qayta urinib ko'ring.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return <p className="text-red-500 container">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-5 container mx-auto px-4">
      {blogs.map((blog) => (
        <Card
          key={blog.id}
          date={blog.created_data}
          title={blog.title}
          description={blog.short_desc}
          // image={`https://back.aisha.group${blog.image}`}
          views={blog.views_number}
          slug={blog.slug}
        />
      ))}
    </div>
  );
};

export default CardGrid;
