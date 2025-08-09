import NotesClient from './Notes.client';
import { fetchNotes } from '@/lib/api';

const Notes = async () => {
  const initialData = await fetchNotes(1, 12, '');
  return (
    <main>
      <NotesClient initialData={initialData} />
    </main>
  );
};

export default Notes;
