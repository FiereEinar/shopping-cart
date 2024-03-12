import { Outlet, useParams } from 'react-router-dom'
import ComboBox from '../components/ComboBox.jsx'
import NavBar from '../components/NavBar.jsx'
import DefaultPage from './DefaultPage.jsx'
import LoadingPage from '../pages/LoadingPage.jsx'
import storeData from '../api/api.js'
import { useState, useEffect } from 'react'

export const loader = async () => {
  const shopItems = await storeData.getShopItems()
  const shopCategories = await storeData.getShopCategories()
  
  return { shopItems, shopCategories }
}

export const useFetchData = () => {
  const [shoppingItems, setShoppingItems] = useState(null)
  const [shoppingCategories, setShoppingCategories] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const shopItems = await storeData.getShopItems()
        const shopCategories = await storeData.getShopCategories()
        
        setShoppingItems(shopItems)
        setShoppingCategories(shopCategories)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  
  return [ shoppingItems, shoppingCategories, isLoading, error ]
}

export default function Shop() {
  const [ shoppingItems, shoppingCategories, isLoading, error ] = useFetchData()
  const { category } = useParams()
  
  return (
    <div className=''>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className='flex flex-col gap-2 p-2 bg-gray-100'>
          <NavBar shoppingItems={shoppingItems} />
          <div className='w-screen flex dark:text-white'>
            <ComboBox categories={shoppingCategories} categoryValue={category} />
          </div>
          {category === undefined ? (
            <DefaultPage shopItems={shoppingItems} />
          ) : (
            <Outlet />
          )}
        </div>
      )}
    </div>
  )
}
