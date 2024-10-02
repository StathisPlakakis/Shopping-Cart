import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from './Category.module.css';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";




export default function Category() {

  const {name} = useParams();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const isChildPath = location.pathname !== `/${name}`;

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
            <ul>
              {products.map((product, index) =>
              <Link to={product} key={index}><li key={index} className={styles.product}>{product.title}</li></Link>)}
            </ul>
          }
        </div> :
        ''
      }
      <Outlet/>
    </div>
  )
}