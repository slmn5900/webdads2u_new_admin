"use client";
import React, { useEffect, useState } from "react";
import { FileText, Briefcase, Users, Mail, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getDashboardStats } from "../../../store/slice/dashboardSlice";
import { getAllBlogs } from "../../../store/slice/blogSlice";
import Image from "../../../common/Image";

export default function HomeSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { dashboard } = useSelector((state) => state.dashboard);
  const { blogs } = useSelector((state) => state.blog);

  // Animated counters
  const [blogCount, setBlogCount] = useState(0);
  const [positionCount, setPositionCount] = useState(0);
  const [hireCount, setHireCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);

  useEffect(() => {
    dispatch(getDashboardStats());
    dispatch(getAllBlogs());
  }, [dispatch]);

  // Animate numbers when dashboard updates
  useEffect(() => {
    if (!dashboard) return;

    animate(dashboard.blogs || 0, setBlogCount);
    animate(dashboard.positions || 0, setPositionCount);
    animate(dashboard.hires || 0, setHireCount);
    animate(dashboard.contacts || 0, setContactCount);
  }, [dashboard]);

  const animate = (target, setter) => {
    let start = 0;
    const duration = 1000;
    const step = Math.max(1, Math.floor(target / 30));

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(start);
      }
    }, duration / 30);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <button
          onClick={() => navigate("/blog")}
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded"
        >
          <Plus size={16} />
          Create Blog
        </button>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-5">
          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">Blogs</p>
            <FileText size={18} />
          </div>
          <h2 className="text-2xl font-bold mt-2">{blogCount}</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">Open Positions</p>
            <Briefcase size={18} />
          </div>
          <h2 className="text-2xl font-bold mt-2">{positionCount}</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">Hires</p>
            <Users size={18} />
          </div>
          <h2 className="text-2xl font-bold mt-2">{hireCount}</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">Contacts</p>
            <Mail size={18} />
          </div>
          <h2 className="text-2xl font-bold mt-2">{contactCount}</h2>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="font-semibold mb-4">Recent Blogs</h3>

        {blogs?.length === 0 ? (
          <p className="text-gray-400 text-sm">No recent blogs.</p>
        ) : (
          <ul className="space-y-3">
            {blogs?.slice(0, 5)?.map((blog) => (
              <li
                key={blog._id}
                onClick={() => navigate(`/blog/${blog._id}`)}
                className="flex gap-3 items-center border-b border-gray-300 last:border-none pb-2 cursor-pointer hover:bg-gray-50 rounded"
              >
                <div className="relative h-14 w-20 shrink-0">
                  <Image
                    src={blog?.blogImage[0]}
                    alt="blog"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <span className="text-sm font-medium flex-1">{blog.title}</span>
                <span className="text-xs text-gray-400">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
