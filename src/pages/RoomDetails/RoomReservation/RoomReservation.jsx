import React, { useState } from 'react'
import Calender from '../Calender'
import Button from '../../../components/Button/Button'

const RoomReservation = ({ roomData }) => {
 console.log(roomData)
 const [value, setValue] = useState({
    startDate: roomData?.from ? new Date(roomData.from) : new Date(),
    endDate: roomData?.to ? new Date(roomData.to) : new Date(),
    key: 'selection',
});

//   const handleSelect = ranges => {
//     setValue({ ...value })
//   }

  return (
    <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
      <div className='flex flex-row items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {roomData?.price}</div>
        <div className='font-light text-neutral-600'>night</div>
      </div>
      <hr />
      <div className='flex justify-center'>
        <Calender room={roomData} />
      </div>

      <hr />
      <div className='p-4'>
        <Button label='Reserve' />

      </div>
      <hr />
      <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>$ {roomData?.price}</div>
      </div>
    </div>
  )
}

export default RoomReservation