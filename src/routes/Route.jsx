import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from '../pages/mainPage/MainPage.jsx'
import Shop, { loader as shopLoader } from '../pages/shop/Shop.jsx'
import ErrorPage from '../pages/error/ErrorPage.jsx'
import CategoryPage from '../pages/category/CategoryPage.jsx'

export default function Route() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'shop',
          element: <Shop />,
          children: [
            {
              path: '/shop/:category',
              element: <CategoryPage />,
              loader: shopLoader,
            },
          ],
        },
      ],
    },
  ])
  
  return <RouterProvider router={route}/>
}