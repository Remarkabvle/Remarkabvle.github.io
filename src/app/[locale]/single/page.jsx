  "use client"
  import React, { useEffect, useState } from 'react';
  import { useRouter } from 'next/router';
  import axios from 'axios';

  const SinglePage = () => {
    const [post, setPost] = useState(null);
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
      if (slug) {
        axios
          .get(`https://back.aisha.group/stt_app/blog_news/retrive/?slug=${slug}`)
          .then((response) => {
            setPost(response.data);
          })
          .catch((error) => {
            console.error("Error fetching blog post:", error);
          });
      }
    }, [slug]);

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div className="single-post">
        <h1>{post.title}</h1>
        <img src={post.image} alt={post.title} />
        <p>{post.content}</p>
      </div>
    );
  };

  export default SinglePage;
