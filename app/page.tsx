import Image from 'next/image';
import styles from './page.module.css';
import Form from '@/components/Form';

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <h1>Поиск юридических лиц по ИНН</h1>
        <Form />
      </div>
    </main>
  );
}
