import storeData from '../api/api.js'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button.jsx'
import { useEffect } from 'react'

export default function CartPage() {
  const cartItems = storeData.getCartItems()
  let totalPrice = 0
  
  cartItems.forEach((cart) => {
    totalPrice += cart.quantity * cart.item.price
  })
  
  return (
    <div className='border flex flex-col gap-2 p-2 min-h-screen bg-gray-100'>
      <div className='bg-white rounded border p-2'>
        <Link to='/shop'>{'<'} Go back</Link>
      </div>
      <div className='border p-2 bg-white flex items-center gap-2'>
        <input id='selectAll' type='checkbox' className='' />
        <label htmlFor='selectAll'>Select All</label>
      </div>
      <section className='flex flex-col gap-2'>
        {cartItems.length !== 0 ? (
          cartItems.map((cart, i) => (
            <div key={i}
            className='border p-2 bg-white flex rounded overflow-hidden gap-2'>
              <img src={cart.item.image}
              className='min-w-36 h-36 md:min-w-72 md:h-72' />
              <div className='w-full flex flex-col gap-2'>
                <p className='text-[1.2rem]'>{cart.item.title}</p>
                <p>Size: {cart.size}</p>
                <p>Quantity: {cart.quantity}</p>
                <p className='text-orange-400'>${cart.item.price}</p>
                <div className='flex gap-2 justify-end'>
                  <Button size='sm' variant='destructive'>Delete</Button>
                  <Button size='sm' variant='outline'>Edit</Button>
                </div>
                <div className='flex gap-2 justify-end p-2'>
                  <label htmlFor={i}>Checkout</label>
                  <input id={i} type='checkbox' className='' />
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className='text-2xl '>No items on the cart.</h4>
        )}
        <section className='border bg-white flex justify-end items-center gap-3
        p-2 py-5 rounded'>
          <p>Total: <span className='text-orange-400'>${totalPrice}</span></p>
          <Button size='sm'>Checkout</Button>
        </section>
      </section>
    </div>
  )
}