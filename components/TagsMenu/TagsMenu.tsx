'use client';
import css from '@/components/TagsMenu/TagsMenu.module.css';
import { NoteTag } from '@/types/note';
import Link from 'next/link';

const TagsMenu = () => {
  const tags: NoteTag[] = ['Work', 'Personal', 'Meeting', 'Shopping', 'Todo'];
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        <Link href={`/notes/filter`} className={css.menuLink}>
          All notes
        </Link>

        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TagsMenu;
