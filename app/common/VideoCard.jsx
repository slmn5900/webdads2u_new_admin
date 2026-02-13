"use client";
import { VolumeX, Volume2 } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function VideoCard({ video, isActive, onActivate }) {
  const videoRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      setSoundOn(false);
      setIsPlaying(false);
    }
  }, [isActive]);

  const handleHover = () => {
    if (!isPlaying) {
      onActivate();
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  };

  const handleLeave = () => {
    if (!soundOn && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    onActivate();
    const videoEl = videoRef.current;

    if (isPlaying && soundOn) {
      videoEl.pause();
      videoEl.currentTime = 0;
      videoEl.muted = true;
      setSoundOn(false);
      setIsPlaying(false);
    } else {
      videoEl.muted = false;
      videoEl.play().then(() => {
        setSoundOn(true);
        setIsPlaying(true);
      });
    }
  };

  return (
    <div
      className="
        relative rounded-3xl overflow-hidden group
        bg-white
        h-[321px] sm:h-[380px] lg:h-[420px]
        min-w-[260px] sm:min-w-0
        cursor-pointer
        border-2 border-gray-300 p-2
      "
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        playsInline
        preload="auto"
        className="
          w-full h-full object-cover
          transition-transform duration-500
          rounded-3xl
        "
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center pointer-events-none">
        {soundOn ? (
          <Volume2 className="text-white w-5 h-5" />
        ) : (
          <VolumeX className="text-white w-5 h-5" />
        )}
      </div>
    </div>
  );
}
