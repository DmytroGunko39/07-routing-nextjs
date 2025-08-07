import axios from 'axios';
import type { NewNoteData, Note, DeleteNoteResponse } from '../types/note';

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
  page: number;
  perPage: number;
}

const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

if (!myKey) {
  throw new Error('NOTEHUB_TOKEN is missing in environment variables');
}

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';

export const fetchNotes = async (
  page: number = 1,
  perPage: number = 12,
  search: string = '',
): Promise<FetchNotesResponse> => {
  const response = await axios.get<FetchNotesResponse>(`/notes`, {
    params: {
      page,
      perPage,
      ...(search.trim() ? { search: search.trim() } : {}),
    },
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
};

export const createNote = async (notesData: NewNoteData) => {
  const response = await axios.post<Note>('/notes', notesData, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
};

export const deleteNote = async (
  noteId: string,
): Promise<DeleteNoteResponse> => {
  const response = await axios.delete<DeleteNoteResponse>(`/notes/${noteId}`, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
};

export const fetchNoteById = async (id: string) => {
  const response = await axios.get<Note>(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
};
