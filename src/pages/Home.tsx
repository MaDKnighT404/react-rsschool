import React from 'react';
import { Card, Input } from '../components/';
import styles from './styles/Home.module.scss';
import { products } from '../data/products';

const Home = () => {
  return (
    <>
      <div className={styles.inputWrapper}>
        <Input />
      </div>
      <div className={styles.cardsWrapper}>
        {products.map((product, i) => (
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
