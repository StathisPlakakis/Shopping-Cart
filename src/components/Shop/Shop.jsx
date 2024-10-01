import { useEffect, useState } from "react"
import styles from './Shop.module.css'

export default function Shop() {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories', { mode: "cors" })
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let categoriesData = await response.json();
        setCategories(categoriesData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setCategories(null);
      } finally {
        setLoading(false);
      }

    };
    
    fetchDataForCategories();
  }, [])

  return (
    <div>
      {loading && <p>Loading</p>}
      {
        categories && 
        <ul>
          {categories.map((category, index) => 
          <li key={index}>{category}</li>)}
        </ul>
      }
    </div>
  )
}