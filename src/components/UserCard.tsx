import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormValues } from '../types/types';
import { selectFormValues, updateFormValue } from '../redux/features/formSlice';
import styles from './styles/UserCard.module.scss';

interface DataFormValues {
  card: FormValues;
}

const UserCard = (card: DataFormValues) => {
  const {
    fullName,
    phone,
    email,
    birthday,
    gender,
    country,
    photoURL,
    photoName,
    html,
    css,
    javascript,
    typescript,
    jest,
    react,
    notification,
  } = card.card;

  return (
    <div className={styles.userCard} data-testid="userCard">
      <figure className={styles.userCardFigure}>
        <img src={photoURL} alt={photoName} className={styles.userCardAvatar} data-testid="photo" />
        <figcaption className={styles.userCardName}>{fullName}</figcaption>
      </figure>
      <ul className={styles.userCardBody}>
        <li>
          <strong>Phone:</strong> <span>{phone}</span>
        </li>
        <li>
          <strong>Email:</strong> {email}
        </li>
        <li>
          <strong>Birthday:</strong> {new Date(birthday).toLocaleDateString('en-ca')}
        </li>
        <li>
          <strong>Gender:</strong> {gender}
        </li>
        <li>
          <strong>Country:</strong> {country}
        </li>
        <li className={styles.userCardSkills}>
          <strong>Skills:</strong>
        </li>
        {!html && !css && !javascript && !typescript && !jest && !react ? (
          <h4 className={styles.userCardSkillMessage}> no skills checked</h4>
        ) : (
          ''
        )}
        <ul className={styles.userCardSkillList}>
          {html && <li>HTML</li>}
          {css && <li>CSS</li>}
          {javascript && <li>JavaScript</li>}
          {typescript && <li>TypeScript</li>}
          {jest && <li>Jest</li>}
          {react && <li>React</li>}
        </ul>
        <li>
          <strong>Notifications:</strong> {notification ? 'Enabled' : 'Disabled'}
        </li>
      </ul>
    </div>
  );
};

export default UserCard;
