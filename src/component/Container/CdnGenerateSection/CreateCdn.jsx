import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadMedia } from "../../../store/slice/mediaSlice";

const CdnGenerateSection = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("images");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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
    <div className="p-6 mt-6 mx-auto bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">CDN Generate</h2>
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

        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-500 text-sm">
              {file ? file.name : "Click or drag file to upload"}
            </p>
          </div>

          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleUpload}
          className="bg-black text-white px-5 py-2 rounded-lg"
        >
          Generate CDN Link
        </button>
      </div>
    </div>
  );
};

export default CdnGenerateSection;
