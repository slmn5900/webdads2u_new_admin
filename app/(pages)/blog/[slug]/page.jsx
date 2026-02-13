import BlogDetailSection from "@/app/components/Container/BlogDetailSection/BlogDetailSection";

const SITE_URL = "https://www.webdads2u.com";
export async function generateMetadata({ params }) {
  const { slug } = params;
  return {
    title: `${slug.replace(/-/g, " ")} | Blog`,
    description: `Read our latest blog on ${slug.replace(/-/g, " ")}.`,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
  };
}

export default function Page({ params }) {
  const { slug } = params;
  return <BlogDetailSection slug={slug} />;
}
