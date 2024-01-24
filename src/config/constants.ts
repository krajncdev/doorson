import { INalog, ISize } from './types';

const DateOne = new Date('2023-03-25');
const DateOneFinal = null;
const DateTwo = new Date('2024-01-15');
const DateTwoFinal = new Date('2024-01-22');

interface IStolpec {
  id: number;
  naziv: string;
}

export const stolpci: IStolpec[] = [
  { id: 0, naziv: 'ID' },
  { id: 1, naziv: 'Ime Stranke' },
  { id: 2, naziv: 'Opis Napake' },
  { id: 3, naziv: 'Lokacija napake' },
  { id: 4, naziv: 'Opis del' },
  { id: 5, naziv: 'Datum kreiranja' },
  { id: 6, naziv: 'Datum zaključka' },
  { id: 7, naziv: 'Status' },
];

export const initialNalogi: INalog[] = [
  {
    id: 0,
    imeStranke: 'Jaka',
    status: 'ODPRTO',
    opisNapake: 'Izdelek je bil poškodovan.',
    lokacijaNapake: 'Maribor',
    opisDel: 'Lorem ipsum',
    datumKreiranja: DateOne,
    datumZaključka: DateOneFinal,
  },
  {
    id: 1,
    imeStranke: 'Borut',
    status: 'ZAPRTO',
    opisNapake: 'Izdelek je bil napačen.',
    lokacijaNapake: 'Ljubljana',
    opisDel: 'Lorem ipsum',
    datumKreiranja: DateTwo,
    datumZaključka: DateTwoFinal,
  },
  {
    id: 2,
    imeStranke: 'Jaka',
    status: 'ODPRTO',
    opisNapake: 'Izdelek je bil poškodovan.',
    lokacijaNapake: 'Maribor',
    opisDel: 'Lorem ipsum',
    datumKreiranja: DateOne,
    datumZaključka: DateOneFinal,
  },
  {
    id: 3,
    imeStranke: 'Borut',
    status: 'ZAPRTO',
    opisNapake: 'Izdelek je bil napačen.',
    lokacijaNapake: 'Ljubljana',
    opisDel: 'Lorem ipsum',
    datumKreiranja: DateTwo,
    datumZaključka: DateTwoFinal,
  },
];

const size: ISize = {
  xs: '400px',
  sm: '600px',
  md: '900px',
  lg: '1280px',
  xl: '1440px',
  xxl: '1920px',
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};
