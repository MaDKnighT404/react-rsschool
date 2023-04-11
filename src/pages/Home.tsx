import { Card, Input } from '../components/';
import styles from './styles/Home.module.scss';
import { useEffect, useState } from 'react';
import { queryParams } from '../data/queryParams';
import { useGetCardByNameQuery } from '../redux/features/card/cardsApi';

const Home = () => {
  const [query, setQuery] = useState('');

  const { data, error: apiError, isLoading } = useGetCardByNameQuery(query);

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

  return (
    <>
      <div className={styles.inputWrapper}>
        <Input onSearch={handleSearch} />
      </div>
      {apiError && (
        <h2 className={styles.cardsError}>
          Sorry! Wrong request. Try type any character name, status or gender. You can combine this
          parametrs.
        </h2>
      )}
      {!apiError && isLoading && <div className={styles.cardsLoader} />}
      <div className={styles.cardsWrapper}>
        {data && !apiError && data.results.map((data) => <Card key={data.id} data={data} />)}
      </div>
    </>
  );
};

export default Home;
