'use client';
import { getDataByINN } from '@/utils/getDataByINN';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import LoadingData from './loading';
import ErrorMsg from './error';
type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params: { id } }: Props) {
  const { data, error, isLoading } = useSWR(`/api/info/${id}`, getDataByINN);

  return (
    <main>
      <h1>{`Сведения о юридическом лице\nИНН ${id}`}</h1>
      {isLoading && <LoadingData />}
      {error && <ErrorMsg error={error} />}
      {data && !isLoading && data.suggestions.length !== 0 && (
        <ul>
          <li>
            Название<p>{data.suggestions[0].value}</p>
          </li>
          <li>
            ОГРН<p>{data.suggestions[0].data.ogrn}</p>
          </li>
          <li>
            Адрес
            <p>
              <a>{data.suggestions[0].data.address.value}</a>
            </p>
          </li>
          <li>
            {data.suggestions[0].data.management.post}
            <p>{data.suggestions[0].data.management.name}</p>
          </li>
        </ul>
      )}
      {!isLoading && data.suggestions.length === 0 && (
        <span>Организаций с данным ИНН не найдено</span>
      )}
    </main>
  );
}
