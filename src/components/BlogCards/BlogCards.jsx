import React, { useEffect, useState } from 'react';
import apiClient from '../../services/api'; // Axios instance

const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Yuklanish holati
  const [error, setError] = useState(null); // Xatolik holati

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // API chaqiruv
        const response = await apiClient.get('blog_news/all/');
        console.log('API dan kelgan ma\'lumot:', response.data.results); // Konsolda ma'lumotni ko'rish
        setBlogs(response.data.results); // Faqatgina 'results' ni saqlaymiz
        setLoading(false); // Yuklash tugadi
      } catch (error) {
        console.error('Bloglarni yuklashda xatolik:', error); // Xatolikni chiqaramiz
        setError('Xatolik yuz berdi, iltimos qayta urinib ko\'ring.');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Yuklanmoqda...</p>; // Yuklanayotganini ko'rsatish
  }

  if (error) {
    return <p>{error}</p>; // Xatolik haqida xabar
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {Array.isArray(blogs) && blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={`https://back.aisha.group${blog.image}`}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.short_desc}</p>
              <span className="text-sm text-gray-400">{blog.created_data}</span>
              <p className="text-sm text-gray-400">Ko'rishlar soni: {blog.views_number}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Bloglar topilmadi.</p>
      )}
    </div>
  );
};

export default BlogCards;
