import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: {
    slug?: string[];
  };
};

// ✅ SEO
export async function generateMetadata({ params }: Props) {
  const filter = params.slug?.[0] || "All";

  return {
    title: `Notes: ${filter}`,
    description: `Notes filtered by ${filter}`,
    openGraph: {
      title: `Notes: ${filter}`,
      description: `Notes filtered by ${filter}`,
      url: `/notes/filter/${params.slug?.join("/") || "All"}`,
      images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
    },
  };
}

// ✅ СТОРІНКА
export default async function NotesPage({ params }: Props) {
  const tag = params.slug?.[0] === "All" ? undefined : params.slug?.[0];

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", "", 1, tag],
    queryFn: () => fetchNotes("", 1, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
