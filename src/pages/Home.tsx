import React from 'react';
import { Card, Input } from '../components/';
import { products } from '../data/products';
import styles from './styles/Home.module.scss';

const Home = () => {
  return (
    <>
      <div className={styles.inputWrapper}>
        <Input />
      </div>
      <div className={styles.cardsWrapper}>
        {products.map((product) => (
          <Card
            key={product.id}
            img={product.images[1]}
            title={product.title}
            brand={product.brand}
            description={product.description}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
