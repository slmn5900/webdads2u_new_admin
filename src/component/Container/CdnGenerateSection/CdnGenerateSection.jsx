import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMediaError,
  clearMediaMessage,
  deleteMedia,
  getMediaList,
  resetMedia,
} from "../../../store/slice/mediaSlice";
import { MediaCard } from "./MediaCard";
import { SkeletonCard } from "../../../common/SkeletonCard";
import { errorAlert, successAlert } from "../../../utils/alertService";
import ConfirmDeleteModal from "../../../common/ConfirmDeleteModal";
import CreateCdn from "./CreateCdn";
import UploadResultSection from "./uploadResult";

const CdnGenerateSection = () => {
  const dispatch = useDispatch();
  const {
    files,
    file,
    loading,
    message,
    error,
    pagination,
    loadingMore,
    deleteMessage,
    deleteError,
  } = useSelector((state) => state.mediaSlice);
  const [createOpen, setCreateOpen] = useState(false);
  const [uploadResult, setUploadResult] = useState(file);
  const [category, setCategory] = useState("images");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const token = encodeURIComponent(pagination?.nextToken);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(resetMedia());
    dispatch(getMediaList({ type: category, limit: 10 }));
  }, [dispatch, category]);

  useEffect(() => {
    if (file) {
      setUploadResult(file);
    }
  }, [file]);

  const filteredFiles = files.filter((item) =>
    item.key.toLowerCase().includes(search.toLowerCase()),
  );

  const handleLoadMore = () => {
    if (pagination?.hasNextPage) {
      dispatch(
        getMediaList({
          type: category,
          limit: 5,
          continuationToken: token,
        }),
      );
    }
  };

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedItem) {
      dispatch(deleteMedia({ key: selectedItem.key }));
    }
    setShowDeleteModal(false);
    setSelectedItem(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    if (message) {
      setCreateOpen(false);
      dispatch(getMediaList({ type: category, limit: 10 }));
      dispatch(clearMediaMessage());
    }
    if (error) {
      errorAlert(error);
      dispatch(clearMediaError());
    }
  }, [message, error, dispatch]);

  useEffect(() => {
    if (deleteMessage) {
      successAlert(deleteMessage);
      dispatch(getMediaList({ type: category, limit: 10 }));
      dispatch(clearMediaMessage());
    }
    if (deleteError) {
      errorAlert(deleteError);
      dispatch(clearMediaError());
    }
  }, [deleteError, deleteMessage, dispatch]);

  return (
    <>
      {createOpen ? (
        <CreateCdn onClose={() => setCreateOpen(false)} />
      ) : (
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-5">
            CDN Assets
          </h2>
          <div className="flex justify-between items-center mb-10">
            <div className="flex gap-3 items-center ">
              <input
                type="text"
                placeholder="Search files..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border px-3 py-1.5 rounded-md text-sm w-64 outline-none focus:ring-2 border-gray-300 focus:ring-gray-300"
              />
            </div>
            <div className="flex gap-4 items-center">
              <div className="inline-flex bg-gray-100 rounded-xl p-1  gap-1">
                {["images", "videos"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setCategory(tab)}
                    className={`px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                      category === tab
                        ? "bg-black text-white shadow-sm"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCreateOpen(true)}
                className="bg-black text-white px-6 py-1 rounded-md cursor-pointer"
              >
                Create
              </button>
            </div>
          </div>
          {loading ? (
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : filteredFiles.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-3 opacity-40"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <p className="text-sm">No files found</p>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {filteredFiles?.map((item) => (
                <MediaCard
                  key={item.key}
                  item={item}
                  category={category}
                  onDelete={(item) => handleDeleteClick(item)}
                />
              ))}
            </div>
          )}
          {filteredFiles.length > 0 && pagination?.hasNextPage && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleLoadMore}
                className="px-5 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-700"
              >
                {loadingMore ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
          <ConfirmDeleteModal
            isOpen={showDeleteModal}
            title="Are you sure you want to delete this file?"
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
            loading={loading}
          />
        </div>
      )}
      <UploadResultSection
        uploadResult={uploadResult}
        setUploadResult={setUploadResult}
      />
    </>
  );
};

export default CdnGenerateSection;
