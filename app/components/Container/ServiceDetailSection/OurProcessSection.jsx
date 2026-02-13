"use client";
import MainLayout from "@/app/common/MainLayout";
import { PencilRuler, Code2, BadgeCheck, Rocket } from "lucide-react";

const iconMap = {
  planning: PencilRuler,
  development: Code2,
  testing: BadgeCheck,
  deployment: Rocket,
};

export default function OurProcessSection({
  title,
  subtitle,
  description,
  steps,
}) {
  return (
    <MainLayout className="relative min-h-screen bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-4 md:px-30 py-32">
        <div className="md:sticky top-32 h-fit">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-purple-600" />
            <span className="text-lg tracking-wide">{subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6">{title}</h2>
          <p className="text-gray-400 text-lg leading-relaxed mt-3">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps?.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={index}
                className="rounded-[33px] border border-white/20 bg-white/5 backdrop-blur-xl p-8 min-h-[321px]"
              >
                {Icon && <Icon size={32} className="text-white/50 mb-4" />}

                <h3 className="text-xl mb-2 font-semibold">{step.title}</h3>
                <ul className="space-y-2">
                  {step.points?.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 leading-6">
                      <span className="h-2 w-2 rounded-full bg-purple-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}
