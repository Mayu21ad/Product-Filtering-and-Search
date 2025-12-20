import React from 'react';
import styles from '@/styles/Cart.module.css';
import { Product } from '../services/productService';

interface CartProps {
  items: Product[];
  onRemove: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove }) => {
  if (items.length === 0) return null;
  return (
    <section className={styles.cartSection}>
      <div className={styles.cartTitle}>Cart</div>
      <ul className={styles.cartList}>
        {items.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.title} className={styles.cartItemImage} />
            <div className={styles.cartItemDetails}>
              <div className={styles.cartItemTitle}>{item.title}</div>
              <div className={styles.cartItemPrice}>${item.price}</div>
            </div>
            <button className={styles.cartRemoveBtn} onClick={() => onRemove(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cart;
