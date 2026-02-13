import React from "react";
import MainLayout from "@/app/common/MainLayout";
import linevictor from "@/app/assets/line-vector.svg";

const PrivacyPolicySection = () => {
  return (
    <MainLayout>
      <div
        className="relative py-10 md:py-30 px-4 md:px-30 text-white overflow-hidden"
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
            Privacy Policy
          </h1>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p>
              Your privacy is super important to us! Webdads2u is committed to
              protecting your privacy and providing you with a safe and secure
              online experience. This Privacy Policy applies to Webdads2u.com,
              as well as any other website owned by Webdads2u.com It discloses
              the kinds of information we gather, how we may use it, and how we
              may share it. Please read it carefully. It may be modified
              periodically. Your continued use of our website signifies your
              acceptance of this Privacy Policy. As always, feel free to contact
              us at info@webdads2u.com with any questions.
            </p>

            <div>
              <h2 className="text-xl font-medium text-white mb-2">
                Webdads2u.com Collects Personal Information
              </h2>

              <p>
                We collect personally identifiable information to fulfill your
                orders, tell you about new products and deals, and provide you
                with an amazing shopping experience. That personal information
                includes, but is not limited to, your name, billing and shipping
                addresses, an webdads2u.com user name and password, email
                address, phone number, and financial information. We value your
                trust in us and will do everything we can to safeguard your
                privacy and the security of your transactions.
              </p>
            </div>

            <p>
              webdads2u.com does not retain financial information, other than
              possibly the last four digits of your credit card number. Our
              payment gateway is managed by Razorpay. If you enter your credit
              card information on our site, Razorpay will process the
              transaction and retain a record of it. webdads2u.com keeps no
              record of your full credit card number.
            </p>

            <p>
              Information that you submit about yourself may be used by
              webdads2u.com to provide you requested services, communicate with
              you about webdads2u.com products, improve your online experience,
              or support our continuing efforts to offer you the information and
              services you want most. webdads2u.com does provide aggregate
              statistics and information about our sales, traffic patterns and
              related site information to third parties. We also reserve the
              right to share aggregate statistical data of which your personal
              information is a part, as well as your specific personal
              information sometime in the future.
            </p>

            <p>
              In addition, webdads2u.com may, and you hereby authorize us to,
              disclose your personal information when required to do so by law,
              when webdads2u.com, in its sole discretion believes that you are
              in violation of our Terms and Conditions, or when you violate any
              state or federal laws, or webdads2u.com in its sole discretion
              deems it necessary or appropriate to protect the personal safety
              of other users of webdads2u.com or to protect the rights or
              property of webdads2u.com.
            </p>

            <div>
              <h2 className="text-xl font-medium text-white mb-2">Email</h2>
              <p>
                We know you love email! And we love to tell you about new
                arrivals. So we send emails to notify customers about new
                arrivals and special events. We may send two or more emails per
                week. You will only receive emails if you opt in to our email
                marketing. You may opt out at any time sending a request to
                info@webdads2u.com We may send you emails to confirm your order,
                send tracking information, or to communicate with you
                specifically about your order, or in response to a question
                either to our email, chat, or any of our social media accounts.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-white mb-2">
                Social Media
              </h2>
              <p>
                We are active on many social media sites and we love to spend
                time with you there. Please know that we cannot constantly
                monitor our social media pages and that any information that you
                share may be viewed by others.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-white mb-2">Cookies</h2>
              <p>
                webdadsu.com uses “cookies” to identify visitors to our website.
                Cookies are bits of information that a website transfers to an
                individual’s hard drive for record keeping purposes. Cookies can
                enhance your online experience by automatically saving your
                preferences. We use cookies because they help us to provide you
                a better online experience. The information we collect through
                the use of cookies does allow webdadsu.com to know when and for
                how long you logged on to the webdadsu.com website, so that we
                can try to understand how to better serve your needs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-white mb-2">Minors</h2>
              <p>
                webdads2u.com is a very family friendly online shopping portal.
                Our products and culture reflect that. But we do not direct our
                website or any marketing materials to minors and do not
                knowingly collect specific personal information on minors.
              </p>
            </div>
          </div>
        </div>
    </MainLayout>
  );
};

export default PrivacyPolicySection;
