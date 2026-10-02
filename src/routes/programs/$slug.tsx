import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailPage } from "@/components/site/DetailPage";
import { programDetails } from "@/lib/offerings";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const detail = programDetails.find((item) => item.slug === params.slug);
    if (!detail) throw notFound();
    return detail;
  },
  head: ({ loaderData }) => ({ meta: [
    { title: `${loaderData?.title ?? "Program"} Tuition | SSM Tuition Centre` },
    { name: "description", content: loaderData?.intro ?? "Explore tuition programs at SSM Tuition Centre." },
    { property: "og:title", content: `${loaderData?.title ?? "Program"} Tuition | SSM Tuition Centre` },
    { property: "og:description", content: loaderData?.intro ?? "Explore tuition programs at SSM Tuition Centre." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProgramDetail,
});

function ProgramDetail() {
  const detail = Route.useLoaderData();
  return <DetailPage detail={detail} category="programs" siblings={programDetails} />;
}
