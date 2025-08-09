// import { fetchNoteByTag } from '@/lib/api';
import NotesClient from '../Notes.client';
// import { Note } from '@/types/note';

type Props = {
  params: Promise<{ slug?: string[] }>;
};

const NotesByTag = async ({ params }: Props) => {
  const { slug } = await params;
  const tag = slug?.[0];

  // const notes: Note[] = await fetchNoteByTag(tag);

  return <NotesClient tag={tag} />;
};
export default NotesByTag;
