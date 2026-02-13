import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ArrowLeft, Plus, Trash } from "lucide-react";

import {
  createBlog,
  clearBlogError,
  clearBlogMessage,
  getAllBlogs,
  updateBlog,
} from "../../../store/slice/blogSlice";
import { successAlert, errorAlert } from "../../../utils/alertService";
import Image from "../../../common/Image";

export default function CreateBlog({ onClose, editData }) {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.blog);

  const [existingImage, setExistingImage] = useState(null);
  const [blogImage, setBlogImage] = useState(null);

  const initialForm = {
    title: "",
    project: "",
    author: "",
    description: "",
    keywords: [""],
  };

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (editData) {
      setForm({
        title: editData.title ?? "",
        project: editData.project ?? "",
        author: editData.author ?? "",
        description: editData.description ?? "",
        keywords: editData.keywords?.length ? editData.keywords : [""],
      });

      setExistingImage(editData.blogImage?.[0] || null);
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleKeywordChange = (index, value) => {
    const updated = [...form.keywords];
    updated[index] = value;
    setForm({ ...form, keywords: updated });
  };

  const addKeyword = () => {
    setForm({ ...form, keywords: [...form.keywords, ""] });
  };

  const removeKeyword = (index) => {
    setForm({
      ...form,
      keywords: form.keywords.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("title", form.title);
    payload.append("project", form.project);
    payload.append("author", form.author);
    payload.append("description", form.description);

    form.keywords
      .filter(Boolean)
      .forEach((item) => payload.append("keywords[]", item));

    if (!blogImage && existingImage) {
      payload.append("existingImage", existingImage);
    }

    if (blogImage) payload.append("blogImage", blogImage);

    if (editData) {
      dispatch(updateBlog({ id: editData._id, data: payload }));
    } else {
      dispatch(createBlog(payload));
    }
  };

  useEffect(() => {
    if (message) {
      successAlert(message);
      dispatch(getAllBlogs());
      dispatch(clearBlogMessage());
      onClose();
    }

    if (error) {
      errorAlert(error);
      dispatch(clearBlogError());
    }
  }, [message, error]);

  return (
    <div className="max-w-3xl mx-auto py-10">
      <button onClick={onClose} className="flex gap-2 mb-6 items-center">
        <ArrowLeft size={16} /> Back
      </button>

      <h2 className="text-2xl font-semibold mb-6">
        {editData ? "Update Blog" : "Create Blog"}
      </h2>

      <form
        key={editData?._id || "new"}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          name="title"
          value={form.title}
          placeholder="Blog Title"
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
          required
        />

        <input
          name="project"
          value={form.project}
          placeholder="Project"
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
        />

        <input
          name="author"
          value={form.author}
          placeholder="Author"
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
        />

        <CKEditor
          key={editData?._id || "new"}
          editor={ClassicEditor}
          data={form.description}
          config={{
            licenseKey: "GPL",
          }}
          onChange={(e, editor) =>
            setForm({ ...form, description: editor.getData() })
          }
        />

        <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center mt-5">
          <input
            type="file"
            accept="image/*"
            id="blogImage"
            hidden
            onChange={(e) => setBlogImage(e.target.files[0])}
          />

          <label
            htmlFor="blogImage"
            className="cursor-pointer text-gray-500 hover:text-black"
          >
            Click to upload blog image
          </label>

          {!blogImage && existingImage && (
            <Image
              src={existingImage}
              className="mt-4 mx-auto h-40 object-cover rounded"
            />
          )}

          {blogImage && (
            <img
              src={URL.createObjectURL(blogImage)}
              className="mt-4 mx-auto h-40 object-cover rounded"
            />
          )}
        </div>

        {form.keywords.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <input
              value={item}
              placeholder="Keyword"
              className="w-full border px-4 py-2 rounded"
              onChange={(e) => handleKeywordChange(index, e.target.value)}
            />

            {form.keywords.length > 1 && (
              <button
                type="button"
                onClick={() => removeKeyword(index)}
                className="text-red-500"
              >
                <Trash size={16} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addKeyword}
          className="flex gap-1 text-sm"
        >
          <Plus size={16} /> Add Keyword
        </button>

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-2 rounded"
        >
          {loading ? "Saving..." : editData ? "Update Blog" : "Create Blog"}
        </button>
      </form>
    </div>
  );
}
