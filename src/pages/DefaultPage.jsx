import ItemCard from '../components/ItemCard.jsx'
import ProductSection from '../components/ProductSection.jsx'
import CategorySection from '../components/CategorySection.jsx'
import { useState, useEffect } from 'react'

export default function DefaultPage({ shopItems }) {
  const [recommendedItems, setRecommendedItems] = useState([])
  const bestSelling = shopItems.sort((a, b) => b.rating.count - a.rating.count).slice(0, 6)
  
  useEffect(() => {
    const items = []
    for (let i = 0; i < 6; i++) {
      items.push(shopItems[Math.floor(Math.random() * shopItems.length)])
    }
    setRecommendedItems([...items])
  }, [])
  
  return (
    <section>
      <CategorySection heading={'Best Selling'}>
        <ProductSection>
          {bestSelling.map((item) => (
            <ItemCard
            key={item.id}
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