"use client";
import MainLayout from "@/app/common/MainLayout";
import linevictor from "@/app/assets/line-vector.svg";

const RefundPolicy = () => {
  return (
    <MainLayout>
      <div
        className="relative y-10 md:py-30 px-4 md:px-30 text-white overflow-hidden"
        style={{
          backgroundImage: `
            url(${linevictor.src}),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "cover, 40px 40px, 40px 40px",
          backgroundColor: "#000",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">
          Refund Policy
        </h1>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-medium text-white mb-2">Return</h2>
            <p>
              Our policy lasts 6 days. If 6 days have gone from the date of
              service availed, unfortunately, we can’t offer you a refund or
              exchange.
            </p>

            <p className="mt-3">
              To complete your return, we require a receipt or proof of
              purchase.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">
              Late Or Missing Refunds
            </h2>

            <p className="mb-3">
              If you haven’t received a refund yet, first check your bank
              account again.
            </p>

            <p className="mb-3">
              Then contact your credit card company, it may take some time
              before your refund is officially posted.
            </p>

            <p className="mb-3">
              Next, contact your bank. There is often some processing time
              before a refund is posted.
            </p>

            <p>
              If you’ve done all of this and you still have not received your
              refund yet, please contact us at info@webdads2u.com
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RefundPolicy;
