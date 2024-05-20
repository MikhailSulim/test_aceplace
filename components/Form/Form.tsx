'use client';
import React, { useState } from 'react';
import styles from './Form.module.css';
import { useRouter } from 'next/navigation';

export default function Form() {
  const router = useRouter();
  const [inn, setInn] = useState<number | null>(null);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInn(Number(event.target.value));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    router.push(`/info/${inn}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Укажите ИНН"
        className={styles.input}
        value={String(inn)}
        onChange={handleInput}
      />
      <button type="submit" disabled={inn === null} className={styles.button}>
        &#128269;
      </button>
    </form>
  );
}
