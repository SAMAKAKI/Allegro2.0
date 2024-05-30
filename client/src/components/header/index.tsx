import React, { useState } from 'react'
import { bell, chat, delivery, heart, shoppingCart } from '../../assets/icons'
import { Link } from 'react-router-dom'
import { IoMdLogIn } from 'react-icons/io'
import { CustomSelect } from '../customSelect'

export const Header: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('Select an option');

  return (
    <div className='w-full bg-white/30 sticky z-50 top-0 backdrop-blur'>
      <div className="flex justify-between items-center container mx-auto py-3">
        <h1 className='text-5xl text-orange-500 font-bold'>allegro<sup className='text-2xl ms-1'>2.0</sup></h1>
        <form className='w-1/2 flex items-center justify-center'>
          <input type="text" name="search" className='border-[1.5px] border-zinc-300 h-12 px-3 rounded-s-xl w-[55%] placeholder-zinc-500 text-base focus:outline-orange-500' placeholder='Search everything...'/>
          <CustomSelect options={['Select an option', 'Option 1', 'Option 2']} value={selectedOption} onChange={(value) => setSelectedOption(value)}/>
          <button type='submit' className='h-12 bg-orange-500 rounded-e-xl text-white text-center w-[15%] text-lg font-semibold hover:bg-orange-600/90'>Search</button>
        </form>
        <div className='flex items-center gap-5'>
          <Link to={'#'}>
            <img src={delivery} alt="delivery" className='w-[40px]'/>
          </Link>
          <Link to={'#'}>
            <img src={heart} alt="likes" className='w-[30px]'/>
          </Link>
          <Link to={'#'}>
            <img src={chat} alt="chat" className='w-[30px]'/>
          </Link>
          <Link to={'#'}>
            <img src={bell} alt="notifications" className='w-[30px]'/>
          </Link>
          <Link to={'#'}>
            <img src={shoppingCart} alt="shopping cart" className='w-[30px]'/>
          </Link>
        </div>
        <Link to={'#'} className='w-32 text-lg py-2 rounded-xl text-white font-semibold bg-orange-500 flex items-center justify-center gap-3 hover:bg-orange-600/90'>Sign In <IoMdLogIn className='text-2xl'/></Link>
      </div>
    </div>
  )
}
