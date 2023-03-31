import { Card, Input } from '../components/';
import { products } from '../data/products';
import styles from './styles/Home.module.scss';
import useFetch from '../helpers/useFetch';

const Home = () => {
  const {
    data: cardData,
    isPending,
    error,
  } = useFetch('https://rickandmortyapi.com/api/character');

  console.log(cardData);
  return (
    <>
      <div className={styles.inputWrapper}>
        <Input />
      </div>
      {error && <div>Error</div>}
      {isPending && <div>Loading...</div>}
      <div className={styles.cardsWrapper}>
        {cardData &&
          products.map((product, i) => (
            <Card
              key={product.id}
              img={cardData.results[i].image}
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
