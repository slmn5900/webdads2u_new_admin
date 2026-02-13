"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { getBlogDetails } from "@/app/store/slice/blog";
import CustomImage from "@/app/common/Image";
import linevictor from "@/app/assets/line-vector.svg";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/webdads2u-digital-marketing-5559913a7/",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/Webdads2u",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/webdads2u/",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/webdads2u",
  },
];

export default function BlogDetailSection({ slug }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { singleBlog, loading } = useSelector((state) => state.blog);

  useEffect(() => {
    if (slug) dispatch(getBlogDetails(slug));
  }, [slug, dispatch]);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (!singleBlog) return null;

  return (
    <>
      <section className="relative bg-black overflow-hidden">
        <CustomImage
          src={linevictor}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 mb-6 text-sm text-white/70 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Blogs
          </button>

          <h1 className="text-4xl font-bold text-white mb-2">
            {singleBlog.title}
          </h1>

          <p className="text-gray-400 mb-4">By {singleBlog.author}</p>

          <div className="flex gap-3">
            {socials.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center text-white transition mb-3"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <div className="relative bg-black">
        <CustomImage
          src={linevictor}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 -mt-24">
          <CustomImage
            src={singleBlog?.blogImage?.[0]}
            alt={singleBlog.title}
            className="w-full h-96 object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
      <section className="relative bg-black overflow-hidden">
        <CustomImage
          src={linevictor}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 max-w-5xl mx-auto py-12 px-4 text-gray-300">
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{
              __html: singleBlog.description,
            }}
          />
        </div>
      </section>
    </>
  );
}
