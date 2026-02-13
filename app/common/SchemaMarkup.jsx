import Script from "next/script";

export default function SchemaMarkup({ schema }) {
  if (!schema) return null;

  return (
    <Script
      id="schema-ld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
