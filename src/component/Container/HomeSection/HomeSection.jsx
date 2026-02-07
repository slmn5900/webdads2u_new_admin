"use client";
import { FileText, Briefcase, Users, Mail, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomeSection() {
  const navigate = useNavigate();

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
          <h2 className="text-2xl font-bold mt-2">0</h2>
        </div>
        <div className="bg-white shadow rounded-xl p-5">
          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">Open Positions</p>
            <Briefcase size={18} />
          </div>
          <h2 className="text-2xl font-bold mt-2">0</h2>
        </div>
        <div className="bg-white shadow rounded-xl p-5">
          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">Hires</p>
            <Users size={18} />
          </div>
          <h2 className="text-2xl font-bold mt-2">0</h2>
        </div>
        <div className="bg-white shadow rounded-xl p-5">
          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">Contacts</p>
            <Mail size={18} />
          </div>
          <h2 className="text-2xl font-bold mt-2">0</h2>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="font-semibold mb-4">Recent Activity</h3>
        <p className="text-gray-400 text-sm">No recent activity yet.</p>
      </div>
    </div>
  );
}
