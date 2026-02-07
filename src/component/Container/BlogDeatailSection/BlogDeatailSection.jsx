"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getBlogDetails } from "../../../store/slice/blogSlice";
import Image from "../../../common/Image";

export default function BlogDeatailSection() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { singleBlog, loading } = useSelector((state) => state.blog);

  useEffect(() => {
    if (id) dispatch(getBlogDetails(id));
  }, [id]);

  if (loading) return <p className="text-center py-20">Loading...</p>;

  if (!singleBlog) return null;

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <button
        onClick={() => navigate("/blog")}
        className="flex items-center gap-2 mb-6 text-sm text-gray-600 hover:text-black"
      >
        <ArrowLeft size={16} />
        Back to Blogs
      </button>

      <h1 className="text-3xl font-bold mb-2">{singleBlog.title}</h1>

      <p className="text-gray-500 mb-6">
        By {singleBlog.author}
      </p>

      <Image
        src={singleBlog?.blogImage?.[0]}
        alt={singleBlog.title}
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: singleBlog.description,
        }}
      />
    </div>
  );
}
