import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFormValues, updateFormValue } from '../redux/features/formSlice';
import styles from './styles/UserCard.module.scss';

const UserCard = () => {
  const [imageSrc, setImageSrc] = useState<string>('');
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
  } = useSelector(selectFormValues);

  const file = photoURL ? photoURL[0] : undefined;
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className={styles.userCard} data-testid="userCard">
      <figure className={styles.userCardFigure}>
        <img src={imageSrc} alt="photoUrl" className={styles.userCardAvatar} data-testid="photo" />
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
