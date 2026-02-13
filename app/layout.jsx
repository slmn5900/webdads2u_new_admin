import "./globals.css";
import ReduxProvider from "./provider/ReduxProvider";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import SmoothScrollProvider from "./common/SmoothScrollProvider";
import FixedSocialBar from "./common/FixedSocialBar";
import FixedContactBar from "./common/FixedContactBar";
import ToastProvider from "./common/ToastProvider";
import Script from "next/script";
import SchemaMarkup from "./common/SchemaMarkup";
import { globalSchemaGraph } from "./utils/schemaGraph";


export const metadata = {
  title: {
    default:
      "Best Web Development Company in Chennai | 24/7 Customer Support | Webdads2u",
    template: "%s | Webdads2u",
  },
  description:
    "Webdads2u is a professional web development company offering website design, development, SEO, and digital marketing solutions for businesses.",
  alternates: {
    canonical: "https://www.webdads2u.com",
  },
  verification: {
    google: "e1060alc688bb5d9",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KMJN6N87');
        `,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMJN6N87"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SchemaMarkup schema={globalSchemaGraph} />
        <ReduxProvider>
          <ToastProvider />
          <SmoothScrollProvider>
            <Header />
            <FixedSocialBar />
            <FixedContactBar />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
