import React from 'react'
import { Card, CardDescription, CardTitle } from '../ui/card'

const AboutUs = () => {
  return (
    <div className='w-full grid grid-cols-4 gap-2 p-2 text-center '>
        <Card className=' bg-transparent border-emerald-500 border-2'>
            <CardTitle className=' text-white mt-2'>About Us</CardTitle>
            <hr className='m-4 border-emerald-500'/>
            <CardDescription className=' text-lg p-2 '>
                At FundVerse, we believe in the power of decentralized technology to create a more transparent, accessible, and secure crowdfunding experience for everyone. Our mission is to revolutionize the way ideas are funded, making it easier for individuals and organizations to connect with supporters and backers from all around the world, all through the power of blockchain technology.            
            </CardDescription>

        </Card>
        <Card className=' bg-transparent border-emerald-500'>
            <CardTitle className=' text-white mt-2'>Why Web3?</CardTitle>
            <hr className='m-4 border-emerald-500'/>
            <CardDescription className=' text-lg p-2'>
                Blockchain technology is at the heart of our platform, ensuring that every transaction is secure, transparent, and immutable. By leveraging the power of smart contracts, we eliminate intermediaries, giving backers confidence that their contributions are used exactly as intended. This also allows campaign creators to access funding directly, without delays or unnecessary fees.
            </CardDescription>

        </Card>
        <Card className=' bg-transparent border-emerald-500'>
            <CardTitle className=' text-white mt-2 text-lg'>Secure, Trustless Crowdfunding</CardTitle>
            <hr className='m-4 border-emerald-500'/>
            <CardDescription className=' text-lg p-2'>
                Traditional crowdfunding often involves intermediaries and opaque processes, but with FundVerse, security and trust are built into the system. Every donation is recorded on the blockchain, providing an unchangeable and transparent record of funds. Through the use of cryptocurrency payments, we enable a fast, borderless, and frictionless experience for both campaign creators and backers.
            </CardDescription>

        </Card>
        <Card className=' bg-transparent border-emerald-500'>
            <CardTitle className=' text-white mt-2'>Empowering Innovators</CardTitle>
            <hr className='m-4 border-emerald-500'/>
            <CardDescription className=' text-lg p-2'>
                Whether you are raising funds for a startup, a creative project, social causes, or community-driven initiatives, FundVerse provides the tools you need to succeed. Our platform empowers innovators and creators to connect with like-minded supporters who share their vision, making it possible to bring groundbreaking ideas to life through decentralized crowdfunding.
            </CardDescription>

        </Card>
    </div>
  )
}

export default AboutUs
