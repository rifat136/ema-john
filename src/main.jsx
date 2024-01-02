import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Shop from './Component/Shop/Shop.jsx';
import Order from './Component/Order/Order.jsx';
import Login from './Component/Login/Login.jsx';
import Inventory from './Component/Inventory/Inventory.jsx';
import cartProductsLoader from './Loaders/CartProductsLoader.js';
import Checkout from './Component/Checkout/Checkout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [

      {
        path: "/",
        element:<Shop></Shop>,
      },

      {
        path:"/order",
        element: <Order></Order>,
        loader: cartProductsLoader
      },
      {
        path:"/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path:"/login",
        element: <Login></Login>,
      },
      {
        path:"/inventory",
        element: <Inventory></Inventory>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
