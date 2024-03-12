import { useParams, useLoaderData } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import { Button } from '../components/ui/button.jsx'
import ItemCard from '../components/ItemCard.jsx'
import ProductSection from '../components/ProductSection.jsx'
import CategorySection from '../components/CategorySection.jsx'
import AddToCartDialog from '../components/AddToCartDialog.jsx'
import { useState, useEffect } from 'react'

export default function ItemPage() {
  const [cartOpen, setCartOpen] = useState(false)
  
  const { itemId } = useParams()
  const { shopItems } = useLoaderData()
  
  const item = shopItems.find((x) => x.id === +itemId)
  const relatedItems = shopItems.filter((x) => x.category === item.category && x.id !== +itemId)
  const exploreItems = shopItems.filter((x) => x.category !== item.category)
  
  const toggleCartOpen = () => {
    setCartOpen(!cartOpen)
  }
  
  useEffect(() => {
    const topElement = document.querySelector('#nav')
    topElement.scrollIntoView()
  }, [itemId])

  return (
    <div className='relative flex flex-col gap-2 p-2 bg-gray-100 scroll-smooth'>
      <NavBar shoppingItems={shopItems} />
      {cartOpen &&
        <AddToCartDialog 
          item={item}
          openToggler={toggleCartOpen}
        />
      }
      {item ? (
        <>
          <section id='selectedItem' className='flex border rounded-2xl overflow-hidden p-3
          gap-2 bg-white'>
            <img src={item.image} 
            className='min-w-36 h-36 md:min-w-72 md:h-72'/>
            <div className='flex flex-col gap-2'>
              <h4 className='text-2xl'>{item.title}</h4>
              <p className=''><span className='text-gray-400'>{item.rating.count} sold</span> | <span className='text-orange-400'>{item.rating.rate}</span> rating</p>
              <article className='hidden md:flex flex-col gap-2'>
                <h4 className='text-2xl'>Product Description:</h4>
                <p>{item.description}</p>
              </article>
              <p className='text-orange-400'>${item.price}</p>
              <div className='flex gap-2 flex-wrap'>
                <Button variant='outline' onClick={toggleCartOpen} size='sm'>Add to Cart</Button>
                <Button onClick={() => alert('Transactions are unavailable for now')} size='sm'>Buy Now</Button>
              </div>
            </div>
          </section>
          <article className='flex md:hidden flex-col gap-2 p-3'>
            <h4 className='text-2xl'>Product Description:</h4>
            <p>{item.description}</p>
          </article>
          <CategorySection heading={'Items you might also like: '}>
            <ProductSection>
              {relatedItems.map((x) => (
                <ItemCard 
                key={x.id}
                id={x.id}
                imgURL={x.image} 
                title={x.title} 
                price={x.price} 
                sold={x.rating.count} 
                rating={x.rating.rate}>
                  {x.title}
                </ItemCard>
              ))}
            </ProductSection>
          </CategorySection>
          <CategorySection heading={'Explore other items'}>
            <ProductSection>
              {exploreItems.map((x) => (
                <ItemCard 
                key={x.id}
                id={x.id}
                imgURL={x.image} 
                title={x.title} 
                price={x.price} 
                sold={x.rating.count} 
                rating={x.rating.rate}>
                  {x.title}
                </ItemCard>
              ))}
            </ProductSection>
          </CategorySection>
        </>
      ) : (
        <h1>Loading...</h1>  
      )}
    </div>
  )
}