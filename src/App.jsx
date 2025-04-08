import React from 'react'
import Landing from '../src/components/Landing'
import NotFound from '../src/components/core/NotFound'
import Login from '../src/components/auth/Login'
import Pay from '../src/components/payment/Pay'
import Landlord from '../src/components/dashboard/Landlord'
import Chat from '../src/components/dashboard/ChatInbox'
import SignUp from '../src/components/auth/SignUp'
import { createBrowserRouter, RouterProvider, Route, Routes, HashRouter } from 'react-router-dom'
import Pricing from './components/core/Pricing'

// import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
      errorElement: <NotFound />,
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: '/pricing',
      element: <Pricing />,
      errorElement: <NotFound />,
    },
    {
      path: '/signup',
      element: <SignUp />,
      errorElement: <NotFound />,
    },
    {
      path: '/pay',
      element: <Pay />,

    },
    {
      path: '/dashboard',
      element: <Landlord />,

    },

    {
      path: '/chat',
      element: <Chat />,

    },


  ]);

  return <RouterProvider router={router} />;
}

export default App
