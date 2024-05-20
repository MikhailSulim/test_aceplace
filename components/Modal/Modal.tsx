import React from 'react';
import styles from './Modal.module.css';
import Link from 'next/link';
import useModalStore from '@/store';

const Modal = ({ address }: { address: string }) => {
  const { closeModal } = useModalStore();

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <h1>
          Вы действительно хотите перейти на сторонний ресурс (Яндекс Карты)?
        </h1>
        <div className={styles.buttons}>
          <button type="button" className={styles.button} onClick={closeModal}>
            Отказаться
          </button>
          <Link
            href={`https://yandex.ru/maps/?text=${encodeURIComponent(address)}`}
            target='_blank'
            className={styles.button}
            onClick={closeModal}
          >
            Перейти
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
