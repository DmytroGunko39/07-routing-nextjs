import SidebarNotes from '../SidebarNotes/SidebarNotes';
import css from '@/components/LayoutNotes/LayoutNotes.module.css';

type Props = {
  children: React.ReactNode;
};

const LayoutNotes = ({ children }: Props) => {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <SidebarNotes />
      </aside>

      <main className={css.notesWrapper}>{children}</main>
    </div>
  );
};

export default LayoutNotes;
