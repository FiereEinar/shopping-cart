export default function ItemCard({ imgURL, title, price, sold, rating }) {
  return (
    <button 
    className='w-full border rounded-2xl overflow-hidden flex flex-col
    hover:shadow hover:border-zinc-500 transition-all'>
      <img 
      className='w-full h-48'
      src={imgURL} />
      <div className='flex flex-col p-3 gap-1'>
        <p className='text-start hover:text-blue-400 transition-all'>{title}</p>
        <p className='text-start text-orange-400'>${price}</p>
        <p className='text-start'><span className='text-gray-400'>{sold} sold</span> | <span className='text-orange-400'>{rating}</span> rating</p>
      </div>
    </button>
  )
}







