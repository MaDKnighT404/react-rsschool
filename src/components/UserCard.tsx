import { Component } from 'react';
import styles from './styles/UserCard.module.scss';
import { FormValues } from './UserForm';

interface UserCardProps {
  data: FormValues;
}

class UserCard extends Component<UserCardProps> {
  render() {
    const { name, phone, email, birthday, gender, country, photoUrl, skills, notifications } =
      this.props.data;

    return (
      <div className={styles.userCard}>
        <figure className={styles.userCardFigure}>
          <img src={photoUrl} alt="photo" className={styles.userCardAvatar} />
          <figcaption className={styles.userCardName}>{name}</figcaption>
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
            <strong>Notifications:</strong> {notifications ? 'Enabled' : 'Disabled'}
          </li>
        </ul>
      </div>
    );
  }
}

export default UserCard;
