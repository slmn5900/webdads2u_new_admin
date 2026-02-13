"use client";
import React, { useEffect, useState } from "react";
import MainLayout from "@/app/common/MainLayout";
import linevictor from "@/app/assets/line-vector.svg";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getAllPositions } from "@/app/store/slice/positionSlice";

export default function OpenPositions() {
  const dispatch = useDispatch();
  const { positions } = useSelector((state) => state.position);
  const router = useRouter();

  useEffect(() => {
    dispatch(getAllPositions());
  }, [dispatch]);

  return (
    <MainLayout>
      <section
        className="relative py-28 px-4 md:px-30 overflow-hidden bg-black"
        style={{
          backgroundImage: `
            url(${linevictor.src}),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "cover, 40px 40px, 40px 40px",
        }}
      >
        <div className="relative text-white">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              <p className="text-sm text-gray-300">Open Positions</p>
            </div>

            <h2 className="text-4xl md:text-5xl font-light leading-tight max-w-xl">
              Why Choose a Career at <br /> Webdads
            </h2>
          </div>
          <p className="text-gray-400 mb-6">
            Open Positions ({positions.length})
          </p>
          <div className="space-y-6">
            {positions?.map((job, i) => (
              <div
                key={i}
                className="border border-white/40 rounded-xl p-5 flex items-center justify-between gap-6 backdrop-blur"
              >
                <div>
                  <h3 className="text-xl font-semibold">{job.position}</h3>
                  <div className="flex gap-2 items-center text-sm text-gray-400 mt-1">
                    <p>{job.jobType}</p>
                    <span>/</span>
                    <p>{job.mode}</p>
                    <span>/</span>
                    <p>{job.location}</p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    router.push(
                      `/careers/${job.position
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w-]/g, "")}`,
                    )
                  }
                  className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
