import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <h1>Страница не найдена – 404!</h1>
      <Link href="/">Вернуться на главную</Link>
    </main>
  );
}
