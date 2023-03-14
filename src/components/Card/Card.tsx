import React from 'react';
import styles from './Card.module.scss';
import { products } from '../../data/products';
import { GiRoundStar } from 'react-icons/Gi';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgWrapper}>
        <img className={styles.cardImg} src={products[0].images[0]} alt={products[0].title} />
        <span className={styles.cardBrand}>{products[0].brand}</span>
      </div>
      <span className={styles.cardTitle}>{products[1].title}</span>
      <div className={styles.cardNumberWrapper}>
        <span className={styles.cardPrice}>{products[0].price}$</span>
        <span className={styles.cardRating}>
          {products[0].rating}
          <GiRoundStar fill="orange" stroke="black" stroke-width="25" />
        </span>
      </div>
      <div className={styles.cardButtonWrapper}>
        <button className={styles.cardButton}>Buy</button>
      </div>
    </div>
  );
};

export default Card;
