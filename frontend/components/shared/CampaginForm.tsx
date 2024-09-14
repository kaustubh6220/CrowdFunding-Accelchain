"use client"

import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Calendar } from '../ui/calendar'
import DatePicker from 'react-date-picker'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { CalendarIcon } from 'lucide-react'
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { useRouter } from 'next/navigation'


const CampaginForm = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const router = useRouter()

  return (
    <div className=' flex flex-col items-center mt-4'>
        <h1 className=' p-4 w-fit text-center text-xl text-white bg-slate-800 rounded-md'>
            Start a Campagin 🚀
        </h1>
        
        <div className=' w-full grid grid-cols-2 p-4'>
            <div className=' p-4'>
                <Label className=' text-lg text-slate-400'>Your Name</Label>
                <Input className=' mt-2 bg-slate-700 border-slate-700 ring-slate-700'/>
            </div>
            <div className=' p-4'>
                <Label className=' text-lg text-slate-400'>Campagin Title</Label>
                <Input className=' mt-2 bg-slate-700 border-slate-700 ring-slate-700'/>
            </div>

            <div className=' p-4 col-span-2'>
                <Label className='text-lg text-slate-400'>Story</Label>
                <Textarea className=' mt-2 bg-slate-700 border-slate-700 ring-slate-700'/>
            </div>

            <div className=' p-4'>
                <Label className=' text-lg text-slate-400'>Goal</Label>
                <Input className=' mt-2 bg-slate-700 border-slate-700 ring-slate-700'/>
            </div>
            <div className=' p-4 flex flex-col w-full'>
                <Label className=' text-lg text-slate-400'>End Date</Label>
                <Popover>
                    <PopoverTrigger className=' w-full mt-2 rounded-md bg-slate-700 border-slate-700' asChild>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                        >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 ">
                        <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        />
                    </PopoverContent>
                    </Popover>

            </div>
            <div className=' p-4 col-span-2'>
                <Label className=' text-lg text-slate-400'>Image URL</Label>
                <Input className=' mt-2 w-full bg-slate-700 rounded-md border-slate-700'/>
            </div>
        
        </div>
        <Button onClick={(e)=> router.push('/')} className=' bg-transparent rounded-md mb-4 hover:border-violet-600 border-2'>
            Submit New Compagin
        </Button>
    </div>
  )
}

export default CampaginForm
