import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { BsFillSunFill } from 'react-icons/bs'
import { FaBug, FaCoins, FaRegUserCircle, FaUserFriends } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { GiGamepadCross } from 'react-icons/gi'

const LeftAside = () => {
  return (
    <>  
        <div id="aside esquerda" className="mr-10 pr-6 border-r-[1px] border-[#333333] border-solid ">
            <Image src="/Logo-dark.svg" width="200" height="40" className="px-10 cursor-pointer"/>
            <div className="pt-[7.5rem]">
              <div className="flex flex-col gap-5 text-defaulttextdark">
                <p className="text-[12px] cursor-default">Nexus tools</p>
                <div className="flex gap-5">
                  <FaRegUserCircle className="cursor-pointer" /> <Link href ="/profile" className="cursor-pointer">Profile</Link>
                </div>
                <div className="flex gap-5">
                  <GiGamepadCross className="cursor-pointer" /> <Link href ="/games" className="cursor-pointer">Games</Link> 
                </div>
                <div className="flex gap-5">
                  <FaCoins className="cursor-pointer" /> <Link href ="/promotions" className="cursor-pointer">Promotions</Link>
                </div>
                <div className="flex gap-5">
                  <FaUserFriends className="cursor-pointer" /> <Link href ="/friends" className="cursor-pointer">Friends</Link>
                </div>
                <div className="flex gap-5">
                  <BsFillSunFill className="cursor-pointer" /> <p className="cursor-pointer">Light theme</p>
                </div>
                <div className="flex flex-col"></div>
                <hr className="text-[#333333]"></hr>
                <p className="text-[12px] cursor-default mt-2">User tools</p>
                <div className="flex gap-5">
                  <AiOutlineSetting className="cursor-pointer" /> <Link href ="/profile" className="cursor-pointer">Settings</Link>
                </div>
                <div className="flex gap-5">
                  <FaBug className="cursor-pointer" /> <Link href ="/bug_report" className="cursor-pointer">Bug report</Link>
                </div>
                <div className="flex gap-5">
                  <FiLogOut className="cursor-pointer" /> <p className="cursor-pointer">Log out</p>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default LeftAside