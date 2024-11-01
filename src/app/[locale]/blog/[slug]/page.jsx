"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import apiClient from "../../../../services/api";
import "./SinglePage.css";
import clock from "../../../../images/clock.svg";
import eye from "../../../../images/eye.svg";
import Home from "../../../../images/Home.svg";
import removeSecondsAndMilliseconds from "@/utilities";
import Image from "next/image";
import Link from "next/link";
import SocialMedia from "@/components/socialMedia/socialMedia";
import { Inter } from "next/font/google";
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SinglePage = () => {
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const { slug } = useParams();
  const [language, setLanguage] = useState("UZ");
  const pathname = usePathname();

  // onMount functionality
  useEffect(() => {
    // This code runs once when the component is mounted
    console.log("Component has mounted");

    return () => {
      // Cleanup code when the component is unmounted (optional)
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setLanguage("EN");
    } else if (pathname.startsWith("/ru")) {
      setLanguage("RU");
    } else {
      setLanguage("UZ");
    }
  }, [pathname]);

  useEffect(() => {
    if (slug) {
      apiClient
        .get(`api/v1/?slug=${slug}`)
        .then((response) => {
          setPost(response.data);
          if (response.data.id && response.data.category) {
            apiClient
              .get(
                `https://back.aisha.group/stt_app/blog_news_category/filter/?id=${response.data.id}&category=${response.data.category}`
              )
              .then((res) => {
                setRelatedPosts(res.data);
              })
              .catch((error) => {
                console.error("Error in fetching related posts:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Error in retrieving the blog post:", error);
        });
    }
  }, [slug]);

  if (!post) {
    return <SkeletonLoader />; // Show skeleton loader while data is loading
  }

  return (
    <section className={inter.className} id="inter">
      <div className="container mx-auto px-4  max-md:px-4" id="inter">
        <div
          className="flex flex-col lg:flex-row justify-between w-full"
          id="inter"
        >
          <div className="left-content border mt-8  md:w-[68.5%] w-full">
            <div className="flex px-4 sm:px-8 gap-2 items-center py-4">
              <Image src={Home} alt="home" />
              <Link href="/" className="duration-[.5s] hover:text-[#595DD2]">
                Bosh sahifa
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="#778292" />
              </svg>
              <Link
                href={`/${language.toLowerCase()}/blog`}
                className="duration-[.5s] hover:text-[#595DD2]"
              >
                Blog
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="#778292" />
              </svg>
              <p className="duration-[.5s] hover:text-[#595DD2]">Maqola</p>
            </div>
            <hr />
            <h1 className="pt-8 px-4 sm:px-8 title" id="inter">
              {post.title}
            </h1>
            <div className="flex gap-4 px-4 sm:px-8 mt-2 mb-4">
              <span className="flex gap-1 items-center">
                <Image src={clock} alt="clock" />
                <p className="time" id="inter">
                  {post.created_data}
                </p>
                <p className="time" id="inter">
                  {removeSecondsAndMilliseconds(post.created_time)}
                </p>
              </span>
              <span className="flex gap-1 items-center">
                <Image src={eye} alt="views" />
                <p className="time" id="inter">
                  {post.views_number}
                </p>
              </span>
            </div>
            <div
              className="post-content px-4 sm:px-8"
              style={{ fontFamily: "Inter, sans-serif" }}
              id="inter"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="px-4 sm:px-8 mt-6">
              <p className="text-[#2B2B2B] text-[18px] font-[600]">
                Ijtimoiy havolalar
              </p>
              <div className="mb-8">
                <SocialMedia />
              </div>
            </div>
          </div>

          {relatedPosts?.results?.length > 0 && (
            <div className="right-content mt-8 lg:w-[28%] w-full max-h-[720px] h-auto rounded-[16px] border-[1.5px] border-[#F1F1F1] bg-white backdrop-blur-[32px] lg:ml-4">
              <h2 className="right-content-title px-4 sm:px-5 pt-5" id="inter">
                O‘xshash yangiliklar
              </h2>
              {relatedPosts.results.map((relatedPost) => (
                <div
                  key={relatedPost?.id}
                  className="related-post p-5 border-b"
                >
                  <Link
                    href={`/${language.toLowerCase()}/blog/${
                      relatedPost?.slug
                    }`}
                    className="text-[18px] hover:text-[#595dd2] duration-[.5s] font-semibold leading-[120%] text-[#2B2B2B] overflow-hidden text-ellipsis self-stretch line-clamp-2"
                  >
                    {relatedPost?.title}
                  </Link>
                  <div className="mt-2 flex gap-1 items-center">
                    <p className="time">{relatedPost.created_data}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                    >
                      <circle cx="2" cy="2" r="2" fill="#778292" />
                    </svg>
                    <p className="time" id="inter">
                      {removeSecondsAndMilliseconds(relatedPost.created_time)}
                    </p>
                  </div>
                </div>
              ))}
              <Link
                href={`/${language.toLowerCase()}/about`}
                className="flex w-full p-4  justify-center items-center gap-2 rounded-[10px] max-w-[300px] hover:bg-[#595DD2] hover:text-white duration-[.6s] mx-auto mt-4 bg-[rgba(89,93,210,0.10)] text-[#595DD2] text-[16px] font-semibold"
              >
                Barcha yangiliklar
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SinglePage;