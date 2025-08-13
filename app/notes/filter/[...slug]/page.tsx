import NotesClient from '../Notes.client';

type Props = {
  params: Promise<{ slug?: string[] }>;
};

const NotesByTag = async ({ params }: Props) => {
  const { slug } = await params;
  const tag = slug?.[0];

  return <NotesClient tag={tag} />;
};
export default NotesByTag;
