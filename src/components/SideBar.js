"use client"
import React from 'react'
import useStore from '@/store/useStore';
import Link from 'next/link';

const SideBar = () => {
    const { theme, setTheme } = useStore();
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-[#FCFCFD] border-gray-200'} border-b w-full lg:w-[5vw] bg-[#FCFCFD] flex flex-row lg:flex-col  justify-center lg:justify-start items-center gap-3 pt-0 lg:inline lg:pt-5`}>
      <Link href='/'>
        <img className='hover:bg-gray-200 p-3 cursor-pointer mx-auto' src='/icons/target.svg'/>
      </Link>
      <Link href='/evapotranspiration'>
        <img className='hover:bg-gray-200 p-3 cursor-pointer mx-auto' src='/icons/drop.svg'/>
      </Link>
      <Link href='/'>
        <img className='hover:bg-gray-200 p-3 cursor-pointer mx-auto' src='/icons/mountain.svg'/>
      </Link>
      <Link href='/'>
        <img className='hover:bg-gray-200 p-3 cursor-pointer mx-auto' src='/icons/cloud.svg'/>
      </Link>
      <Link href='/'>
        <img className='hover:bg-gray-200 p-3 cursor-pointer mx-auto' src='/icons/database.svg'/>
      </Link>
    </div>
  )
}

export default SideBar