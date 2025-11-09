import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rottengrapes task',
  description: 'Environmental indicators and statistics for Kenya',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className='flex flex-col lg:flex-row'>
        <SideBar/>
        <div className='w-full lg:w-[95%]'>
        {children}
        </div>
        </div>
      </body>
    </html>
  );
}