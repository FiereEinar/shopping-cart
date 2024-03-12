import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com'

class CartItem {
  constructor(item, size, quantity){
    this.item = item
    this.size = size
    this.quantity = quantity
  }
}

const storeData = {
  shopItems: null,
  shopCategories: null,
  cart: [],

  getShopItems: function() {
    const fetchData = async () => {
      if (storeData.shopItems === null) {
        const res = await axios.get(`${BASE_URL}/products`);
        storeData.shopItems = res.data;
        return res.data;
      } else {
        return storeData.shopItems;
      }
    }
    return fetchData()
  },

  getShopCategories: function() {
    const fetchData = async () => {
      if (storeData.shopCategories === null) {
        const res = await axios.get(`${BASE_URL}/products/categories`);
        storeData.shopCategories = res.data;
        return res.data;
      } else {
        return storeData.shopCategories;
      }
    }
    return fetchData()
  },
  
  addToCart: function(item, size, quantity) {
    const cartItem = new CartItem(item, size, quantity)
    storeData.cart.push(cartItem)
    console.log(storeData.cart)
  },
  
  removeToCart: function(id) {
    storeData.cart = storeData.cart.filter((x) => x.item.id === id)
  },
  
  getCartItems: function() {
    return storeData.cart
  },
};

export default storeData;
