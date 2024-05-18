import React from 'react';
type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params: { id } }: Props) {
  return (
    <main>
      <h1 className="">{`Сведения о юридическом лице\nИНН ${id}`}</h1>
    </main>
  );
}
