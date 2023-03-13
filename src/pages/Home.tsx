import React from 'react';
import { Card, Input } from '../components/';
import styles from './styles/Home.module.scss';

const Home = () => {
  return (
    <>
      <div className={styles.inputWrapper}>
        <Input />
      </div>
      <div className={styles.cardsWrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
