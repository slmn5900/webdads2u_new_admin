"use client";
const AboutHeader = () => {
  return (
    <div className="relative h-screen  overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <video
          src="https://assets.webdads2u.com/images/webdads2u-aboutus.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 h-full px-4 md:px-30 flex items-center">
        <div
          className="
            grid grid-cols-1 lg:grid-cols-[40%_20%_40%]
            w-full items-center
          "
        >
          <div>
            <span className="flex items-center gap-2 text-sm text-white md:mb-8">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              Our Story
            </span>
            <h1 className="text-2xl md:text-4xl  font-light leading-tight">
              Creating Digital Solutions with Global Impact
            </h1>
          </div>
          <div />
          <div className="text-sm md:text-sm text-white/80 leading-relaxed max-w-sm">
            <p>
              With 13+ years of experience and 100+ clients served, we help
              businesses build strong digital foundations through design,
              technology, and innovation. Our team delivers web, mobile, AI, and
              automation solutions that support real business growth across
              industries and markets.
              <span className="bg-purple-300/30 px-2 py-1 rounded">
                India
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
