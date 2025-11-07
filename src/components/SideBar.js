"use client"
import React from 'react'
import useStore from '@/store/useStore';

const SideBar = () => {
    const { theme, setTheme } = useStore();
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-[#FCFCFD] border-gray-200'} border-b w-[3%] bg-[#FCFCFD] flex flex-col items-center gap-3 pt-5`}>
        <img className='hover:bg-gray-200 p-3 cursor-pointer' src='/icons/target.svg'/>
        <img className='hover:bg-gray-200 p-3 cursor-pointer' src='/icons/drop.svg'/>
        <img className='hover:bg-gray-200 p-3 cursor-pointer' src='/icons/mountain.svg'/>
        <img className='hover:bg-gray-200 p-3 cursor-pointer' src='/icons/cloud.svg'/>
        <img className='hover:bg-gray-200 p-3 cursor-pointer' src='/icons/database.svg'/>
    </div>
  )
}

export default SideBar