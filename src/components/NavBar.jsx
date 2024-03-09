import SearchBar from './SearchBar.jsx'
import { Link } from 'react-router-dom'

export default function NavBar({ shoppingItems }) {
  
  return (
    <nav className='flex justify-between items-center p-2'>
      <Link to='/shop'><span className='text-4xl'>Logo</span></Link>
      <SearchBar items={shoppingItems} />
    </nav>
  )
}
