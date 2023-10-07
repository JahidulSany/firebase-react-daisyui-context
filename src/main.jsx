import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Main from './layouts/Main';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Orders from './components/Orders/Orders';
import AuthProvider from './providers/AuthProvider';
import PrivateRouter from './routes/PrivateRouter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/orders',
        element: (
          <PrivateRouter>
            <Orders></Orders>
          </PrivateRouter>
        ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
