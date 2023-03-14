import React, { FC } from 'react';
import styles from './Card.module.scss';
import { products } from '../../data/products';
import { GiRoundStar } from 'react-icons/Gi';

interface Product {
  img: string;
  title: string;
  brand: string;
  description: string;
  price: number;
  rating: number;
}

const Card: FC<Product> = ({ img, title, brand, description, price, rating }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgWrapper}>
        <img className={styles.cardImg} src={img} alt={title} />
        <span className={styles.cardBrand}>{brand}</span>
      </div>
      <span className={styles.cardTitle}>{title}</span>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.cardNumberWrapper}>
        <span className={styles.cardPrice}>{price}$</span>
        <span className={styles.cardRating}>
          {rating}
          <GiRoundStar fill="orange" stroke="black" strokeWidth="25" />
        </span>
      </div>
      <div className={styles.cardButtonWrapper}>
        <button className={styles.cardButton}>Buy</button>
      </div>
    </div>
  );
};

export default Card;
