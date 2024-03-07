import axios from 'axios';

const storeData = {
  shopItems: null,
  shopCategories: null,

  getShopItems: function () {
    const fetchData = async () => {
      if (storeData.shopItems === null) {
        const res = await axios.get(`https://fakestoreapi.com/products`);
        storeData.shopItems = res.data;
        return res.data;
      } else {
        return storeData.shopItems;
      }
    }
    return fetchData()
  },

  getShopCategories: function () {
    const fetchData = async () => {
      if (storeData.shopCategories === null) {
        const res = await axios.get(`https://fakestoreapi.com/products/categories`);
        storeData.shopCategories = res.data;
        return res.data;
      } else {
        return storeData.shopCategories;
      }
    }
    return fetchData()
  },
};

export default storeData;
