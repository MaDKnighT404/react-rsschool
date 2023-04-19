import { useState } from 'react';
import Modal from './Modal';
import styles from './styles/Card.module.scss';
import { CardProps } from 'types';

const Card = ({ data }: CardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.card} onClick={handleCardClick} data-cy={`card#${data.id}`}>
        <div className={styles.cardImgWrapper}>
          <img className={styles.cardImg} src={data.image} alt={data.name} />
          <span className={styles.cardStatus}>{data.status}</span>
        </div>
        <p className={styles.cardName}>{data.name}</p>
      </div>
      {showModal && <Modal close={handleCloseModal} data={data} />}
    </>
  );
};

export default Card;
