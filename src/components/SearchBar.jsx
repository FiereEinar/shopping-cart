import { useState } from 'react'

export default function SearchBar({ items }) {
  const [results, setResults] = useState([])
  const [searchInput, setSearchInput] = useState('')
  
  const handleSearch = (e) => {
    let filtered = []
    items.map((item) => {
      if (item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        filtered.push(item.title)
    })
    setResults(filtered)
    setSearchInput(e.target.value)
    if (e.target.value.length === 0) setResults([])
  }
  
  const clearText = () => {
    setSearchInput('')
    setResults([])
  }
  
  return (
    <div className='relative w-fit rounded'>
      <div className='rounded relative border w-fit flex items-center justify-between'>
        <svg className='absolute left-3' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
        <input
          className='w-full h-full p-1 ps-10 pe-10 truncate'
          type="text" 
          value={searchInput}
          placeholder='search...' 
          onChange={handleSearch}
        />
        {searchInput.length !== 0 && 
          <button onClick={clearText} className='absolute right-3'>X</button>
        }
      </div>
      {results.length !== 0 && 
        <div className='absolute max-h-80 overflow-auto rounded border shadow-2xl p-1'>
          {results.map((item) => (
            <button
            className='rounded p-1 w-full bg-white
            hover:bg-gray-200 transition-all'
            onClick={() => {
              clearText()
              setSearchInput(item)
            }}
            key={item}>
              {item}
            </button>
          ))}
        </div>
      }
    </div>
  )
}