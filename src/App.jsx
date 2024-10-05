import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom"
import { useState } from 'react';
import styles from './App.module.css'

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [itemsToCart, setItemsToCart] = useState([]);

  const handleExpansion = () => {
    setIsExpanded(true);
  };

  const handleReduction = () => {
    setIsExpanded(false);
  };

  const handleItemsToCartAddition = (newItem) => {
    setItemsToCart((prevItems) => {
      const updatedItems = [...prevItems];
      
      const existingItemIndex = updatedItems.findIndex(item => item.id === newItem.id);
  
      if (existingItemIndex >= 0) {
        updatedItems[existingItemIndex].quantity = 
          parseInt(updatedItems[existingItemIndex].quantity, 10) + parseInt(newItem.quantity, 10);
      } else {
        updatedItems.push(newItem);
      }
  
      return updatedItems;
    });
  };
  
  

  return (
    <>
      <Header 
        isExpanded={isExpanded}
        handleExpansion={handleExpansion}
        handleReduction={handleReduction}
        itemsToCart={itemsToCart}
      />
      {!isExpanded ? <Outlet context={{handleItemsToCartAddition, itemsToCart}}/> : null}
      
    </>
  )
}