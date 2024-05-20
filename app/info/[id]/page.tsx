'use client';
import { getDataByINN } from '@/utils/getDataByINN';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import LoadingData from './loading';
import ErrorMsg from './error';
import Link from 'next/link';
import useModalStore from '@/store';
import Modal from '@/components/Modal/Modal';
type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params: { id } }: Props) {
  const { data, error, isLoading } = useSWR(`/api/info/${id}`, getDataByINN);
  const { isOpen, openModal, closeModal } = useModalStore();

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
              <span onClick={openModal}>
                {data.suggestions[0].data.address.value}
              </span>
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
      {!isLoading && <Link href={'/'}>Вернуться на главную </Link>}
      {isOpen && data.suggestions[0].data.address.value &&  (
        <Modal address={data.suggestions[0].data.address.value} />
      )}
    </main>
  );
}
