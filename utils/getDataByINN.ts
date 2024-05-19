export const getDataByINN = async (inn: string) => {
  const data = await fetch(`${inn}`, { method: 'POST' }).then(res=>res.json());

  return data;
};
