import storeData from '../api/api.js';
import { useState, useEffect } from 'react';

export const loader = async () => {
  const shopItems = await storeData.getShopItems();
  const shopCategories = await storeData.getShopCategories();

  return { shopItems, shopCategories };
};

export const useFetchData = () => {
  const [shoppingItems, setShoppingItems] = useState(null);
  const [shoppingCategories, setShoppingCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const shopItems = await storeData.getShopItems();
        const shopCategories = await storeData.getShopCategories();

        setShoppingItems(shopItems);
        setShoppingCategories(shopCategories);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return [shoppingItems, shoppingCategories, isLoading, error];
};
