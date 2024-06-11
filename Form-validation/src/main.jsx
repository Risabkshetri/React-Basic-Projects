import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter,} from 'react-router-dom'
import App from './App.jsx'
import SignUp from "./SignUP.jsx";
import Registration from "./Registration.jsx";
// import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { path: '/SignUp', element: <SignUp /> },
    { path: '/Registration', element: <Registration /> },
  ]},
]
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
