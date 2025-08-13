import NotePreview from './NotePreview.client';
import css from './NotePreview.module.css';
import { fetchNoteById } from '@/lib/api';

type Props = {
  params: { id: string };
};

const PreviewPage = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  const formattedDate = note.updatedAt
    ? `Update at:${note.updatedAt}`
    : `Create at:${note.createdAt}`;

  return (
    <NotePreview>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.content}>
            {note.content || 'No content available.'}
          </p>
          <p className={css.date}>{formattedDate}</p>
        </div>
      </div>
    </NotePreview>
  );
};

export default PreviewPage;
