import { Component } from 'react';

interface IUserCard {
  name: string;
  phone: string;
}

class UserCard extends Component<IUserCard> {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.phone}</p>
      </div>
    );
  }
}
