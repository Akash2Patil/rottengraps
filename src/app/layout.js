import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kenya Environmental Dashboard',
  description: 'Environmental indicators and statistics for Kenya',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className='flex'>
        <SideBar/>
        <div className='w-[97%]'>
        {children}
        </div>
        </div>
      </body>
    </html>
  );
}