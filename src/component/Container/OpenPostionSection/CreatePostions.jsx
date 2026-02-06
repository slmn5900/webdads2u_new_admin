"use client";
import { useEffect, useState } from "react";
import { Plus, Trash, ArrowLeft } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  clearMessage,
  createPosition,
  getAllPositions,
} from "../../../store/slice/positionSlice";
import { errorAlert, successAlert } from "../../../utils/alertService";

const CreatePostions = ({ onClose }) => {
  const { message, error, loading } = useSelector((state) => state.position);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    position: "",
    jobType: "Full-Time",
    mode: "Onsite",
    location: "",
    jobDescription: "",
    keyResponsibilities: [""],
    requirements: [""],
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleArrayChange = (type, index, value) => {
    const updated = [...form[type]];
    updated[index] = value;

    setForm({
      ...form,
      [type]: updated,
    });
  };

  const addField = (type) => {
    setForm({
      ...form,
      [type]: [...form[type], ""],
    });
  };

  const removeField = (type, index) => {
    const updated = form[type].filter((_, i) => i !== index);
    setForm({
      ...form,
      [type]: updated,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      keyResponsibilities: form.keyResponsibilities.filter(Boolean),
      requirements: form.requirements.filter(Boolean),
    };

    dispatch(createPosition(payload));
  };

  useEffect(() => {
    if (message) {
      successAlert(message);
      dispatch(clearMessage());
      dispatch(getAllPositions());
      onClose();
    }

    if (error) {
      errorAlert(error);
      dispatch(clearError());
    }
  }, [message, error]);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <button
        onClick={onClose}
        className="flex items-center gap-2 mb-6 text-sm cursor-pointer"
      >
        <ArrowLeft size={16} /> Back
      </button>
      <h2 className="text-2xl font-semibold mb-6">Create Position</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="position"
          placeholder="Job Title"
          value={form.position}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded outline-0"
          required
        />

        <select
          name="jobType"
          value={form.jobType}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded outline-0"
        >
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Contract</option>
        </select>

        <select
          name="mode"
          value={form.mode}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded outline-0"
        >
          <option>Onsite</option>
          <option>Hybrid</option>
          <option>Remote</option>
        </select>

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded outline-0"
          required
        />

        <textarea
          name="jobDescription"
          placeholder="Job Description"
          value={form.jobDescription}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded outline-0 min-h-[120px]"
          required
        />

        <div>
          <label className="font-medium">Key Responsibilities</label>
          {form?.keyResponsibilities?.map((item, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <input
                value={item}
                onChange={(e) =>
                  handleArrayChange(
                    "keyResponsibilities",
                    index,
                    e.target.value,
                  )
                }
                className="flex-1 border px-3 py-2 rounded outline-0"
              />
              {form.keyResponsibilities?.length > 1 && (
                <Trash
                  className="cursor-pointer text-red-500"
                  onClick={() => removeField("keyResponsibilities", index)}
                />
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("keyResponsibilities")}
            className="flex items-center gap-1 text-sm mt-2"
          >
            <Plus size={16} /> Add
          </button>
        </div>

        <div>
          <label className="font-medium">Requirements</label>
          {form.requirements.map((item, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <input
                value={item}
                onChange={(e) =>
                  handleArrayChange("requirements", index, e.target.value)
                }
                className="flex-1 border px-3 py-2 rounded outline-0"
              />

              {form.requirements.length > 1 && (
                <Trash
                  className="cursor-pointer text-red-500"
                  onClick={() => removeField("requirements", index)}
                />
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() => addField("requirements")}
            className="flex items-center gap-1 text-sm mt-2"
          >
            <Plus size={16} /> Add
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Position"}
        </button>
      </form>
    </div>
  );
};

export default CreatePostions;
