import menu from '../../assets/menu-burger.svg';
import menuHover from '../../assets/menu-burger-hover.svg';
import close from '../../assets/cross-small.svg'
import closeHover from '../../assets/cross-small-hover.svg'
import styles from './Header.module.css';
import { useState, useRef,  } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cart from '../Cart/Cart';

export default function Header({ 
  isExpanded, handleExpansion, handleReduction, itemsToCart }) {
  const [showNewContent, setShowNewContent] = useState(false);
  const menuImgRef = useRef(null);
  const closeImgRef = useRef(null);
  const location = useLocation();
  const pathName =  location.pathname;
  const [currentItems, setCurrentItems] = useState(itemsToCart);

  const handleMenuClick= () => {
    handleExpansion()
    
    setTimeout(() => {
      setShowNewContent(true);
    }, 500);
  };

  const handleCloseClick = () => {
    handleReduction()
    
    setTimeout(() => {
      setShowNewContent(false);
    }, 500);
  };

  return (
    <header
      className={`${styles.header} ${isExpanded ? styles.expanded : ''}`}
    >
      {!showNewContent ? (
        <div className={`${styles.content} ${isExpanded ? styles.hidden : ''}`}>
          <div 
            className={styles.menu} 
            onClick={handleMenuClick} 
            onMouseOver={() => menuImgRef.current.src=`${menuHover}`}
            onMouseLeave={() => menuImgRef.current.src=`${menu}`}
          >
            <img src={menu} alt="Menu" ref={menuImgRef}/>
            Menu
          </div>

          <h1 className={styles.logo}>iSHOP</h1>

          <Link to='checkout'><Cart itemsToCart={itemsToCart}/></Link>
        </div>
      ) : (
        <div className={`${styles.newContent} ${isExpanded ? styles.visible : ''}`}>
          <div 
            className={styles.close} 
            onClick={handleCloseClick}
            onMouseOver={() => closeImgRef.current.src=`${closeHover}`}
            onMouseLeave={() => closeImgRef.current.src=`${close}`}
          >
            <img src={close} alt="Close-Menu" ref={closeImgRef}/>
            Close
          </div>

          <div className={styles.sections}>
            <Link 
              to="/" 
              onClick={handleCloseClick}
              className={`${pathName === '/' ? styles.active : ''}`}
            >
              <h2>Home</h2>
            </Link>
            <Link 
              to="shop" 
              onClick={handleCloseClick}
              className={`${pathName === '/shop' ? styles.active : ''}`}
            >
              <h2>Shop</h2>
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}