import { fetchNoteById } from '@/lib/api';
import NoteDetailsClient from './NoteDetails.client';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

interface NotePageProps {
  params: Promise<{ id: string }>;
}

const NoteDetails = async ({ params }: NotePageProps) => {
  const { id } = await params;
  const querClient = new QueryClient();

  await querClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(querClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
};
export default NoteDetails;
