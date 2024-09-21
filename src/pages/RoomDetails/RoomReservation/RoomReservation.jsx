import React, { useState } from 'react'
import Calender from '../Calender'
import Button from '../../../components/Button/Button'
import { formatDistance } from 'date-fns'
import BookingModal from '../../../components/Dashboard/Common/Modal/BookingModal'

const RoomReservation = ({ roomData }) => {
 console.log(roomData)
 const [value, setValue] = useState({
    startDate: roomData?.from ? new Date(roomData.from) : new Date(),
    endDate: roomData?.to ? new Date(roomData.to) : new Date(),
    key: 'selection',
});

const [isOpen,setIsOpen]=useState(false)

// close modal funtion
const closeModal =()=>{
  setIsOpen(false)
}

//   const handleSelect = ranges => {
//     setValue({ ...value })
//   }

// get total days
const totalDays = parseFloat(
  formatDistance(new Date(roomData?.to),new Date(roomData?.from)).split(' ')[0]
)
 

const totalPrice = totalDays * roomData?.price;

// this is booking info



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
        <Button onClick={()=>setIsOpen(true)} label='Reserve' />

      </div>
      <hr />
      <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>

      {/* modal */}
      <BookingModal closeModal={closeModal} isOpen={isOpen} bookingInfo={roomData}></BookingModal>
    </div>
  )
}

export default RoomReservation