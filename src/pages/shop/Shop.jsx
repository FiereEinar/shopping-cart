import { Link, NavLink, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchData = () => {
  const [shoppingItems, setShoppingItems] = useState(null)
  const [shoppingCategories, setShoppingCategories] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const shopItems = await axios.get(`https://fakestoreapi.com/products`)
        const shopCategories = await axios.get(`https://fakestoreapi.com/products/categories`)
        
        setShoppingItems(shopItems.data)
        setShoppingCategories(shopCategories.data)
        console.log(shopItems.data)
        console.log(shopCategories.data)
      } catch (err) {
        setError(err.message)
        console.log(err.message)
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
      ) : (
        <>
          <nav className='w-screen grid place-items-center'>
            <ul className='flex gap-3'>
              {shoppingCategories.map((categories, i) => (
                <NavLink
                className={({ isActive }) => isActive ? 'text-blue-500' : ''}
                to={categories} 
                key={i}>
                  {categories}
                </NavLink>
              ))}
            </ul>
          </nav>
          <div>
            <Outlet/>
          </div>
        </>
      )}
    </div>
  )
}