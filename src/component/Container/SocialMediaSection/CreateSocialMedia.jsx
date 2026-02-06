"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createSocialMedia,
  clearSocialError,
  clearSocialMessage,
  getAllSocialMedia,
} from "../../../store/slice/socialMediaSlice";
import { successAlert, errorAlert } from "../../../utils/alertService";
import { ArrowLeft, Upload } from "lucide-react";

export default function CreateSocialMedia({ onClose }) {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((s) => s.socialMedia);

  const [form, setForm] = useState({
    title: "",
    socialMediaImage: null,
  });

  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const autoTitle = file.name.replace(/\.[^/.]+$/, ""); 
      setForm({
        ...form,
        title: autoTitle,
        socialMediaImage: file,
      });

      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("title", form.title);
    payload.append("socialMediaImage", form.socialMediaImage);

    dispatch(createSocialMedia(payload));
  };

  useEffect(() => {
    if (message) {
      successAlert(message);
      dispatch(clearSocialMessage());
      dispatch(getAllSocialMedia());
      onClose();
    }

    if (error) {
      errorAlert(error);
      dispatch(clearSocialError());
    }
  }, [message, error]);

  return (
    <div className=" max-w-xl  mx-auto">
      <button
        onClick={onClose}
        className="flex items-center gap-2 mt-6 text-sm cursor-pointer"
      >
        <ArrowLeft size={16} /> Back
      </button>
      <h2 className="text-2xl font-semibold mb-6">Create Position</h2>
      <form onSubmit={handleSubmit} className="p-10  space-y-4">
        <input
          placeholder="Platform Name"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border p-2 rounded outline-0"
          required
        />
        <label className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
          {preview ? (
            <img src={preview} className="h-32 object-contain" alt="preview" />
          ) : (
            <>
              <Upload size={32} />
              <p className="text-sm text-gray-500 mt-2">
                Click to upload image
              </p>
            </>
          )}
          <input type="file" accept="image/*" hidden onChange={handleImage} />
        </label>
        <button
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded w-full"
        >
          {loading ? "Saving..." : "Save Social Media"}
        </button>
      </form>
    </div>
  );
}
