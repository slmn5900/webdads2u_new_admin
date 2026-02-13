"use client";
import { useState, useEffect } from "react";
import MainLayout from "../../../common/MainLayout";
import { ArrowLeft } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  createOurWork,
  clearError,
  clearMessage,
  getAllOurWork,
} from "../../../store/slice/ourWorkSlice";
import { successAlert, errorAlert } from "../../../utils/alertService";

const CreateOurWork = ({ onClose }) => {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.ourWork);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [services, setServices] = useState("");
  const [image, setImage] = useState(null);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    if (message) {
      successAlert(message);
      dispatch(clearMessage());
      dispatch(getAllOurWork());
      onClose();
    }

    if (error) {
      errorAlert(error);
      dispatch(clearError());
    }
  }, [message, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    services
      .split(",")
      .map((s) => s.trim())
      .forEach((item) => formData.append("services[]", item));

    if (image) formData.append("ourWorkImage", image);

    Array.from(gallery).forEach((img) =>
      formData.append("ourWorkGallery", img),
    );

    dispatch(createOurWork(formData));
  };

  return (
    <MainLayout className="py-10 min-h-screen ">
      <div className="flex  flex-col justify-start">
        <button
          onClick={onClose}
          className="flex items-center gap-2 mb- text-sm"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <h2 className="text-2xl font-semibold mb-6">Create Our Work</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow w-full  space-y-4 "
        >
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border w-full px-3 py-2 rounded outline-0 border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border w-full px-3 py-2 rounded outline-0 border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Services (comma separated)
            </label>
            <input
              value={services}
              onChange={(e) => setServices(e.target.value)}
              placeholder="React, Node, MongoDB"
              className="border w-full px-3 py-2 rounded outline-0 border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Main Image</label>
            <label
              htmlFor="mainImage"
              className="w-full h-32 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:border-black transition"
            >
              {!image ? (
                <span className="text-gray-400 text-sm">
                  Click to upload blog image
                </span>
              ) : (
                <img
                  src={URL.createObjectURL(image)}
                  className="h-full object-contain rounded"
                />
              )}
            </label>
            <input
              id="mainImage"
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Gallery Images</label>
            <label
              htmlFor="gallery"
              className="w-full h-28 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:border-black transition"
            >
              <span className="text-gray-400 text-sm">
                Click to upload gallery images
              </span>
            </label>
            <input
              id="gallery"
              type="file"
              multiple
              accept="image/*"
              hidden
              onChange={(e) => setGallery([...e.target.files])}
            />
            {gallery.length > 0 && (
              <div className="flex gap-2 mt-3 flex-wrap">
                {gallery.map((img, i) => (
                  <img
                    key={i}
                    src={URL.createObjectURL(img)}
                    className="h-16 w-16 object-cover rounded border"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              disabled={loading}
              className="bg-black text-white px-6 py-2 rounded"
            >
              {loading ? "Saving..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default CreateOurWork;
