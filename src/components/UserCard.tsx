import { useState } from 'react';
import { UserCardProps } from 'types/types';
import styles from './styles/UserCard.module.scss';

const UserCard = ({ data }: UserCardProps) => {
  const [imageSrc, setImageSrc] = useState<string>('');

  const {
    fullName,
    phone,
    email,
    birthday,
    gender,
    country,
    photo,
    html,
    css,
    javascript,
    typescript,
    jest,
    react,
    notification,
  } = data;

  const file = photo[0];
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
