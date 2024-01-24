import { Dispatch, SetStateAction } from 'react';
import { pridobiDatum } from '../config/helpers';
import { INalog } from '../config/types';

interface IRenderNalogProps {
  nalog: INalog;
  setActiveNalog: Dispatch<SetStateAction<INalog | null>>;
}

const RenderNalog = (props: IRenderNalogProps) => {
  const { nalog, setActiveNalog } = props;
  const {
    datumKreiranja,
    datumZaključka,
    id,
    imeStranke,
    lokacijaNapake,
    opisDel,
    opisNapake,
    status,
  } = nalog;
  const handleOnClickTr = () => {
    setActiveNalog(nalog);
    console.log(nalog);
  };

  return (
    <tr onClick={() => handleOnClickTr()}>
      <td>{id}</td>
      <td>{imeStranke}</td>
      <td>{opisNapake}</td>
      <td>{lokacijaNapake}</td>
      <td>{opisDel}</td>
      <td>{pridobiDatum(datumKreiranja)}</td>
      <td>{datumZaključka === null ? '/' : pridobiDatum(datumZaključka)}</td>
      <td>{status}</td>
    </tr>
  );
};
export default RenderNalog;
