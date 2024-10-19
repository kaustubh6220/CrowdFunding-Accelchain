import React from 'react'
import Link from 'next/link'
import { AiFillFacebook, AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'

const ContactUs = () => {
  return (
    <div className=' flex justify-between p-4'>
        <div className=' flex flex-row gap-4 text-white'>
            <h1>Email : support@fundverse.io</h1>
            <h2>Phone : +1 (800) 123-4567</h2>
        </div>
        <div className=' flex flex-row gap-4'>
            <Link href='#'>
                <AiFillTwitterCircle className=' text-blue-400 text-2xl'/>
            </Link>
            <Link href='#'>
                <AiOutlineInstagram className=' text-white bg-gradient-to-tr from-yellow-500 to-pink-600 rounded-md text-2xl'/>
            </Link>
            <Link href='#'>
                <AiFillFacebook className=' text-blue-600 rounded-md text-2xl'/>
            </Link>
        </div>
    </div>
  )
}

export default ContactUs
