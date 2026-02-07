"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../../common/BlogCard";
import {
  getAllBlogs,
  deleteBlog,
  clearBlogError,
  clearBlogMessage,
} from "../../../store/slice/blogSlice";
import { Plus } from "lucide-react";
import CreateBlog from "./CreateBlog";
import ConfirmDeleteModal from "../../../common/ConfirmDeleteModal";
import { successAlert, errorAlert } from "../../../utils/alertService";

export default function BlogList() {
  const dispatch = useDispatch();
  const [showCreate, setShowCreate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editBlog, setEditBlog] = useState(null);

  const { blogs, loading, deletedMsg, deletedError } = useSelector(
    (state) => state.blog,
  );

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  useEffect(() => {
    if (deletedMsg) {
      successAlert(deletedMsg);
      dispatch(clearBlogMessage());
      dispatch(getAllBlogs());
      setShowDelete(false);
      setShowCreate(false);
      setEditBlog(null);
    }

    if (deletedError) {
      errorAlert(deletedError);
      dispatch(clearBlogError());
    }
  }, [deletedMsg, deletedError]);

  const handleConfirmDelete = () => {
    dispatch(deleteBlog({ id: deleteId }));
  };

  return (
    <>
      {showCreate ? (
        <CreateBlog
          onClose={() => {
            setShowCreate(false);
            setEditBlog(null);
          }}
          editData={editBlog}
        />
      ) : (
        <div className="max-w-7xl mx-auto py-14 px-4">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-3xl font-bold">Latest Blogs</h1>

            <button
              onClick={() => setShowCreate(true)}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md"
            >
              <Plus size={18} />
              Create Blog
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs?.map((blog) => (
              <BlogCard
                key={blog._id}
                blog={blog}
                onDelete={(id) => {
                  setDeleteId(id);
                  setShowDelete(true);
                }}
                onEdit={(blog) => {
                  setEditBlog(blog);

                  setTimeout(() => {
                    setShowCreate(true);
                  }, 0);
                }}
              />
            ))}
          </div>

          {!blogs?.length && !loading && (
            <p className="text-center text-gray-400">No blogs found</p>
          )}
        </div>
      )}

      <ConfirmDeleteModal
        isOpen={showDelete}
        title="Delete this blog?"
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowDelete(false)}
        loading={loading}
      />
    </>
  );
}
