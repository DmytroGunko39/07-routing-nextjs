'use client';

import css from './NotePreview.module.css';
import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const NotePreview = ({ children }: Props) => {
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <div>
      <div>
        {children}
        <button className={css.backBtn} onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};
export default NotePreview;
