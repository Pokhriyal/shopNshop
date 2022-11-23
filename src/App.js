import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
// Auth or User imports
import Login from './components/UserComponent/Login';
import MasterLayout from './components/MasterLayout';
import ErrorPage from './components/ErrorComponent';
import ProductDetail from './components/ProductComponent/ProductDetail';
import LanddingPageComponent from './components/LanddingPageComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/default',
        element: <LanddingPageComponent />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  // const tempVar = 5;
  // var hello = '';
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
