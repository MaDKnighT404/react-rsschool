import { Component } from 'react';
import { GiRoundStar } from 'react-icons/Gi';
import { Product } from 'types/types';
import styles from './styles/Card.module.scss';

class Card extends Component<Product> {
  render() {
    const { img, title, brand, description, price, rating } = this.props;
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
  }
}

export default Card;
