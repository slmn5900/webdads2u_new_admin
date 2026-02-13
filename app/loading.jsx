"use client";
import Image from "next/image";
import webdadaslogo from "@/app/assets/webdadaslogo.svg";
export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={webdadaslogo}
          alt="Webdads Logo"
          width={140}
          height={140}
          priority
          className="animate-pulse"
        />
        <div className="w-10 h-10 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
      </div>
    </div>
  );
}
