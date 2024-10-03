import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './Product.module.css'

export default function Product() {

  const {name} = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchDataForItem = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${name}`, { mode: "cors" })
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let itemData = await response.json();
        setItem(itemData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setItem(null);
      } finally {
        setLoading(false);
      }

    };
    
    fetchDataForItem();
  }, [name])

  return (
    <div>
      {loading && <p>Loading</p>}
      {
        item && 
        <div>
          <img src={item.image} alt="" className={styles.image}/>
          <ul>
            <li>{`Title: ${item.title}`}</li>
            <li>{`Price: ${item.price}$`}</li>
          </ul>
          <form>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              defaultValue={1}
              min={1}
              id='quantity'
            />
            <button>Add to chart</button>
          </form>
        </div>
        
      }
    </div> 
  )
}