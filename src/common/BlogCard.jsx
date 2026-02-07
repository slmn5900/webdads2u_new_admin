import { useNavigate } from "react-router-dom";
import Image from "./Image";
import { Trash2, Pencil, MoreVertical } from "lucide-react";
import { useState } from "react";

export default function BlogCard({ blog, onDelete, onEdit }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-black rounded-xl overflow-hidden shadow-lg group">
      <div className="absolute top-3 right-3 z-20">
        <MoreVertical
          size={18}
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        />

        {open && (
          <div className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg border border-gray-300 text-sm">

            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
                onEdit(blog);
              }}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full"
            >
              <Pencil size={14} />
              Edit
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
                onDelete(blog._id);
              }}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 text-red-500 w-full"
            >
              <Trash2 size={14} />
              Delete
            </button>
          </div>
        )}
      </div>
      <div
        onClick={() => navigate(`/blog/${blog._id}`)}
        className="cursor-pointer"
      >
        <Image
          src={blog?.blogImage?.[0]}
          alt={blog.title}
          className="h-60 w-full object-cover group-hover:scale-105 transition"
        />
        <div className="p-5">
          <h3 className="font-semibold line-clamp-2">
            {blog.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
