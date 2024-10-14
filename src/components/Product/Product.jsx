import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import styles from './Product.module.css'
import { useOutletContext } from "react-router-dom";

export default function Product() {

  const {name} = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedItem, setAddedItem] = useState(null);
  const {handleItemsToCartAddition} = useOutletContext();
  let quantityRef = useRef(null);

  useEffect(() => {
    setAddedItem(addedItem)
  },[addedItem])


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

  const handleClick = (e) => {
    e.preventDefault();
  
    const quantity = parseInt(quantityRef.current.value, 10);
  
    let newItem = {
      id: `${item.id}`,
      title: `${item.title}`,
      price: `${item.price}`,
      quantity: quantity,
      image: `${item.image}`
    };
  
    handleItemsToCartAddition(newItem);

    setAddedItem(newItem);
  };
  

  return (
    <div>
      {loading && <p>Loading</p>}
      {
        item && 
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={item.image} alt="" className={styles.image}/>
          </div>
          <div className={styles.info}>
            <ul>
              <li><h2>{`${item.title}`}</h2></li>
              <li><p>{`${item.description}`}</p></li>
              <li><h2>{`Price: ${item.price}$`}</h2></li>
              <li>
                <form>
                  <label className={styles.label} htmlFor="quantity">Quantity: </label>
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    id='quantity'
                    ref={quantityRef}
                  />
                  <button className={styles.add} onClick={handleClick}>Add to chart</button>
                </form>
              </li>
            </ul>
            
          </div>
        </div> 
      }
    </div> 
  )
}