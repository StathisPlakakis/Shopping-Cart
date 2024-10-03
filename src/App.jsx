import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom"
import { useState } from 'react';


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
    let currentItems = itemsToCart;
    currentItems.push(newItem)
    setItemsToCart(currentItems);
  }

  return (
    <>
      <Header 
        isExpanded={isExpanded}
        handleExpansion={handleExpansion}
        handleReduction={handleReduction}
      />
      {!isExpanded ? <Outlet context={{handleItemsToCartAddition}}/> : null}
      
    </>
  )
}