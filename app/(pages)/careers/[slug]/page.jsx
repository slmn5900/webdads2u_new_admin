import CarrersDetailSection from "@/app/components/Container/CarrersDetailSection/CarrersDetailSection";

export default async function page({ params }) {
  const { slug } = params;

  return <CarrersDetailSection slug={slug} />;
}
