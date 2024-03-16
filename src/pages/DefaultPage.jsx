import ItemCard from '../components/ItemCard.jsx';
import ProductSection from '../components/ProductSection.jsx';
import CategorySection from '../components/CategorySection.jsx';

export default function DefaultPage({ shopItems }) {
  const sortedItems = shopItems.sort((a, b) => b.rating.count - a.rating.count);
  const bestSelling = sortedItems.slice(0, 6);
  const recommendedItems = sortedItems.slice(6, sortedItems.length);

  return (
    <section className="flex flex-col gap-2">
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
  );
}
