import { useLoaderData } from 'react-router-dom'
import ItemCard from '../components/ItemCard.jsx'

export default function DefaultPage() {
  const { shopItems } = useLoaderData()
  
  
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-3 gap-y-5
    p-2'>
      {shopItems.map((item) => (
        <ItemCard
        key={item.id}
        imgURL={item.image} 
        title={item.title} 
        price={item.price} 
        sold={item.rating.count} 
        rating={item.rating.rate}
        />
      ))}
    </div>
  )
}  