"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Health",
    subtitle: "We Offer More Than Just Digital Marketing!",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    stats: [
      { value: "10+", label: "Years of experience in digital marketing." },
      { value: "5+", label: "Clients across healthcare industry." },
    ],
    cases: ["CMC", "Health+", "Pharma"],
  },
  {
    title: "E-Commerce",
    subtitle: "Scaling Brands with Smart Commerce Solutions",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
    stats: [
      { value: "10+", label: "Years of e-commerce expertise." },
      { value: "5+", label: "Online stores launched." },
    ],
    cases: ["ShopX", "Brandify", "Cartly"],
  },
  {
    title: "Education",
    subtitle: "Technology That Empowers Learning",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    stats: [
      { value: "10+", label: "Years in ed-tech solutions." },
      { value: "3+", label: "Institutions empowered." },
    ],
    cases: ["EduPro", "LearnX", "Campus"],
  },
];

export default function IndustryStackedCards() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh] bg-black text-white"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {cards.map((card, index) => {
          const step = 1 / cards.length;
          const start = index * step;
          const end = start + step;
          const y = useTransform(scrollYProgress, [start, end], [180, 0]);
          const scale = useTransform(scrollYProgress, [start, end], [0.94, 1]);
          const opacity = useTransform(
            scrollYProgress,
            [start, start + step * 0.35],
            [0, 1],
          );

          return (
            <motion.div
              key={index}
              style={{
                y,
                scale,
                opacity,
                zIndex: index + 1,
              }}
              className="
                absolute
                w-[90vw] 
                h-[90vh] md:h-[70vh]
                rounded-[25px]
                bg-[#3f4043]
                p-10 md:p-14
                grid grid-cols-1 lg:grid-cols-3
                gap-12
                shadow-[0_40px_120px_rgba(0,0,0,0.6)]
              "
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold">{card.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mt-3">
                  {card.subtitle}
                </p>
                <div className="mt-10">
                  <p className="flex items-center gap-2 text-lg mb-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full" />
                    Our Services Include
                  </p>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    Web Design & Development, Mobile Apps, Digital Marketing,
                    SEO, ERP Software Solutions.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden hidden md:block">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div className="space-y-8">
                  {card.stats.map((stat, i) => (
                    <div key={i}>
                      <h4 className="text-5xl font-semibold">{stat.value}</h4>
                      <p className="text-sm text-white/70 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <div className="flex gap-4">
                    {card.cases.map((c, i) => (
                      <div
                        key={i}
                        className="w-20 h-12 rounded-lg bg-black/40 flex items-center justify-center text-sm font-semibold text-white/80"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
