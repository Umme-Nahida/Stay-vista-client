import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider'
import { router } from './routes/Routes'
import { Toaster } from 'react-hot-toast'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <HelmetProvider>
    <Toaster />
    <RouterProvider router={router} />
    </HelmetProvider>
  </AuthProvider>
)
