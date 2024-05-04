
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import React from 'react'
import AuthProvider from './Providers/AuthProvider'
// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from '@tanstack/react-query'

// const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
          {/* <ToastContainer /> */}
        </HelmetProvider>
      </AuthProvider>
    {/* </QueryClientProvider> */}
  </React.StrictMode>,
)
