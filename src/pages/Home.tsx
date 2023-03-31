import { Card, Input } from '../components/';
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
          cardData.results.map((card) => (
            <Card
              key={card.id}
              img={card.image}
              name={card.name}
              status={card.status}
              gender={card.gender}
              species={card.species}
              location={card.location.name}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
