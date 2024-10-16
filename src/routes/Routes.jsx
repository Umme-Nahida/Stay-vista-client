import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import DashboardLayout from '../components/Dashboard/DashboardLayout'
import AddRoom from '../components/Dashboard/Host/AddRoom'
import MyListings from '../components/Dashboard/Host/MyListings'
import HostRoute from './HostRoute'
import PrivateRoute from './PrivateRoute'
import ManageUser from '../components/Dashboard/Admin/ManageUsers'
import AdminMenu from '../components/Dashboard/Siderbar/Menu/AdminMenu'
import AdminRoute from './AdminRoute'
import MyBookings from '../components/Dashboard/Guest/MyBookings'
import Profile from '../components/Dashboard/Common/Profile/Profile'
import ManageBookings from '../components/Dashboard/Host/ManageBookings'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        
      },
      {
        path: '/room/:id',
        element: <RoomDetails></RoomDetails>,
        loader:({params})=> getRoom(params.id)
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: 'dashboard', element: <DashboardLayout></DashboardLayout>,
    children:[
      {
        path:'add-room',
        element:<PrivateRoute><HostRoute><AddRoom></AddRoom></HostRoute></PrivateRoute>
      },
    
      {
        path:'my-listings',
        element:<PrivateRoute><HostRoute><MyListings></MyListings></HostRoute></PrivateRoute>
      },
      {
        path:'manage-users',
        element:<PrivateRoute><AdminRoute><ManageUser></ManageUser></AdminRoute></PrivateRoute>
      },
      {
        path:'my-bookings',
        element: <MyBookings></MyBookings>
      },
      // host route
      {
        path:'manage-bookings',
        element: <ManageBookings></ManageBookings>
      },

      // common route
      {
        path:'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
    ]
  },
])
