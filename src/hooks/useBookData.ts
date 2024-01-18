import { Book } from '@/pages';
import { useQuery, UseQueryOptions } from 'react-query';
import { supabase } from '../../api';

const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch('api/books');
  const data = await response.json();
  return data;
}

const useBookData = (onSuccess?: (data: Book[]) => void, onError?: (error: Error) => void) => {
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

export default useBookData;
