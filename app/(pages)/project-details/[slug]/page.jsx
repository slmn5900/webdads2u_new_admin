import ProjectDetailsSection from "@/app/components/Container/ProjectDetailsSection/ProjectDetailsSection";

export default async function page({ params }) {
  const { slug } = params;

  return <ProjectDetailsSection slug={slug} />;
}
