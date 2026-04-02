import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadMedia } from "../../../store/slice/mediaSlice";
import { ArrowLeft } from "lucide-react";

const CreateCdn = ({ onClose }) => {
  const dispatch = useDispatch();
  const [previewUrl, setPreviewUrl] = useState(null);
  const { loading } = useSelector((state) => state.mediaSlice);
  const [category, setCategory] = useState("images");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    }
  };

  const handleUpload = () => {
    if (!file || !category) {
      alert("Please select category and file");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", category);

    dispatch(uploadMedia({ formData }));
  };

  return (
    <>
      <div className="flex items-center px-6 mt-20">
        <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-xl font-semibold ">CDN Generate</h2>
      </div>
      <div className="p-6 mt-6 mx-auto bg-white rounded-xl shadow">
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="">Select Category</option>
            <option value="images">Images</option>
            <option value="videos">Videos</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Upload File
          </label>
          <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer overflow-hidden">
            {previewUrl ? (
              category === "images" ? (
                <img
                  src={previewUrl}
                  alt="preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <video
                  src={previewUrl}
                  className="w-full h-full object-cover rounded-lg"
                  controls
                />
              )
            ) : (
              <div className="flex flex-col items-center justify-center">
                <p className="text-gray-500 text-sm">
                  Click or drag file to upload
                </p>
              </div>
            )}
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>
        </div>
        <div className="flex justify-end">
          <button
            disabled={loading}
            onClick={handleUpload}
            className={`px-5 py-2 rounded-lg text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-gray-800 cursor-pointer"
            }`}
          >
            {loading ? "Generating..." : "Generate CDN Link"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateCdn;
