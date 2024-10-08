import { Helmet } from 'react-helmet-async'
import useAuth from '../../../hooks/useAuth'
import { getHostBookings } from '../../../api/booking'
import TableRow from '../TableRow/TableRow'
import { useQuery } from '@tanstack/react-query'

const ManageBookings = () => {

    const {user}=useAuth()
    const {isLoading,refetch,data:bookings}=useQuery({
      queryKey:'bookings',
      queryFn: async()=> await getHostBookings(user?.email)
  
    })
  return (
    <>
      <Helmet>
        <title>Manage Bookings</title>
      </Helmet>

      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Guest Info
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      From
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      To
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {/* Table row data */}
                    {
                        bookings?.map(booking=>(
                            <TableRow key={booking._id} booking={booking}></TableRow>
                        ))
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageBookings