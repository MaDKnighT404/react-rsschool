import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CardData } from '../../../types/types';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getCardByName: builder.query<CardData, string>({
      query: (name) => `character/?name=${name}`,
    }),
  }),
});

export const { useGetCardByNameQuery } = cardsApi;
