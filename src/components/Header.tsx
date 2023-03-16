import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/Header.module.scss';

interface HeaderState {
  pathname: string;
}

class Header extends Component<unknown, HeaderState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      pathname: '',
    };
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this);
  }

  componentDidMount() {
    this.setState({ pathname: window.location.pathname });
  }

  handleNavLinkClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    const target = event.target as HTMLAnchorElement;
    const pathname = target.getAttribute('href') || '/';
    this.setState({ pathname });
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.currentPage}>
          {this.state.pathname === '/'
            ? 'Home page'
            : this.state.pathname === '/about'
            ? 'About page'
            : this.state.pathname === '/form'
            ? 'Form page'
            : 'Error page'}
        </div>
        <nav className={styles.headerNavigation}>
          <ul className={styles.headerLinks}>
            <li>
              <NavLink
                to="/"
                className={styles.headerLink}
                aria-current="true"
                onClick={this.handleNavLinkClick}
                data-testid="home-link"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={styles.headerLink}
                onClick={this.handleNavLinkClick}
                data-testid="about-link"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/form"
                className={styles.headerLink}
                onClick={this.handleNavLinkClick}
                data-testid="form-link"
              >
                Form
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
