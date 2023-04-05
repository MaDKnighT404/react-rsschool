import { Card, Input } from '../components/';
import styles from './styles/Home.module.scss';
import useFetch from '../helpers/useFetch';
import { useEffect, useState } from 'react';
import { queryParams } from '../data/queryParams';

const Home = () => {
  const [query, setQuery] = useState('');
  const [cardLoaded, setCardLoaded] = useState(false);
  const [numImagesLoaded, setNumImagesLoaded] = useState(0);
  const [cardKey, setCardKey] = useState(0);

  const handleSearch = (value: string) => {
    const parts = value.split(' ');
    let name = '';
    let status = '';
    let gender = '';

    parts.forEach((element) => {
      if (Object.values(queryParams.name).find((val) => val === element)) {
        name = element;
      }
      if (Object.values(queryParams.status).find((val) => val === element)) {
        status = element;
      }
      if (Object.values(queryParams.gender).find((val) => val === element)) {
        gender = element;
      }
    });

    setCardKey((cardKey) => cardKey + 1);
    if (!name && !status && !gender) {
      setQuery(`error`);
    } else {
      setQuery(`?name=${name}&status=${status}&gender=${gender}`);
    }
  };

  const {
    data: cardData,
    arrLength: numberOfCards,
    error,
  } = useFetch(`https://rickandmortyapi.com/api/character/${query}`);

  const handleImageLoad = () => {
    setNumImagesLoaded((prevNumImagesLoaded) => prevNumImagesLoaded + 1);
  };

  useEffect(() => {
    if (numImagesLoaded === numberOfCards && numberOfCards > 0) {
      setCardLoaded(true);
    }
    console.log(numImagesLoaded);
  }, [numImagesLoaded, numberOfCards]);

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
        <h2 className={styles.cardsError}>
          Sorry! Wrong request. Try type any character name, status or gender. You can combine this
          parametrs.
        </h2>
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
