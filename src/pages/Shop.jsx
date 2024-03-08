import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ComboBox from '../components/ComboBox.jsx'
import storeData from '../api/api.js'
import axios from 'axios'

export const loader = async () => {
  const shopItems = await storeData.getShopItems()
  return { shopItems }
}

const useFetchData = () => {
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
        console.log(shopItems)
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
  
  return (
    <div>
      {isLoading ? (
        <p className='text-6xl'>Loading items...</p>
      ) : error ? (
        <p>An error occured while fetching the data. {error}</p>
      ) : (
        <>
          <nav className='w-screen flex p-5'>
            <ComboBox categories={shoppingCategories} />
          </nav>
          <Outlet />
        </>
      )}
    </div>
  )
}
