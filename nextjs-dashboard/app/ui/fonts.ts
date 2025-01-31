import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  subsets: ['latin'], // Specify the subset (adjust as needed)
  weight: ['400', '700'], // Specify font weights
});