import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailPage } from "@/components/site/DetailPage";
import { whyDetails } from "@/lib/offerings";

export const Route = createFileRoute("/why-ssm/$slug")({
  loader: ({ params }) => {
    const detail = whyDetails.find((item) => item.slug === params.slug);
    if (!detail) throw notFound();
    return detail;
  },
  head: ({ loaderData }) => ({ meta: [
    { title: `${loaderData?.title ?? "Why SSM"} | SSM Tuition Centre` },
    { name: "description", content: loaderData?.intro ?? "Explore the SSM Tuition Centre approach to learning." },
    { property: "og:title", content: `${loaderData?.title ?? "Why SSM"} | SSM Tuition Centre` },
    { property: "og:description", content: loaderData?.intro ?? "Explore the SSM Tuition Centre approach to learning." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: WhyDetail,
});

function WhyDetail() {
  const detail = Route.useLoaderData();
  return <DetailPage detail={detail} category="why" siblings={whyDetails} />;
}
