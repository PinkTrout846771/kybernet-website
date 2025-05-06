import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ClientsPage from './pages/ClientsPage.jsx'
import Navbar from './Navbar.jsx'

import './index.css'

const bg = 'bg-amber-50 bg-radial flex flex-col justify-center items-center max-w-[2000px] w-full'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className='w-screen h-screen bg-amber-50'><div className={bg}><Navbar page='home' /><HomePage /></div></div>,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/home',
    element: <div className='w-screen h-screen bg-amber-50 flex justify-center items-start'><div className={bg}><Navbar page='home' /><HomePage /></div></div>,
  },
  {
    path: '/team',
    element: <div className={bg}><Navbar page='team' /><TeamPage /></div>,
  },
  {
    path: '/clients',
    element: <div className='w-screen h-screen bg-amber-50 flex justify-center items-start'><div className={bg}><Navbar page='clients' /><ClientsPage /></div></div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
