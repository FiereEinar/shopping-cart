import RadioElement from '../components/ui/radioElement.jsx';
import { Button } from '../components/ui/button.jsx';
import { capitalize } from '../lib/utils.js';
import storeData from '../api/api.js';
import { useState } from 'react';

export default function AddToCartDialog({ item, openToggler }) {
  const sizes = ['small', 'medium', 'large'];
  const [quantity, setQuantity] = useState(1);
  const totalPrice = item.price * quantity;

  const addToCartHandler = (e) => {
    e.preventDefault();
    const size = document.querySelector('input[name="size"]:checked');

    if (!size || quantity <= 0) {
      alert('Please make sure to fill up the form');
      return;
    }

    storeData.addToCart(item, size.value, quantity);
    openToggler();
  };

  return (
    <div
      className="absolute w-screen h-full flex justify-center 
      pt-20 backdrop-blur-sm"
    >
      <form className="bg-gray-100 animate-[subtleShow_0.2s_ease] w-80 md:w-fit h-fit p-2 md:p-5 rounded shadow-2xl flex flex-col gap-2 md:gap-5 border">
        <div className="bg-white flex gap-2 md:gap-5 border rounded p-2">
          <img
            className="w-full max-w-48 md:max-w-60 h-[11rem] md:h-60"
            src={item.image}
          />
          <div className="flex flex-col gap-2 max-w-[400px]">
            <p>{item.title}</p>
            <p className="text-orange-400">${item.price}</p>
          </div>
        </div>
        <fieldset id="size" className="border rounded p-2 bg-white">
          <h4 className="pl-1 mb-2">Sizes:</h4>
          <div className="flex gap-2 justify-between px-2">
            {sizes.map((size) => (
              <RadioElement
                key={size}
                id={size}
                name="size"
                value={size}
                label={capitalize(size)}
              />
            ))}
          </div>
        </fieldset>
        <div className="flex justify-end rounded">
          <h4 className="mr-auto flex justify-center items-center px-4">
            Quantity:
          </h4>
          <button
            className="border w-8 h-8 rounded-l bg-white"
            onClick={(e) => {
              e.preventDefault();
              if (quantity === 1) return;
              setQuantity(quantity - 1);
            }}
          >
            -
          </button>
          <input
            type="number"
            className="w-12 border pl-2 focus:outline-slate-500"
            onChange={(e) => setQuantity(+e.target.value)}
            value={quantity}
          />
          <button
            className="border w-8 h-8 rounded-r bg-white"
            onClick={(e) => {
              e.preventDefault();
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="flex justify-between p-2">
          <h4 className="px-2">Total Price:</h4>
          <h4>${totalPrice}</h4>
        </div>
        <div className="flex gap-2 justify-end">
          <Button onClick={openToggler} size="sm" variant="destructive">
            Cancel
          </Button>
          <Button onClick={addToCartHandler} size="sm" variant="outline">
            Add to Cart
          </Button>
        </div>
      </form>
    </div>
  );
}
