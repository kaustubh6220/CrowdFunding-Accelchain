import React from 'react';
import { campaginlinks } from '@/constants';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '../ui/card';
import Image from 'next/image';
import { AiFillProfile } from 'react-icons/ai';
import { UserIcon } from 'lucide-react';

const Campagins = () => {
  return (
    <div className="w-full grid grid-cols-3 mt-8">
      {campaginlinks.map((campaign, index) => (
        <Card
          key={index}
          className={`bg-slate-800 border-slate-900 rounded-2xl shadow-md w-11/12 m-2 hover:bg-slate-700 ${
            index % 3 === 0
              ? 'justify-self-start' // Left align in the first column
              : index % 3 === 1
              ? 'justify-self-center' // Center align in the middle column
              : 'justify-self-end' // Right align in the last column
          }`}
        >
          <Image
            src={campaign.imageURL}
            alt={campaign.title}
            height={40}
            width={50}
            quality={100}
            className="w-full h-48 rounded-2xl"
          />
          <div className="p-4 w-full">
            <CardTitle className="scroll-m-20 text-xl font-semibold tracking-tight text-white">
              {campaign.title}
            </CardTitle>
            <CardDescription className="text-gray-300 mt-2 ">
              {campaign.description}...
            </CardDescription>
            <CardContent className="mt-4 w-full grid grid-cols-2 gap-4">
              <div className="text-gray-400">
                <p className="text-lg font-medium">{campaign.amountraised}</p>
                <p className="text-lg font-medium">raised of {campaign.amountToRaise}</p>
              </div>
              <div className="text-right text-gray-400">
                <p className="text-lg font-medium ">{campaign.daysLeft}</p>
                <p className="text-sm">Days Left</p>
              </div>
            </CardContent>
            <CardFooter className=" w-full flex items-start gap-2 mt-4 text-gray-300 overflow-x-hidden">
              <div className="">
                <UserIcon className="h-5 w-5 text-white" />
              </div>
              <div className="text-sm font-medium ">by {campaign.by}89hbcvw0983</div>
            </CardFooter>
          </div>

        </Card>
      ))}
    </div>
  );
};

export default Campagins;
