import { fetchNoteById } from "@/lib/api/notes";

type Props = {
  params: {
    id: string;
  };
};

export default async function NotePage({ params }: Props) {
  const note = await fetchNoteById(params.id);

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <p>{note.tag}</p>
    </div>
  );
}

export async function generateMetadata({ params }: Props) {
  const note = await fetchNoteById(params.id);

  return {
    title: note.title,
    description: note.content,
    openGraph: {
      title: note.title,
      description: note.content,
      url: `/notes/${params.id}`,
      images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
    },
  };
}
