import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { BsFillSunFill } from 'react-icons/bs'
import { FaBookReader, FaBug, FaCoins, FaRegUserCircle, FaUserFriends } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { GiGamepadCross } from 'react-icons/gi'

const LeftAside = () => {
  
  return (
    <>  
        <div id="aside esquerda" className="mr-10 pr-6 border-r-[1px] border-[#333333] border-solid ">
            <Link href='/dashboard'>
              <Image src="/Logo-dark.svg" width="200" height="40" className="px-10 cursor-pointer" />
            </Link>
            <div className="pt-[5.5rem]">
              <div className="flex flex-col gap-5 text-defaulttextdark">
                <p className="text-[12px] cursor-default">Nexus tools</p>
                <div className="flex gap-5">
                  <FaRegUserCircle className="cursor-pointer" /> <Link href ="/profile" className="cursor-pointer font-bebas"><p className='cursor-pointer font-bebas text-[20px]'>Profile</p></Link>
                </div>
                <div className="flex gap-5">
                  <GiGamepadCross className="cursor-pointer" /> <Link href ="/games" className="cursor-pointer font-bebas"><p className='cursor-pointer font-bebas text-[20px]'>Games</p></Link> 
                </div>
                <div className="flex gap-5">
                  <FaCoins className="cursor-pointer" /> <Link href ="/promotions" className="cursor-pointer font-bebas"><p className='cursor-pointer font-bebas text-[20px]'>Promotions</p></Link>
                </div>
                <div className="flex gap-5">
                  <FaUserFriends className="cursor-pointer" /> <Link href ="/friends" className="cursor-pointer "><p className='cursor-pointer font-bebas text-[20px]'>Friends</p></Link>
                </div>
                <div className="flex gap-5">
                  <BsFillSunFill className="cursor-pointer" /> <p className="cursor-pointer font-bebas text-[20px]">Light theme</p>
                </div>
                <div className="flex flex-col"></div>
                <hr className="text-[#333333]"></hr>
                <p className="text-[12px] cursor-default mt-2">User tools</p>
                <div className="flex gap-5">
                  <FaBookReader className="cursor-pointer" /> <Link href ="/instructions"><p className='cursor-pointer font-bebas text-[20px]'>Instructions</p></Link>
                </div>                
                <div className="flex gap-5">
                  <AiOutlineSetting className="cursor-pointer" /> <Link href ="/profile"><p className='cursor-pointer font-bebas text-[20px]'>Settings</p></Link>
                </div>
                <div className="flex gap-5">
                  <FaBug className="cursor-pointer" /> <Link href ="/bug_report" ><p className='cursor-pointer font-bebas text-[20px]'>Bug report</p></Link>
                </div>
                <div className="flex gap-5">
                  <FiLogOut className="cursor-pointer" /> <p className="cursor-pointer font-bebas text-[20px]">Log out</p>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default LeftAside