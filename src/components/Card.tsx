import { useState } from 'react';
import { CardProps } from 'types/types';
import styles from './styles/Card.module.scss';
import Modal from './Modal';

const Card = ({ data, handleImageLoad }: CardProps) => {
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
          <img
            className={styles.cardImg}
            src={data.image}
            alt={data.name}
            onLoad={handleImageLoad}
          />
          <span className={styles.cardStatus}>{data.status}</span>
        </div>
        <p className={styles.cardName}>{data.name}</p>
      </div>
      {showModal && <Modal close={handleCloseModal} data={data} />}
    </>
  );
};

export default Card;
