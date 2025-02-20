import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SearchPage from './RouteVariable/routevariable.jsx'
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import CategoryRoute from './CatagoryRoute/Categoryroute.jsx';
import ShoppingRoute from './ShoppingRoute/Shoppingroute.jsx';
import AccountNav from './BottomNav/Components/AccountNav.jsx';
import {Provider} from 'react-redux'
import store from './store.js'
import Setting from './pages/settings/setting.jsx'
import CategoryPage from './CatagoryRoute/CategoryPage.jsx'


  const router = createBrowserRouter(
    [
    {
      path: "/",
      element: <App/>,
    },

    {
      path:"/category/:categoryName",
      element:<CategoryRoute/>
    },
   {
    path:"/shopping/:productId",
    element:<ShoppingRoute/>
   },
    {
      path:"/settings",
      element:<Setting/>
    },
    {
      path:"/account",
      element:<AccountNav/>
    },
    {
      path:"/home",
      element:<App/>
    },
    {
      path:"/shop1",
      element:<CategoryRoute/>
    },
    {
      path:"/home1",
      element:<App/>
    },
    {
      path:"/Search/:id",
      element:<SearchPage/>
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>,
)
