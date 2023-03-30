import { UserCardProps } from 'types/types';
import styles from './styles/UserCard.module.scss';

const UserCard = ({ data }: UserCardProps) => {
  const { fullName, phone, email, birthday, gender, country, photo, skills, notification } = data;

  return (
    <div className={styles.userCard} data-testid="userCard">
      <figure className={styles.userCardFigure}>
        <img
          src={URL.createObjectURL(photo[0])}
          alt="photoUrl"
          className={styles.userCardAvatar}
          data-testid="photo"
        />
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
          <strong>Birthday:</strong> {birthday}
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
        {!skills.html &&
        !skills.css &&
        !skills.javascript &&
        !skills.typescript &&
        !skills.jest &&
        !skills.react ? (
          <h4 className={styles.userCardSkillMessage}> no skills checked</h4>
        ) : (
          ''
        )}
        <ul className={styles.userCardSkillList}>
          {skills.html && <li>HTML</li>}
          {skills.css && <li>CSS</li>}
          {skills.javascript && <li>JavaScript</li>}
          {skills.typescript && <li>TypeScript</li>}
          {skills.jest && <li>Jest</li>}
          {skills.react && <li>React</li>}
        </ul>
        <li>
          <strong>Notifications:</strong> {notification ? 'Enabled' : 'Disabled'}
        </li>
      </ul>
    </div>
  );
};

export default UserCard;
