import { Book } from '@/pages';
import { useMutation, useQuery } from 'react-query';

const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch('api/books');
  const data = await response.json();
  return data;
}

const updateBook = async (updatedData: Book) => {
  const response = await fetch('/api/books', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    throw new Error('Failed to update data');
  }
  return response.json()
}



export const useBookData = (onSuccess?: (data: Book[]) => void, onError?: (error: Error) => void) => {
  const queryKey = 'books';
  
  return useQuery<Book[], Error>('super-heroes', fetchBooks, {
    onSuccess: (data) => {
      if (onSuccess) onSuccess(data);
    },
    onError: (error) => {
      if (onError) onError(error);
    },
    select: (data) => data,
  });
}

export const useUpdateBookData = () => {
  return useMutation(updateBook)
}
