import React from 'react';
import styles from './styles/Modal.module.scss';
import { ModalProps } from '../types/types';

const Modal: React.FC<ModalProps> = ({ close }) => {
  return (
    <div className={styles.modalWrapper} onClick={close}>
      <div>123</div>
    </div>
  );
};

export default Modal;
