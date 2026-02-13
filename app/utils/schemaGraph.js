// Full Schema.js

export const organizationSchema = {
  "@type": "Organization",
  "@id": "https://www.webdads2u.com/#organization",
  name: "Webdads2u Pvt Ltd",
  url: "https://www.webdads2u.com/",
  logo: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1765197314/webdads2u/webdads2u-christmas-logo.png",
  image:
    "https://res.cloudinary.com/dbpv95wd8/image/upload/v1765197314/webdads2u/webdads2u-christmas-logo.png",
  email: "info@webdads2u.com",
  telephone: "+91 88256 07550",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "No: S19, Subham Complex 2nd Floor, North Park Street, Ambattur O.T",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600053",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 88256 07550",
    contactType: "customer support",
    email: "info@webdads2u.com",
    url: "https://www.webdads2u.com/contact-us",
  },
  sameAs: [
    "https://www.facebook.com/Webdads2u",
    "https://www.instagram.com/webdads2u/",
    "https://www.linkedin.com/company/webdads2u-private-limited/",
    "https://x.com/webdads2u",
  ],
};

export const localBusinessSchema = {
  "@type": "ProfessionalService",
  "@id": "https://www.webdads2u.com/#localbusiness",
  name: "Webdads2u Pvt Ltd",
  url: "https://www.webdads2u.com/",
  logo: organizationSchema.logo,
  image: organizationSchema.image,
  description:
    "Webdads2u Pvt Ltd is a professional web development company based in Chennai, India, offering web design, branding, digital marketing, app development, CRM, ERP, and e-commerce solutions with 12+ years of industry experience.",
  telephone: "+91 88256 07550",
  email: "info@webdads2u.com",
  address: organizationSchema.address,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.058048,
    longitude: 80.1865728,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Chennai, India",
  },
  contactPoint: organizationSchema.contactPoint,
  sameAs: organizationSchema.sameAs,
  parentOrganization: {
    "@id": organizationSchema["@id"],
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": "https://www.webdads2u.com/#website",
  url: "https://www.webdads2u.com/",
  name: "Webdads2u",
  alternateName: "Webdads2u Pvt Ltd",
  description:
    "Webdads2u is a professional web development and digital solutions company in Chennai offering website design, digital marketing, branding, app development, CRM, ERP, and e-commerce solutions.",
  publisher: {
    "@type": "Organization",
    "@id": organizationSchema["@id"],
  },
  inLanguage: "en-IN",
};

export const webPageSchema = {
  "@type": "WebPage",
  "@id": "https://www.webdads2u.com/#homepage",
  url: "https://www.webdads2u.com/",
  name: "Webdads2u | Web Development & Digital Solutions Company in Chennai",
  description:
    "Webdads2u Pvt Ltd helps businesses grow with web design, digital marketing, branding, app development, CRM, ERP, and e-commerce solutions.",
  isPartOf: { "@id": websiteSchema["@id"] },
  about: { "@id": organizationSchema["@id"] },
  inLanguage: "en-IN",
};

export const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes WebDads2u different from other companies in Chennai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WebDads2u stands out as a trusted web development and web design company in Chennai because we follow a structured, transparent, and result-driven approach. Our in-house experts also handle branding, digital marketing, automations, and app development, giving businesses a complete digital solution under one roof.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after launching the website or app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Whether it is a website, mobile app, or e-commerce platform, we provide continuous after-support. Our team manages updates, fixes, performance improvements, and new feature additions to keep your digital product running smoothly.",
      },
    },
    {
      "@type": "Question",
      name: "How does WebDads2u ensure timely project delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project follows a clear roadmap with defined milestones, approvals, and regular progress updates. This organized workflow ensures predictability, smooth execution, and on-time delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Can you manage services beyond web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. In addition to web development, we work as a digital marketing company, branding agency, and provide expert solutions for CRM and ERP development, mobile app development, and e-commerce development in Chennai.",
      },
    },
    {
      "@type": "Question",
      name: "How transparent is your development process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We maintain full transparency through regular updates, preview links, documented changes, and clear communication. Clients always know the current status and the next steps in the project.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with both startups and established brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with startups building their first digital presence and with established brands that need advanced automation, CRM or ERP systems, custom platforms, or mobile applications.",
      },
    },
    {
      "@type": "Question",
      name: "How long does professional web development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard business website usually takes between 15 and 30 days. Complex platforms such as e-commerce websites, CRM-integrated systems, or custom dashboards may take 30 to 60 days depending on features and requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a difference between website development and web application development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A website mainly delivers information, while a web application enables user interaction such as logins, dashboards, bookings, orders, and automation. Businesses seeking operational efficiency often choose web application development with CRM or ERP integration.",
      },
    },
    {
      "@type": "Question",
      name: "Is digital marketing important after building a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely. A well-built website needs visibility to perform. Digital marketing helps attract the right audience, improve search rankings, and build consistent brand growth after launch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer mobile app development along with websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide Android, iOS, and hybrid mobile app development services to complement websites and e-commerce platforms, helping businesses improve engagement and reach customers more effectively.",
      },
    },
  ],
};

// export const schemaGraph = {
//   "@context": "https://schema.org",
//   "@graph": [
//     organizationSchema,
//     localBusinessSchema,
//     websiteSchema,
//     webPageSchema,
//     faqSchema,
//   ],
// };

// GLOBAL schema (used in RootLayout)
export const globalSchemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    webPageSchema
  ],
};

