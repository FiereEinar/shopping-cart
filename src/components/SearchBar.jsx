import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar({ items }) {
  const [results, setResults] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()
  
  const handleSearch = (e) => {
    let filtered = []
    items.map((item) => {
      if (item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        filtered.push(item)
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
      <div className='h-8 rounded relative border w-fit flex items-center justify-between overflow-hidden'>
        <svg className='absolute left-2 h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
        <input
          className='w-full h-full p-1 ps-8 pe-8 truncate focus:outline-slate-500'
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
        <div className='absolute max-h-80 bg-white overflow-auto rounded border shadow-2xl 
        p-1 z-10'>
          {results.map((item) => (
            <button
            key={item.title}
            className='rounded p-1 w-full  focus:outline-slate-500
            hover:bg-gray-200 transition-all flex justify-start gap-2'
            onClick={() => {
              clearText()
              setSearchInput(item.title)
              navigate(`/item/${item.id}`)
            }}>
              <img src={item.image}
              className='h-[50px] min-w-[50px]' />
              <p className=' text-start'>{item.title}</p>
            </button>
          ))}
        </div>
      }
    </div>
  )
}