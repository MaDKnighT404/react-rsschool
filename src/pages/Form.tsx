import { Component } from 'react';
import UserForm from '../components/UserForm';
import UserCard from '../components/UserCard';
import styles from './styles/Form.module.scss';
import { FormValues } from '../components/UserForm';

interface FormState {
  formData: FormValues[];
}

class Form extends Component<unknown, FormState> {
  state: FormState = {
    formData: [],
  };

  handleSubmit = (newFormData: FormValues[]) => {
    this.setState({
      formData: [...newFormData],
    });
  };

  render() {
    const { formData } = this.state;

    return (
      <>
        <div className={styles.formWrapper}>
          <UserForm onSubmit={this.handleSubmit} />
        </div>
        <div className={styles.userCardsWrapper}>
          {formData.length > 0 && formData.map((data, i) => <UserCard key={i} data={data} />)}
        </div>
      </>
    );
  }
}

export default Form;
