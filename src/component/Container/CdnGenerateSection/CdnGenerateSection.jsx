import { useState } from "react";

const CdnGenerateSection = () => {
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none "
        >
          <option value="">Select Category</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Upload File
        </label>

        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer  transition">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-500 text-sm">
              {file ? file.name : "Click or drag file to upload"}
            </p>
          </div>

          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
      </div>
      <div className="flex justify-end">
        <button className="bg-black text-white px-5 py-2 rounded-lg transition">
          Generate CDN Link
        </button>
      </div>
    </div>
  );
};

export default CdnGenerateSection;
