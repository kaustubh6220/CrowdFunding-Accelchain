"use client"

import { headerLinks, sidebarLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Image from 'next/image'

const SidebarItems = () => {
    const pathname = usePathname()

    return (
        <>
        <br></br>
        <ul className='flex flex-col items-start ml-4 w-full gap-12 font-mono'>
            {sidebarLinks.map((link) => {
                const isActive = pathname === link.route;
                return (
                    
                    <li
                        key={link.route}
                        className={`flex justify-center items-center text-[18px] font-normal leading-[24px] ${isActive ? 'text-gray-600' : 'text-white'}`}
                    >
                        <Link href={link.route}>
                            <Image
                                src={link.imgURL}
                                alt={link.label}
                                height={20}
                                width={20}
                            />
                        </Link>
                    </li>
                    
                )
            })}
        </ul>
    </>
    )
}

export default SidebarItems
