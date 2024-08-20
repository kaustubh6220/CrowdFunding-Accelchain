import { Card, CardTitle } from '@/components/ui/card'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='grid grid-cols-3 p-4'>
        <Card>
          <CardTitle>Amount To Raised</CardTitle>
        </Card>
        <Card>
          <CardTitle>Amount Raised till now</CardTitle>

        </Card>
        <Card>
          <CardTitle>Days Left</CardTitle>
        </Card>
      </div>

      
    </div>
  )
}

export default page
