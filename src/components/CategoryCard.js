'use client';
import Link from 'next/link';

export default function CategoryCard({ title, subtitle, value, icon, theme, link }) {
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-sm w-[340px] shadow-md p-6 transition-all hover:shadow-xl border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>

      <div className="flex flex-col items-start justify-between">
        <Link href={link} className="hover:bg-gray-200 p-2 flex justify-center item-center w-fit ml-auto">
          <img src="/icons/uparrow.svg"/>
        </Link>
        <div className="flex-1">
          <div className={`p-3 rounded-lg`}>
          {icon}
        </div>
          <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h3>
          <div className='w-[90%] h-[0.5px] bg-zinc-300'></div>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
            {subtitle}
          </p>
        </div>
        
      </div>
      <div className={`text-5xl flex justify-between font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#32669A]'} mb-4`}>
        {value}
        <div className={`text-sm font-normal ${theme === 'dark' ? 'text-white' : 'text-[#8B8D98]'} mb-4`}>
          <p>(Unit/Unit)</p>
          <p className={`text-sm font-normal ${theme === 'dark' ? 'text-white' : 'text-[#32669A]'} mb-4`}>Sub-section metric</p>
        </div>
      </div>
    
    </div>
  );
}