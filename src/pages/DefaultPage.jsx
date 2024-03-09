import ItemCard from '../components/ItemCard.jsx'
import ProductSection from '../components/ProductSection.jsx'

export default function DefaultPage({ shopItems }) {
  return (
    <ProductSection>
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
    </ProductSection>
  )
}  