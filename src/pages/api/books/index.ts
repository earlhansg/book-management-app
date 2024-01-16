// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../../api';
import { Books } from '@/pages';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Books[] | null>
) {
  try {
    const { data: books } = await supabase.from('books').select('*');
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}
