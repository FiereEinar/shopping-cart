import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from '../pages/MainPage.jsx'
import Shop, { loader as shopLoader } from '../pages/Shop.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import CategoryPage from '../pages/CategoryPage.jsx'
import DefaultPage from '../pages/DefaultPage.jsx'

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
              index: true,
              element: <DefaultPage />,
              loader: shopLoader,
            },
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