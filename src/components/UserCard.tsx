import { Component } from 'react';
import styles from './styles/UserCard.module.scss';
import { FormValues } from './UserForm';

interface UserCardProps {
  data: FormValues;
}

class UserCard extends Component<UserCardProps> {
  render() {
    const { name, phone, email, birthday, gender, photo, skills, notifications } = this.props.data;

    return (
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img src={photo} alt={name} className={styles.cardAvatar} />
          <h3>{name}</h3>
        </div>
        <div className={styles.cardBody}>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Birthday:</strong> {birthday}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Skills:</strong>
          </p>
          <ul className={styles.skillsList}>
            {skills.html && <li>HTML</li>}
            {skills.css && <li>CSS</li>}
            {skills.javascript && <li>JavaScript</li>}
            {skills.typescript && <li>TypeScript</li>}
            {skills.jest && <li>Jest</li>}
            {skills.react && <li>React</li>}
          </ul>
          <p>
            <strong>Notifications:</strong> {notifications ? 'Enabled' : 'Disabled'}
          </p>
        </div>
      </div>
    );
  }
}

export default UserCard;
