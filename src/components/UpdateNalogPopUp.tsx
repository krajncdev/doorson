import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { INalog } from '../config/types';
import { Modal, Text, BackDropBlur, Form, FlexBetween } from './styles';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { spremeniNalog } from '../config/store/nalogiSlice';
import CrossIcon from '../assets/cross.svg';

import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

interface IUpdateNalogPopUpProps {
  nalog: null | INalog;
  setNalog: Dispatch<SetStateAction<null | INalog>>;
}

const TitleAndCloseWrapper = styled(FlexBetween)`
  margin-bottom: 1rem;
`;
const StyledCrossIcon = styled.img`
  height: 12px;
  width: 12px;
`;

const UpdateNalogPopUp = (props: IUpdateNalogPopUpProps) => {
  const { nalog, setNalog } = props;
  const [date, setDate] = useState<null | Date>(null);
  const opisDelRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nalog && opisDelRef.current?.value) {
      const updatedNalog = {
        ...nalog,
        status: date ? 'ZAPRTO' : nalog.status,
        datumZaključka: date,
        opisDel: opisDelRef.current?.value,
      };
      dispatch(spremeniNalog(updatedNalog));
      setNalog(null);
    }
  };

  useEffect(() => {
    if (nalog?.status === 'ZAPRTO') {
      setDate(nalog.datumZaključka);
    } else {
      nalog && setDate(null);
    }
  }, [nalog]);

  return (
    nalog && (
      <>
        <BackDropBlur onClick={() => setNalog(null)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <TitleAndCloseWrapper>
              <Text size='large'>
                ID {nalog.id}: {nalog.imeStranke}
              </Text>
              <button onClick={() => setNalog(null)}>
                <StyledCrossIcon src={CrossIcon} alt='cross-icon' />
              </button>
            </TitleAndCloseWrapper>
            <Form onSubmit={handleFormSubmit}>
              <label htmlFor='opisDel'>Opis del</label>
              <input
                type='text'
                ref={opisDelRef}
                id='opisDel'
                defaultValue={nalog.opisDel}
              />

              <label htmlFor='datum'>Datum</label>
              <DatePicker
                dateFormat='dd/MM/yyy'
                minDate={nalog.datumKreiranja}
                selected={date}
                id='datum'
                placeholderText='Set a date'
                onChange={(date) => date && setDate(date)}
              />
              <input type='submit' value='Shrani spremembe' />
            </Form>
          </Modal>
        </BackDropBlur>
      </>
    )
  );
};

export default UpdateNalogPopUp;
