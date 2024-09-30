import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom"
import { useState } from 'react';


export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpansion = () => {
    setIsExpanded(true);
  };

  const handleReduction = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <Header 
        isExpanded={isExpanded}
        handleExpansion={handleExpansion}
        handleReduction={handleReduction}
      />
      {!isExpanded ? <Outlet/> : null}
      
    </>
  )
}