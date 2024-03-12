import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from '../pages/MainPage.jsx'
import Shop, { loader as shopLoader } from '../pages/Shop.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import CategoryPage from '../pages/CategoryPage.jsx'
import ItemPage from '../pages/ItemPage.jsx'
import CartPage from '../pages/CartPage.jsx'

export default function Route() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/shop',
      element: <Shop />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/shop/:category',
          element: <CategoryPage />,
          loader: shopLoader,
        },
      ],
    },
    {
      path: '/item/:itemId',
      element: <ItemPage />,
      loader: shopLoader,
      errorElement: <ErrorPage />,
    },
    {
      path : '/cart',
      element: <CartPage />,
      errorElement: <ErrorPage />,
    },
  ])
  
  return <RouterProvider router={route}/>
}