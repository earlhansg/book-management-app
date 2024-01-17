// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../../api';
import { Book } from '@/pages';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Books[] | null>
// ) {
//   try {
//     const { data: books } = await supabase.from('books').select('*');
//     res.status(200).json(books);
//   } catch (error) {
//     console.error('Error fetching books:', error);
//   }
// }

async function getBooks(req: NextApiRequest, res: NextApiResponse<Book[] | null>) {
  try {
    const { data: books } = await supabase.from('books').select('*');
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

async function updateBooks(req: NextApiRequest, res: NextApiResponse<Book[] | null>) {
  try {
    const { id, ...updatedBooks } = req.body;
    const { error } = await supabase
      .from('books')
      .update({ ...updatedBooks })
      .eq('id', id);

      if (error) {
        console.error('Error updating data:', error.message);
        res.status(500)
      } else {
        console.log('Data updated successfully:', updatedBooks);
        res.status(204).end();
      }
    } catch (error) {
      console.error('Error updating data:', error);
      res.status(500)
    }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Book[] | null>
) {
  if (req.method === 'GET') {
    await getBooks(req, res);
  } else if (req.method === 'PUT') {
    await updateBooks(req, res);
  }
}

