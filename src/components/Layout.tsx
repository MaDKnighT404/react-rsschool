import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}

export default Layout;
