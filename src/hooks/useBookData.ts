import { Book } from '@/pages';
import {  MutationFunction, useMutation, useQuery, useQueryClient  } from 'react-query';

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
  // const queryKey = 'books';
  
  return useQuery<Book[], Error>('books', fetchBooks, {
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
  const queryClient = useQueryClient();

  return useMutation(
    updateBook as MutationFunction<Book, Book>,
    {
      onMutate: async (updatedBook: Book) => {
        const previousBookData = queryClient.getQueryData<Book[]>('books');

        // Cancel the 'books' query
        await queryClient.cancelQueries('books');

        // Update the 'books' query data optimistically
        queryClient.setQueryData<Book[] | undefined>('books', (oldQueryData) => {
          if (!oldQueryData) return oldQueryData;

          const updatedData = oldQueryData.map((oldBook) =>
            oldBook.id === updatedBook.id ? { ...oldBook, ...updatedBook } : oldBook
          );

          return updatedData;
        });

        return { previousBookData };
      },
    }
  );
};


