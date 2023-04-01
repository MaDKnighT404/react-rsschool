import { useState } from 'react';
import { CardItem } from 'types/types';
import styles from './styles/Card.module.scss';
import Modal from './Modal';
const Card = ({ img, name, status, gender, species, location }: CardItem) => {
  const [showModal, setShowModal] = useState(false);
  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className={styles.card} onClick={handleCardClick}>
        <div className={styles.cardImgWrapper}>
          <img className={styles.cardImg} src={img} alt={name} />
          <span className={styles.cardStatus}>{status}</span>
        </div>
        <p className={styles.cardName}>{name}</p>
      </div>
      {showModal && <Modal close={handleCloseModal} />}
    </>
  );
};

export default Card;

{
  /* <ul className={styles.cardDetails}>
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
      </div> */
}
