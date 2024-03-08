import Search from './ui/search.jsx'
import SearchBar from './SearchBar.jsx'
import storeData from '../api/api.js'
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
    <nav>
      <SearchBar items={storeItems} />
    </nav>
  )
}
