"use client";
import CustomImage from "@/app/common/Image";
import { getAllSocialMedia } from "@/app/store/slice/socialMediaSlice";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SocialAutoScroll() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.social);
  console.log(list);

 useEffect(() => {
  if (!list.length) {
    dispatch(getAllSocialMedia());
  }
}, [dispatch, list.length]);


  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-light text-white">
          Connect on <br /> Our Social
        </h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...list, ...list].map((item, i) => (
            <div
              key={i}
              className="w-[280px] h-[360px] rounded-2xl overflow-hidden shrink-0"
            >
              <CustomImage
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
