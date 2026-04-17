import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../../common/BlogCard";
import {
  getAllBlogs,
  deleteBlog,
  clearBlogError,
  clearBlogMessage,
} from "../../../store/slice/blogSlice";
import { Plus, Search } from "lucide-react";
import CreateBlog from "./CreateBlog";
import ConfirmDeleteModal from "../../../common/ConfirmDeleteModal";
import { successAlert, errorAlert } from "../../../utils/alertService";

export default function BlogList() {
  const dispatch = useDispatch();
  const [showCreate, setShowCreate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editBlog, setEditBlog] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const blogsPerPage = 6;

  const { blogs, loading, deletedMsg, deletedError } = useSelector(
    (state) => state.blog
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
      setCurrentPage(1);
    }

    if (deletedError) {
      errorAlert(deletedError);
      dispatch(clearBlogError());
    }
  }, [deletedMsg, deletedError]);

  const handleConfirmDelete = () => {
    dispatch(deleteBlog({ id: deleteId }));
  };

  const filteredBlogs = useMemo(() => {
    return blogs?.filter((blog) =>
      blog.title?.toLowerCase().includes(search.toLowerCase())
    );
  }, [blogs, search]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs?.slice(
    indexOfFirstBlog,
    indexOfLastBlog
  );

  const totalPages = Math.ceil(
    (filteredBlogs?.length || 0) / blogsPerPage
  );

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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
            <h1 className="text-3xl font-bold">Latest Blogs</h1>

            <div className="flex gap-3 w-full md:w-auto">
              <div className="flex items-center border rounded-md px-3 w-full md:w-64">
                <Search size={16} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search blog..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-2 py-2 outline-none text-sm"
                />
              </div>

              <button
                onClick={() => setShowCreate(true)}
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md whitespace-nowrap"
              >
                <Plus size={18} />
                Create Blog
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentBlogs?.map((blog) => (
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

          {!filteredBlogs?.length && !loading && (
            <p className="text-center text-gray-400">No blogs found</p>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center mt-10 gap-2 flex-wrap">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 rounded-md border ${currentPage === index + 1
                      ? "bg-black text-white"
                      : "bg-white text-black"
                    }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-4 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-4 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
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