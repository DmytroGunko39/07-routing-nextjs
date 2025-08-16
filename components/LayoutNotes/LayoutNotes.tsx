import DefaultSidebar from '@/app/notes/filter/@sidebar/default';
import css from '@/components/LayoutNotes/LayoutNotes.module.css';

type Props = {
  children: React.ReactNode;
};

const LayoutNotes = ({ children }: Props) => {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <DefaultSidebar />
      </aside>

      <main className={css.notesWrapper}>{children}</main>
    </div>
  );
};

export default LayoutNotes;
