// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../../api';
import { Book } from '@/pages';

async function getBooks(req: NextApiRequest, res: NextApiResponse<Book[] | { error: string }>) {
  try {
    const { data: books } = await supabase.from('books').select('*');
    if(books) {
      res.status(200).json(books);
    }
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateBooks(req: NextApiRequest, res: NextApiResponse<Book[] | null | { error: string }>) {
  try {
    const { id, ...updatedBooks } = req.body;
    const { data, error } = await supabase
      .from('books')
      .update({ ...updatedBooks })
      .eq('id', id)
      .select();

    if (error) {
      console.error('Error updating data:', error.message);
      res.status(422).json({ error: 'Failed to update data' });
    } else {
      console.log('Data updated successfully', data);
      res.status(200).json(data ? data[0] : {}); // Return an empty object if there is no data
    }
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Book[] | null | { error: string }>
) {
  if (req.method === 'GET') {
    await getBooks(req, res);
  } else if (req.method === 'PUT') {
    await updateBooks(req, res);
  }
}
