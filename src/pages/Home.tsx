import { Card, Input } from '../components/';
import styles from './styles/Home.module.scss';
import useFetch from '../helpers/useFetch';
import { useEffect, useState } from 'react';

const Home = () => {
  const [query, setQuery] = useState('');
  const [cardLoaded, setCardLoaded] = useState(false);
  const [numImagesLoaded, setNumImagesLoaded] = useState(0);
  const [cardKey, setCardKey] = useState(0);
  const handleSearch = (value: string) => {
    setQuery(value);
  };

  const {
    data: cardData,
    arrLength: numberOfCards,
    error,
  } = useFetch(`https://rickandmortyapi.com/api/character/?name=${query}`);

  const handleImageLoad = () => {
    setNumImagesLoaded((prevNumImagesLoaded) => prevNumImagesLoaded + 1);
  };

  useEffect(() => {
    if (numImagesLoaded === numberOfCards && numberOfCards > 0) {
      setCardLoaded(true);
    }
  }, [numImagesLoaded, numberOfCards]);

  useEffect(() => {
    setCardKey(cardKey + 1);
  }, [query]);

  return (
    <>
      <div className={styles.inputWrapper}>
        <Input
          onSearch={handleSearch}
          setCardLoaded={setCardLoaded}
          setNumImagesLoaded={setNumImagesLoaded}
        />
      </div>
      {error && (
        <h2 className={styles.cardsError}>Sorry! Wrong request. Try type any character name.</h2>
      )}
      {!error && !cardLoaded && <div className={styles.cardsLoader} />}
      <div className={styles.cardsWrapper} style={{ opacity: cardLoaded ? 1 : 0 }}>
        {cardData &&
          !error &&
          cardData.results.map((data) => (
            <Card key={`${data.id}_${cardKey}`} data={data} handleImageLoad={handleImageLoad} />
          ))}
      </div>
    </>
  );
};

export default Home;
