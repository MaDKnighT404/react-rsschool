import { Card, Input } from '../components/';
import styles from './styles/Home.module.scss';
import useFetch from '../helpers/useFetch';

const Home = () => {
  const {
    data: cardData,
    isPending,
    error,
  } = useFetch('https://rickandmortyapi.com/api/character');

  return (
    <>
      <div className={styles.inputWrapper}>
        <Input />
      </div>
      {error && <div>Error</div>}
      {isPending && <div>Loading...</div>}
      <div className={styles.cardsWrapper}>
        {cardData && cardData.results.map((data) => <Card key={data.id} data={data} />)}
      </div>
    </>
  );
};

export default Home;
