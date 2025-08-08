import css from '@/components/TagsMenu/TagsMenu.module.css';
import { NoteTag } from '@/types/note';

const TagsMenu = () => {
  const tags: NoteTag[] = ['Work', 'Personal', 'Meeting', 'Shopping', 'Todo'];

  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <a href={`/tags/${tag.toLowerCase()}`} className={css.menuLink}>
              {tag}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TagsMenu;
