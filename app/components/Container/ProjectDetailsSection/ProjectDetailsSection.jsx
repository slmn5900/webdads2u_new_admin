"use client";

import Image from "next/image";
import Link from "next/link";
import Laptopimg from "@/app/assets/ourwork-bg.webp";
import Hold from "@/app/assets/Holding-bg.webp";
import { Check, Star } from "lucide-react";

const features = [
  "Attractive Design",
  "Optimized Site Speed",
  "Advanced Security",
  "Engaging Content",
  "Responsive Website",
  "Accessibility",
];

const challenges = [
  {
    title: "Elegant Layout",
    description:
      "It was one of the requests made by Bloom Holdings to create a website with a classy design and easy-to-navigate pages to help visitors avoid any type of hassle.",
  },
  {
    title: "User Friendly Design",
    description:
      "Websites with a responsive design provide access to all types of users regardless of their screen sizes. So, we created a fluid website for Bloom Holding so that they can reach a wider audience and perform better on Google SERPs.",
  },
  {
    title: "Traffic Handling",
    description:
      "Sometimes, websites crash due to heavy load or traffic by the users. These websites are not scalable and frustrate the visitors. To avoid this, we built a stable website for Bloom Holdings that could accommodate heavy traffic easily.",
  },
];

const ProjectDetailsSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-b0">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      <div className="relative z-10 mx-auto  px-4 md:px-30 space-y-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              <p className="text-lg tracking-widest text-gray-300 ">
                Case Study
              </p>
            </div>
            <h1 className="mb-6 text-5xl  text-white">Bloom Holding</h1>
            <p className="max-w-xl text-2xl text-white font-medium  leading-relaxed ">
              Bloom Holding is one of the UAE’s leading conglomerates founded in
              2007 in Abu Dhabi. They specialize in luxury mixed-use communities
              and operate across real estate, education, hospitality, and
              facilities management.
            </p>
            <Link
              href="#"
              target="_blank"
              className="mt-8 inline-flex text-lg rounded-full bg-purple-600 px-6 py-2 font-semibold text-white transition hover:bg-purple-700"
            >
              Visit Website
            </Link>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative rotate-6">
              <Image
                src={Laptopimg}
                alt="Bloom Holding Website"
                className="rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
        <div className="bg-black py-20 px-4 text-white  rounded-3xl border-white/20">
          <div className="border border-white rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-8 p-15">
                <p className="text-2xl leading-relaxed text-white max-w-xl">
                  Upon Bloom Holding’s requirement, Digital Gravity developed a
                  sleek and appealing website for them. They wanted their
                  website to carry their charm and elegance.
                </p>
              </div>
              <div className="md:col-span-4 p-12 relative border-l ">
                <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                  <div>
                    <p className="text-white text-2xl mb-1">Industry</p>
                    <h4 className="text-lg font-medium">Corporate</h4>
                  </div>
                  <div>
                    <p className="text-white text-2xl mb-1">Technologies</p>
                    <h4 className="text-lg font-medium">Website Development</h4>
                  </div>
                  <div>
                    <p className="text-white text-2xl mb-1">Launched</p>
                    <h4 className="text-lg font-medium">2007</h4>
                  </div>
                  <div>
                    <p className="text-white text-2xl mb-1">Country</p>
                    <h4 className="text-lg font-medium">UAE</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t"></div>
            <div className="my-16 flex justify-center">
              <div className="rounded-3xl overflow-hidden w-full max-w-7xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                  alt="Dummy Project"
                  width={1800}
                  height={800}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              <p className="text-lg text-white tracking-widest ">
                About the Client
              </p>
            </div>
            <h2 className="text-4xl  text-white mb-6">
              Committed to Enriching Lives
            </h2>
            <p className="text-white text-lg leading-relaxed max-w-3xl">
              Bloom Holding is a top-notch corporate giant making marks in
              various industries in the UAE. It was founded in 2007 with the aim
              of delivering world-class services to the people of UAE. They have
              launched numerous successful projects with an attractive return on
              investment while also contributing to the economy and betterment
              of the UAE.
            </p>
          </div>
          <div className="relative overflow-hidden bg-black py-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" />

            <div className="relative z-10 ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
                <div className="rounded-[33px] bg-[#121212] p-12 shadow-[0_0_80px_rgba(0,0,0,0.6)] h-full flex flex-col">
                  <h2 className="text-4xl font-light text-white mb-6">
                    Our Services for Bloom Holding
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Bloom Holding asked us to make a website with a timeless
                    design for them so that they can easily showcase their
                    portfolio to their visitors. We conducted in-depth research
                    on the industry trends, competitors, and audience
                    preferences. This approach helped us to understand user
                    behavior and build the website accordingly. Our designers
                    put a lot of thought into the color scheme and the layout to
                    create a website that meets Bloom Holding’s expectations.
                  </p>
                </div>
                <div className="h-full">
                  <div className="rounded-[33px] overflow-hidden shadow-2xl h-full">
                    <Image
                      src={Hold}
                      alt="Bloom Holding Website"
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 ">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              <p className="text-sm text-white tracking-widest uppercase">
                Our Challenges
              </p>
            </div>
            <h2 className="text-4xl  text-white ">Challenges We Overcame</h2>
          </div>
          <div className="rounded-3xl border border-white overflow-hidden">
            {challenges?.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-10 py-10 border-b border-white last:border-b-0"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-3 h-2.5 w-2.5 rounded-full bg-purple-500 shrink-0" />
                  <h3 className="text-4xl font-medium text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white text-xl leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              <p className="text-lg text-white tracking-widest ">The Result</p>
            </div>
            <h2 className="text-5xl  text-white mb-6">What We Delivered</h2>
            <p className="text-white leading-relaxed text-2xl font-medium max-w-xl">
              In response to the request made by Bloom Holding, we created an
              attractive website with a strong strategy, engaging visuals, and a
              polished user experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features?.map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-white bg-white/5 backdrop-blur-xl p-6 min-h-[220px]
                           shadow-[0_0_40px_rgba(168,85,247,0.15)]"
              >
                <div className="mb-4 flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                  <Check size={13} />
                </div>
                <p className="text-2xl font-medium text-white leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] " />
      </div>
      <section className="relative bg-black text-white  overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-700/30 blur-[120px] rounded-full"></div>
        <div className="relative z-10  px-6 md:px-20">
          <div className="flex items-center gap-3 mb-14">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <p className="text-white text-lg tracking-wide">Results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 text-center md:text-left">
            <div className="py-8 md:py-0 md:px-12 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-2xl text-white mb-6">User Engagement</p>
              <h2 className="text-7xl font-light">88%</h2>
            </div>
            <div className="py-8 md:py-0 md:px-12 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-2xl text-white mb-6">Conversion Rate</p>
              <h2 className="text-7xl font-light">8%</h2>
            </div>
            <div className="py-8 md:py-0 md:px-12 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-2xl text-white mb-6">Site Security</p>
              <h2 className="text-7xl font-light">100%</h2>
            </div>
            <div className="py-8 md:py-0 md:px-12">
              <p className="text-2xl text-white mb-6">Responsiveness</p>
              <h2 className="text-7xl font-light">97%</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-black text-white py-24 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-700/30 blur-[120px] rounded-full"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <p className="text-white text-sm tracking-wide">
              What Our Client Say
            </p>
          </div>
          <div className="flex justify-center gap-3 mb-8 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" stroke="none" size={28} />
            ))}
          </div>
          <h2 className="text-2xl md:text-4xl leading-relaxed md:leading-snug font-light max-w-4xl mx-auto">
            The website delivered by Digital Gravity worked wonders for our
            business. Thanks to them, we were able to showcase our portfolio to
            a wider audience. We will be looking forward to another
            collaboration in the future. Highly recommended.
          </h2>
        </div>
        <div className="px-30 mx-auto mt-20 grid md:grid-cols-2 gap-8 relative z-10">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
              alt="Dummy Project 1"
              width={800}
              height={600}
              className="w-full h-[350px] object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop"
              alt="Dummy Project 2"
              width={800}
              height={600}
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProjectDetailsSection;
