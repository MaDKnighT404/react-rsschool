import { Card, Input } from '../components/';
import styles from './styles/Home.module.scss';
import useFetch from '../helpers/useFetch';
import { useEffect, useState } from 'react';
import { queryParams } from '../data/queryParams';

const Home = () => {
  const [query, setQuery] = useState('');
  const [cardLoaded, setCardLoaded] = useState(true);
  const [pageUpload, setPageUpload] = useState(false);
  const [numImagesLoaded, setNumImagesLoaded] = useState(0);

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
      setPageUpload(true);
    }
  }, [numImagesLoaded, numberOfCards]);

  return (
    <>
      <div className={styles.inputWrapper}>
        <Input
          onSearch={handleSearch}
          setCardLoaded={setCardLoaded}
          setNumImagesLoaded={setNumImagesLoaded}
          setPageUpload={setPageUpload}
        />
      </div>
      {error && (
        <h2 className={styles.cardsError}>
          Sorry! Wrong request. Try type any character name, status or gender. You can combine this
          parametrs.
        </h2>
      )}
      {!error && !pageUpload && <div className={styles.cardsLoader} />}
      <div className={styles.cardsWrapper} style={{ opacity: pageUpload ? 1 : 0 }}>
        {cardData &&
          !error &&
          cardLoaded &&
          cardData.results.map((data) => (
            <Card key={data.id} data={data} handleImageLoad={handleImageLoad} />
          ))}
      </div>
    </>
  );
};

export default Home;
