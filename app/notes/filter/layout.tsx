import LayoutNotes from '@/components/LayoutNotes/LayoutNotes';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const NoteLayout = ({ children }: Props) => {
  return (
    <section>
      <LayoutNotes>{children}</LayoutNotes>
    </section>
  );
};

export default NoteLayout;
