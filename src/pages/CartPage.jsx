import storeData from '../api/api.js';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import { useState, useMemo } from 'react';
import UnavailableDialog from '@/components/UnavailableDialog.jsx';

export default function CartPage() {
  const [cartItems, setCartItems] = useState(storeData.getCartItems());
  const [selectAll, setSelectAll] = useState(false);
  const [unavailableDialog, setUnavailableDialog] = useState(false);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, cart) => {
      if (selectAll || cart.selected) {
        return total + cart.quantity * cart.item.price;
      }
      return total;
    }, 0);
  }, [cartItems, selectAll]);

  const handleCheckoutChange = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cart) =>
        cart.id === id ? { ...cart, selected: !cart.selected } : cart
      )
    );
  };

  const toggleSelectAll = () => {
    setSelectAll((prev) => !prev);

    if (!selectAll) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cart) => ({ ...cart, selected: false }))
      );
    }
  };

  const handleDelete = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cart) => cart.id !== id)
    );
    storeData.removeToCart(id);
  };

  return (
    <div className="relative border flex flex-col gap-2 p-2 min-h-screen bg-gray-100">
      {unavailableDialog && (
        <UnavailableDialog
          onClose={() => setUnavailableDialog((prev) => !prev)}
          message="Transactions are unavailable for now"
        />
      )}
      <div className="bg-white rounded border p-2">
        <Link to="/shop">{'<'} Go back</Link>
      </div>
      <div className="border p-2 bg-white flex items-center gap-2">
        <input
          id="selectAll"
          type="checkbox"
          checked={selectAll}
          onChange={toggleSelectAll}
        />
        <label htmlFor="selectAll">Select All</label>
      </div>
      <section className="flex flex-col gap-2">
        {cartItems.length !== 0 ? (
          cartItems.map((cart) => (
            <div
              key={cart.id}
              className="animate-[subtleShow_0.2s_ease] border p-2 bg-white flex rounded overflow-hidden gap-2"
            >
              <img
                src={cart.item.image}
                className="min-w-36 h-36 md:min-w-72 md:h-72"
              />
              <div className="w-full flex flex-col gap-2">
                <p className="text-[1.2rem]">{cart.item.title}</p>
                <p>Size: {cart.size}</p>
                <p>Quantity: {cart.quantity}</p>
                <p className="text-orange-400">${cart.item.price}</p>
                <div className="flex gap-2 justify-end">
                  <Button
                    onClick={() => handleDelete(cart.id)}
                    size="sm"
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </div>
                <div className="flex gap-2 justify-end p-2">
                  <label htmlFor={cart.id}>Checkout</label>
                  <input
                    id={cart.id}
                    type="checkbox"
                    checked={cart.selected || selectAll}
                    onChange={() => handleCheckoutChange(cart.id)}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-2xl ">No items on the cart.</h4>
        )}
        <section
          className="border bg-white flex justify-end items-center gap-3
          p-2 py-5 rounded sticky bottom-0"
        >
          <p>
            Total: <span className="text-orange-400">${totalPrice}</span>
          </p>
          <Button
            onClick={() => setUnavailableDialog((prev) => !prev)}
            size="sm"
          >
            Checkout
          </Button>
        </section>
      </section>
    </div>
  );
}
/*
to be implemented (edit item button)
<Button 
                    onClick={() => console.log('edit')} 
                    size='sm' 
                    variant='outline'
                  >
                    Edit
                  </Button>

*/
