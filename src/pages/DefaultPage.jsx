import ItemCard from '../components/ItemCard.jsx'
import ProductSection from '../components/ProductSection.jsx'
import CategorySection from '../components/CategorySection.jsx'
import { useState, useEffect } from 'react'

export default function DefaultPage({ shopItems }) {
  const [recommendedItems, setRecommendedItems] = useState([])
  const bestSelling = shopItems.sort((a, b) => b.rating.count - a.rating.count).slice(0, 6)
  
  useEffect(() => {
    const items = []
    const taken = []
    
    while (items.length !== 6) {
      const index = Math.floor(Math.random() * shopItems.length)
      if (!taken.includes(index)) {
        items.push(shopItems[index])
        taken.push(index)
      }
    }
    setRecommendedItems([...items])
  }, [])
  
  return (
    <section className='flex flex-col gap-2'>
      <CategorySection heading={'Best Selling'}>
        <ProductSection>
          {bestSelling.map((item) => (
            <ItemCard
            key={item.id}
            id={item.id}
            imgURL={item.image} 
            title={item.title} 
            price={item.price} 
            sold={item.rating.count} 
            rating={item.rating.rate}
            />
          ))}
        </ProductSection>
      </CategorySection>
      <CategorySection heading={'Recommended For You'}>
        <ProductSection>
          {recommendedItems.map((item, i) => (
            <ItemCard
            key={i}
            id={item.id}
            imgURL={item.image} 
            title={item.title} 
            price={item.price} 
            sold={item.rating.count} 
            rating={item.rating.rate}
            />
          ))}
        </ProductSection>
      </CategorySection>
    </section>
  )
}  