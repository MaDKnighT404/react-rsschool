import { useEffect, useState } from 'react';
import { CardData } from '../types/types';

const useFetch = (
  url: string
): { data: CardData | null; arrLength: number; isPending: boolean; error: Error | null } => {
  const [data, setData] = useState(null);
  const [arrLength, setArrLength] = useState(0);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setArrLength(data.results.length);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return { data, arrLength, isPending, error };
};

export default useFetch;
