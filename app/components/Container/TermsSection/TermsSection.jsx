"use client";
import MainLayout from "@/app/common/MainLayout";
import linevictor from "@/app/assets/line-vector.svg";

const TermsSection = () => {
  return (
    <MainLayout>
      <section
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
          Website Terms and Conditions of Use
        </h1>
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-medium text-white mb-2">Terms</h2>
            <p>
              By accessing this web site, you are agreeing to be bound by these
              web site terms and conditions of Use, all applicable laws and
              regulations, and agree that you are responsible for compliance
              with any applicable local laws. If you do not agree with any of
              these terms, you are prohibited from using or accessing this site.
              The materials contained in this web site are protected by
              applicable copyright and trade mark law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">Use License</h2>
            <p className="mb-3">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on webdads2u.com web site for
              personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not: modify or copy the materials; use the
              materials for any commercial purpose, or for any public display
              (commercial or non-commercial); attempt to decompile or reverse
              engineer any software contained on webdads2u.com website; remove
              any copyright or other proprietary notations from the materials;
              or transfer the materials to another person or “mirror” the
              materials on any other server. This license shall automatically
              terminate if you violate any of these restrictions and may be
              terminated by nowkart.in at any time. Upon terminating your
              viewing of these materials or upon the termination of this
              license, you must destroy any downloaded materials in your
              possession whether in electronic or printed format.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Do not modify or copy materials</li>
              <li>No commercial or public display</li>
              <li>No reverse engineering</li>
              <li>Do not remove copyrights</li>
              <li>No mirroring on other servers</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">Disclaimer</h2>
            <p>
              The materials on webdads2u website are provided as is webdad2u.com
              makes no warranties, expressed or implied, and hereby disclaims
              and negates all other warranties, including without limitation,
              implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property
              or other violation of rights. Further, webdads2u.com does not
              warrant or make any representations concerning the accuracy,
              likely results, or reliability of the use of the materials on its
              Internet web site or otherwise relating to such materials or on
              any sites linked to this site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">Limitations</h2>
            <p>
              In no event shall webdads2u.com be liable for any damages
              (including, without limitation, damages for loss of data or
              profit, or due to business interruption,) arising out of the use
              or inability to use the materials on webdads2u.com Internet site,
              even if webdads2u.com authorized representative has been notified
              orally or in writing of the possibility of such damage. Because
              some jurisdictions do not allow limitations on implied warranties,
              or limitations of liability for consequential or incidental
              damages, these limitations may not apply to you.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-white mb-2">
              Revisions and Errata
            </h2>
            <p>
              The materials appearing on webdads2u.com website could include
              technical, typographical, or photographic errors. webdads2u.com
              does not warrant that any of the materials on its website are
              accurate, complete, or current.webdads2u.com may make changes to
              the products, materials contained on its website at any time
              without notice. webdads2u.com does not, however, make any
              commitment to update the materials.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-white mb-2">Links</h2>
            <p>
              webdads2u.com has not reviewed all of the sites linked to its
              Internet web site and is not responsible for the contents of any
              such linked site. The inclusion of any link does not imply
              endorsement by webdads2u.com of the site. Use of any such linked
              web site is at the user’s own risk.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">
              Site Terms Modifications
            </h2>
            <p>
              webdads2u.com may revise these terms of use for its web site at
              any time without notice. By using this website you are agreeing to
              be bound by the then current version of these Terms and Conditions
              of Use.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">
              Governing Law
            </h2>
            <p>
              Any claim relating to webdads2u.com website shall be governed by
              jurisdiction of Chennai without regard to its conflict of law
              provisions. General Terms and Conditions applicable to Use of a
              Web Site.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TermsSection;
