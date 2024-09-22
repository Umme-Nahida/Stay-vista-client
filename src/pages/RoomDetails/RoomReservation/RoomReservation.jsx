import React, { useState } from 'react'
import Calender from '../Calender'
import Button from '../../../components/Button/Button'
import { formatDistance } from 'date-fns'
import BookingModal from '../../../components/Dashboard/Common/Modal/BookingModal'
import useAuth from '../../../hooks/useAuth'

const RoomReservation = ({ roomData }) => {
  const {user}=useAuth()
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
const [bookingInfo,setBookingInfo]=useState({
  guest:{name:user?.displayName, email:user?.email, image:user?.photoURL},
  host: roomData?.host?.email,
  location:roomData?.location,
  price:totalPrice,
  to: value?.endDate,
  from: value?.startDate,
  title: roomData?.title,
  id:roomData?._id 
})


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
        <Button disabled={roomData.host.email === user?.email || roomData.booked} onClick={()=>setIsOpen(true)} label='Reserve' />

      </div>
      <hr />
      <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>

      {/* modal */}
      <BookingModal closeModal={closeModal} isOpen={isOpen} bookingInfo={bookingInfo}></BookingModal>
    </div>
  )
}

export default RoomReservation