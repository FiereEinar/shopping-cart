import { useParams, useLoaderData } from 'react-router-dom'
import ItemCard from '../components/ItemCard.jsx'
import ProductSection from '../components/ProductSection.jsx'
import CategorySection from '../components/CategorySection.jsx'
import { capitalize } from '../lib/utils.js'

export default function CategoryPage() {
  const { category } = useParams()
  const { shopItems } = useLoaderData()
  const itemsList = shopItems.filter((item) => item.category === category)

  return (
    <CategorySection heading={capitalize(category)}>
      <ProductSection>
        {itemsList.map((item) => (
          <ItemCard 
          key={item.id}
          imgURL={item.image} 
          title={item.title} 
          price={item.price} 
          sold={item.rating.count} 
          rating={item.rating.rate}>
            {item.title}
          </ItemCard>
        ))}
      </ProductSection>
    </CategorySection>
  )
}