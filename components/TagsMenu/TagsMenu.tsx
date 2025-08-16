'use client';
import css from '@/components/TagsMenu/TagsMenu.module.css';
import { NoteTag } from '@/types/note';
import Link from 'next/link';
import { useState } from 'react';

const TagsMenu = () => {
  const tags: NoteTag[] = [
    'All notes',
    'Work',
    'Personal',
    'Meeting',
    'Shopping',
    'Todo',
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className={css.menuContainer}>
      <button onClick={toggleMenu} className={css.menuButton}>
        Notes {isOpen ? '▴' : '▾'}
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          {/* <li className={css.menuItem}>
            <Link
              href={`/notes/filter`}
              className={css.menuLink}
              onClick={() => setIsOpen(false)}
            >
              All notes
            </Link>
          </li> */}

          {tags.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <Link
                href={
                  tag === 'All notes' ? 'noters/filter' : `/notes/filter/${tag}`
                }
                className={css.menuLink}
                onClick={() => setIsOpen(false)}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default TagsMenu;
