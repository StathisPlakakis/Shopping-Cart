import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './Category.module.css';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";



export default function Category() {

  const {name} = useParams();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {handleItemsToCartAddition} = useOutletContext();
  const location = useLocation();
  let str = location.pathname;
  let charToReplace2 = " ";
  let replacement2 = "%20";
  let newStr2 = str.replace(new RegExp(charToReplace2, 'g'), replacement2);
  const isChildPath = location.pathname !== `${newStr2}`;

  useEffect(() => {
    const fetchDataForProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${name}`, { mode: "cors" })
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let productsData = await response.json();
        setProducts(productsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProducts(null);
      } finally {
        setLoading(false);
      }

    };
    
    fetchDataForProducts();
  }, [name])


  return (
    <div>
      {!isChildPath ?
        <div>
          {loading && <p>Loading</p>}
          {
            products &&
            <ul className={styles.items}>
              {products.map((product, index) =>
              <Link to={`${product.id}`} key={index}>
                <li key={index} className={styles.product}>
                  <div className={styles.container}>
                    <img src={product.image} alt="" className={styles.image}/>
                    <h2>{product.title}</h2>
                  </div>
                </li>
              </Link>)}
            </ul>
          }
        </div> :
        ''
      }
      <Outlet context={{handleItemsToCartAddition}}/>
      
    </div>
  )
}