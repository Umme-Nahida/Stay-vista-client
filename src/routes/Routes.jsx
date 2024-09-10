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
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: 'dashboard', element: <DashboardLayout></DashboardLayout>,
    children:[
      {
        path:'add-room',
        element:<AddRoom></AddRoom>
      },
    
      {
        path:'my-listings',
        element:<MyListings></MyListings>
      },
    ]
  },
])
