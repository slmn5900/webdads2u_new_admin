"use client";
import Image from "next/image";
import client1 from "@/app/assets/client1.svg";
import client2 from "@/app/assets/client2.svg";
import client3 from "@/app/assets/client3.svg";
import client4 from "@/app/assets/client4.svg";
import client5 from "@/app/assets/client5.svg";
import client6 from "@/app/assets/client6.svg";
import client7 from "@/app/assets/client7.svg";
import client8 from "@/app/assets/client8.svg";
import client9 from "@/app/assets/client9.svg";
import client10 from "@/app/assets/client10.svg";
import client11 from "@/app/assets/client11.svg";
import client12 from "@/app/assets/client12.svg";

const partners = [
  client1, client2, client3, client4, client5, client6,
  client7, client8, client9, client10, client11, client12,
];

const MarqueeRow = ({ reverse = false }) => (
  <div className="marquee">
    <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
      {[...partners, ...partners].map((logo, idx) => (
        <div key={idx} className="logo-card">
          <Image src={logo} alt="partner" className="md:w-[140px] md:h-[80px] w-[81px]"  />
        </div>
      ))}
    </div>
  </div>
);

export default function PartnersRecognition() {
  return (
    <section className="bg-[#1e1f23] py-10 md:py-20 overflow-hidden">
      <div className="space-y-10">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
