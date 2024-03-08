import Search from './ui/search.jsx'
import SearchBar from './SearchBar.jsx'
import storeData from '../api/api.js'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function NavBar() {
  const [storeItems, setStoreItems] = useState([])
  
  useEffect(() => {
    const fetch = async () => {
      const items = await storeData.getShopItems()
      setStoreItems(items)
    }
    fetch()
  }, [])
  
  return (
    <nav className='flex justify-between items-center p-2'>
      <Link to='/shop'><span className='text-4xl'>Logo</span></Link>
      <SearchBar items={storeItems} />
    </nav>
  )
}
