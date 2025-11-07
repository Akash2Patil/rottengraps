'use client';
import { Moon, Sun, MapPin } from 'lucide-react';
import useStore from '@/store/useStore';

export default function Header() {
  const { theme, setTheme } = useStore();

  return (
    <header className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-[#FCFCFD] border-gray-200'} border-b sticky top-0 z-50`}>
      <div className="mx-auto px-4 sm:px-5 lg:px-5 py-4 flex items-center justify-between">

        <div className='flex gap-5'>
          <img src='/logo.svg'/>
          <img src='/logo1.svg' />
        </div>
        <div className='flex gap-3'>
          <img className='cursor-pointer hover:bg-gray-200 p-2 rounded-lg' src='/icons/download.svg'/>
          <img className='cursor-pointer hover:bg-gray-200 p-2 rounded-lg' src='/icons/book.svg'/>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`p-2 rounded-lg cursor-pointer ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
            <div className='bg-[#264C73] flex justify-center items-center rounded-full w-[40px] h-[40px] text-xl font-semibold'>
              J
            </div>
            </div>
      </div>
    </header>
  );
}