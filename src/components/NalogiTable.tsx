import { useSelector } from 'react-redux';
import { RootState } from '../config/store';
import { useCallback, useState } from 'react';
import FilterPopUp from './FilterPopUp';
import { Table } from './styles';
import { RenderNalog, UpdateNalogPopUp } from './';
import TriangleIcon from '../assets/triangle.svg';
import MinusIcon from '../assets/minus.svg';
import { INalog } from '../config/types';

export type TFilter = 'ZAPRTO' | 'ODPRTO' | null;

const NalogiTable = () => {
  const nalogi = useSelector((state: RootState) => state.nalogi.value);
  const [filter, setFilter] = useState<TFilter>(null);
  const [sort, setSort] = useState<'up' | 'down' | null>(null);
  const [isFilterPopUpOpen, setIsFilterPopUpOpen] = useState<boolean>(false);
  const [activeNalog, setActiveNalog] = useState<null | INalog>(null);

  const sortedNalogi = sort
    ? [...nalogi].sort((a, b) => {
        if (sort === 'down') {
          return a.datumKreiranja > b.datumKreiranja ? 1 : -1;
        } else {
          return a.datumKreiranja < b.datumKreiranja ? 1 : -1;
        }
      })
    : nalogi;

  const filteredNalogi = filter
    ? sortedNalogi.filter((nalog) => nalog.status === filter)
    : sortedNalogi;

  const handleSortButtonClick = useCallback(() => {
    setSort((prevSort) => {
      if (prevSort === null) return 'up';
      if (prevSort === 'up') return 'down';
      return null;
    });
  }, []);

  const handleFilterButtonClick = useCallback(() => {
    setIsFilterPopUpOpen((prev) => !prev);
  }, []);

  return (
    <>
      <FilterPopUp
        filter={filter}
        setFilter={setFilter}
        isOpen={isFilterPopUpOpen}
        setIsOpen={setIsFilterPopUpOpen}
      />
      <UpdateNalogPopUp nalog={activeNalog} setNalog={setActiveNalog} />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ime Stranke</th>
            <th>Opis napake</th>
            <th>Lokacija napake</th>
            <th>Opis del</th>
            <th style={{ cursor: 'pointer' }} onClick={handleSortButtonClick}>
              Datum kreiranja
              {sort === 'up' && (
                <img
                  src={TriangleIcon}
                  style={{ rotate: '180deg' }}
                  alt='triangle-icon'
                />
              )}
              {sort === 'down' && (
                <img src={TriangleIcon} alt='triangle-icon' />
              )}
              {sort === null && <img src={MinusIcon} alt='minus-icon' />}
            </th>
            <th>Datum zaključka</th>
            <th style={{ cursor: 'pointer' }} onClick={handleFilterButtonClick}>
              Status <img src={TriangleIcon} alt='triangle-icon' />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredNalogi.map((nalog) => (
            <RenderNalog
              key={nalog.id}
              nalog={nalog}
              setActiveNalog={setActiveNalog}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default NalogiTable;
