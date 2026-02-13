"use client";
import React, { useState, useEffect } from "react";
import MainLayout from "@/app/common/MainLayout";
import linevictor from "@/app/assets/line-vector.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  createCareer,
  clearMessage,
  clearError,
} from "@/app/store/slice/career";
import Notification from "@/app/common/Notification";
import { useParams } from "next/navigation";
import { getAllPositions } from "@/app/store/slice/positionSlice";

export default function CareerDetails() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { loading, message, error } = useSelector((state) => state.career);
  const [showNotification, setShowNotification] = useState(false);
  const { positions } = useSelector((state) => state.position);

  const jobData = positions?.find(
    (job) =>
      job.position
        ?.toLowerCase()
        ?.replace(/\s+/g, "-")
        ?.replace(/[^\w-]/g, "") === slug,
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: jobData?.position || "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    careerForm: null,
  });

  useEffect(() => {
    if (!positions?.length) {
      dispatch(getAllPositions());
    }
  }, [dispatch, positions]);

  useEffect(() => {
    if (jobData) {
      setForm((prev) => ({
        ...prev,
        jobTitle: jobData.position,
      }));
    }
  }, [jobData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "careerForm") {
      const file = files[0];

      if (file && file.type !== "application/pdf") {
        alert("Please upload PDF files only");
        e.target.value = "";
        return;
      }

      setForm({ ...form, careerForm: file });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });

    dispatch(createCareer(data));
  };

  useEffect(() => {
    if (message) {
      setShowNotification(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        jobTitle: jobData?.title || "",
        dob: "",
        gender: "",
        address: "",
        city: "",
        careerForm: null,
      });

      setTimeout(() => dispatch(clearMessage()), 300);
    }
    if (error) {
      alert(error);
      dispatch(clearError());
    }
  }, [message, error, dispatch, jobData]);

  if (!jobData) return null;

  return (
    <>
      <MainLayout>
        <div
          className="relative py-10 md:py-30 px-4 md:px-30 text-white overflow-hidden"
          style={{
            backgroundImage: `
            url(${linevictor.src}),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
            backgroundSize: "cover, 40px 40px, 40px 40px",
            backgroundColor: "#000",
          }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl font-semibold mb-2">
                {jobData.position}
              </h1>
              <div className="flex gap-2 items-center text-sm text-gray-400 my-1">
                <p>{jobData.jobType}</p>
                <span>/</span>
                <p>{jobData.mode}</p>
                <span>/</span>
                <p>{jobData.location}</p>
              </div>
              <h3 className="text-xl font-medium mt-5">Job Description</h3>
              <p className="text-gray-300 mb-6">{jobData.jobDescription}</p>
              <h3 className="text-xl font-medium mb-2">Key Responsibilities</h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-6">
                {jobData?.keyResponsibilities?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h3 className="text-xl font-medium mb-2">Requirements</h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                {jobData?.requirements?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white text-black rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Career Form</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 outline-0 p-3 rounded"
                  placeholder="Name*"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 outline-0 p-3 rounded"
                  placeholder="Email*"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 outline-0 p-3 rounded"
                  placeholder="Phone*"
                />
                <select
                  name="jobTitle"
                  value={form.jobTitle}
                  onChange={handleChange}
                  className="w-full border border-gray-300 outline-0 p-3 rounded"
                >
                  <option value={jobData.position}>{jobData.position}</option>
                </select>

                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  className="w-full border border-gray-300 outline-0 p-3 rounded"
                />
                <div className="flex gap-4">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={handleChange}
                    />{" "}
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Memale"
                      onChange={handleChange}
                    />{" "}
                    Female
                  </label>
                </div>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 outline-0 p-3 rounded"
                  placeholder="Street Address"
                />
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full border border-gray-300 outline-0 p-3 rounded"
                  placeholder="City"
                />
                <input
                  type="file"
                  name="careerForm"
                  accept="application/pdf"
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </MainLayout>
      {showNotification && (
        <Notification
          title="Application Submitted"
          message="Your application has been sent successfully."
          onClose={() => setShowNotification(false)}
        />
      )}
    </>
  );
}
