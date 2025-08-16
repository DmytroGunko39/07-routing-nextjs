import NotesClient from './Notes.client';
import { fetchNotes } from '@/lib/api';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesFilterPage = async ({ params }: Props) => {
  const { slug } = await params;
  const tag = slug[0] || undefined;
  const initialData = await fetchNotes({
    page: 1,
    perPage: 9,
    search: '',
    ...(tag && tag !== 'All notes' && { tag }),
  });

  return <NotesClient initialData={initialData} tag={tag} />;
};
export default NotesFilterPage;
