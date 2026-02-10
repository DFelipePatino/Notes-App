import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Note {
  id: number;
  note: string;
  createdAt: number;
}

interface NotesContextType {
  notes: Note[];
  addNote: (note: string) => void;
  deleteNote: (id: number) => void;
  isLoading: boolean;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

const STORAGE_KEY = '@notes_app_notes';

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load notes from storage on mount
  useEffect(() => {
    loadNotes();
  }, []);

  // Save notes to storage whenever notes change
  useEffect(() => {
    if (!isLoading) {
      saveNotes();
    }
  }, [notes, isLoading]);

  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      console.error('Error loading notes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveNotes = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch (error) {
      console.error('Error saving notes:', error);
    }
  };

  const addNote = (note: string) => {
    if (note.trim().length > 0) {
      const newNote: Note = {
        id: Date.now(),
        note: note.trim(),
        createdAt: Date.now(),
      };
      setNotes((prevNotes) => [newNote, ...prevNotes]);
    }
  };

  const deleteNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, isLoading }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
}
