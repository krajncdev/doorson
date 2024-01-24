export const pridobiDatum = (datum: Date) => {
  const day = datum.getDate();
  const month = datum.getMonth() + 1;
  const year = datum.getFullYear();

  return `${day}.${month}.${year}`;
};
