"use client"

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
    const pathname= usePathname()

  return (
    <ul className=' flex items-center w-full gap-8 font-mono '>
        {headerLinks.map((link)=>{
            const isActive = pathname ===link.route;
            return(
                <li
                key={link.route}
                className={`${isActive ? ('text-green-600'):('text-white')} flex justify-center items-center text-[18px] font-normal leading-[24px]`}
                >
                    <Link href={link.route}>{link.label}</Link>
                </li>
            )
        })}
    </ul>
  )
}

export default NavItems
