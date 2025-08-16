import LayoutNotes from '@/components/LayoutNotes/LayoutNotes';
import React from 'react';

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NoteLayout = ({ children, sidebar }: Props) => {
  return (
    <section>
      <LayoutNotes>
        {sidebar}
        {children}
      </LayoutNotes>
    </section>
  );
};

export default NoteLayout;
