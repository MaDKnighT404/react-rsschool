import React from 'react';
import styles from './styles/Modal.module.scss';
import { CardProps, ModalProps } from '../types/types';

const Modal: React.FC<ModalProps & CardProps> = ({ close, data }) => {
  const stopPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };
  const episodsNumbers: Array<string> = [];

  data.episode.forEach((episode) => {
    const arr = episode.split('/');
    episodsNumbers.push(arr[arr.length - 1]);
  });

  return (
    <div className={styles.modalWrapper} onClick={close} data-testid="modal">
      <div className={styles.modalInner} onClick={stopPropagation}>
        <img className={styles.modalClip} src="../assets/clip.png" alt="clip"></img>
        <button className={styles.modalCloseBtn} onClick={close} data-testid="closeModal">
          X
        </button>
        <div className={styles.modalImgWrapper}>
          <img className={styles.modalImg} src={data.image}></img>
        </div>

        <div className={styles.modalMainInfo}>
          <h2 className={styles.modalName}>{data.name}</h2>
          <h4 className={styles.modalStatus}>Status: {data.status}</h4>
        </div>

        <ul className={styles.modalDetails}>
          <li className={`${styles.modalDetailItem} ${styles.cardDetailLocation}`}>
            <span className={styles.modalDetailName}>Location:</span>
            <span className={styles.modalDetailValue}>{data.location.name}</span>
          </li>

          <li className={styles.modalDetailItem}>
            <span className={styles.modalDetailNam}>Species:</span>
            <span className={styles.modalDetailValue}>{data.species}</span>
          </li>

          <li className={styles.modalDetailItem}>
            <span className={styles.modalDetailName}>Gender:</span>
            <span className={styles.modalDetailValue}>{data.gender}</span>
          </li>
        </ul>
        <h4 className={styles.modalEpisodesTitle}>
          {episodsNumbers.length > 1 ? 'Episods:' : 'Episod:'}
        </h4>
        <div className={styles.modalEpisodesWrapper}>
          {episodsNumbers.map((episode) => {
            return (
              <span key={episode} className={styles.modalEpisode}>
                {episode}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
