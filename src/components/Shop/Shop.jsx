import { useEffect, useState } from "react";
import styles from './Shop.module.css'
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import men from '../../assets/pexels-dio-alif-utomo-681655-1897886.jpg'
import women from '../../assets/pexels-jmendezrf-1536619.jpg'
import electronics from '../../assets/pexels-pixabay-356056.jpg'
import jewllery from '../../assets/pexels-say-straight-1400349-2735970.jpg'




export default function Shop() {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const isChildPath = location.pathname !== '/shop';
  const {handleItemsToCartAddition} = useOutletContext()

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

  const pickImage = (category) => {
    if (category === 'electronics') {
    return <img src={electronics} alt="electronics" width={'100px'}/>
    }else if (category === 'jewelery') {
      return <img src={jewllery} alt="jewllery" width={'100px'}/>
    }else if (category === 'men\'s clothing') {
      return <img src={men} alt="men clothning" width={'100px'}/>
    }else {
      return <img src={women} alt="women clothning" width={'100px'}/>
    }
  }

  return (
    <div>
      {!isChildPath ?
        <div>
          {loading && <p>Loading</p>}
          {
            categories &&
            <div className={styles.gridContainer}>
              <h2>Our categories</h2>
              <ul className={styles.allCategories}>
                {categories.map((category, index) =>

                  <Link 
                    to={category} 
                    key={index}
                  >
                    <li 
                      key={index} 
                      className={styles.category}
                    >
                      <div>
                        {pickImage(category)}
                        <h3>{category}</h3>
                      </div>
                    </li>
                  </Link>
                )}

              </ul>
            </div>
          }
        </div> :
        ''
      }
      <Outlet context={{handleItemsToCartAddition}}/>
    </div>
  )
}