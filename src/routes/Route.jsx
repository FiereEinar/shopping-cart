import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from '../pages/MainPage.jsx'
import Shop, { loader as shopLoader } from '../pages/Shop.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import CategoryPage from '../pages/CategoryPage.jsx'

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
  ])
  
  return <RouterProvider router={route}/>
}