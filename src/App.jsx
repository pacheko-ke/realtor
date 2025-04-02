import React from 'react'
import { useState } from 'react'
import Landing from '../src/components/Landing'
import NotFound from '../src/components/core/NotFound'

import { createBrowserRouter, RouterProvider, Route, Routes, HashRouter } from 'react-router-dom'

// import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
      errorElement: <NotFound />,
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App
