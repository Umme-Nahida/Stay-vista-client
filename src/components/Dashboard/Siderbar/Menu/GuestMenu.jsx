import MenuItem from '../MenuItem'
import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import useRole from '../../../../hooks/useRole'
import HostModal from '../../Common/Modal/HostRequestModal'
import { useState } from 'react'
import useAuth from '../../../../hooks/useAuth'
import toast from 'react-hot-toast'
import { becomeHost } from '../../../../api/rooms'

const GuestMenu = () => {
  const {user}=useAuth()
  console.log(user.email)
  const [roles] = useRole()
  console.log(roles)
  const [isOpen,setIsOpen]=useState(false)


  // close modal
  const closeModal = ()=>{
    setIsOpen(false)
  }

  // host request modal
  const modalHandler =async()=>{
     
      try{
        const res = await becomeHost(user?.email)
        if(res.modifiedCount > 0){
         toast.success('Success! Please wait for admin confirmation')
        }else{
         toast.success('Please wait for admin approval')
        }
      }finally{
        setIsOpen(false)
      }
     
  }

  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label='My Bookings'
        address='my-bookings'
      />

      {roles?.role === 'guest' && (
        <div onClick={()=>setIsOpen(true)} className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
          <GrUserAdmin className='w-5 h-5' />

          <span className='mx-4 font-medium'>Become A Host</span>
          <HostModal modalHandler={modalHandler} closeModal={closeModal} isOpen={isOpen}/>
        </div>
      )}
    </>
  )
}

export default GuestMenu