import { CardItem } from 'types/types';
import styles from './styles/Card.module.scss';

const Card = ({ img, name, status, gender, species, location }: CardItem) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgWrapper}>
        <img className={styles.cardImg} src={img} alt={name} />
      </div>
      <span className={styles.cardName}>{name}</span>
      <ul className={styles.cardDetails}>
        <li className={styles.cardDetailItem}>
          <span className={styles.cardDetailName}>Gender:</span>
          <span className={styles.cardDetailValue}>{gender}</span>
        </li>

        <li className={styles.cardDetailItem}>
          <span className={styles.cardDetailNam}>Species:</span>
          <span className={styles.cardDetailValue}>{species}</span>
        </li>

        <li className={styles.cardDetailItem}>
          <span className={styles.cardDetailName}>Status:</span>
          <span className={styles.cardDetailValue}>{status}</span>
        </li>

        <li className={`${styles.cardDetailItem} ${styles.cardDetailLocation}`}>
          <span className={styles.cardDetailName}>Location:</span>
          <span className={styles.cardDetailValue}>{location}</span>
        </li>
      </ul>
      <div className={styles.cardButtonWrapper}>
        <button className={styles.cardButton}>Information</button>
      </div>
    </div>
  );
};

export default Card;
