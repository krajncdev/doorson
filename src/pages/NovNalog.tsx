import { FormEvent, useRef, useState } from 'react';
import { HeaderComponent, Container } from '../components';
import { Form, Text } from '../components/styles';
import { dodajNalog } from '../config/store/nalogiSlice';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { INalog } from '../config/types';
import { useDispatch } from 'react-redux';
import { capitalize } from '../config/helpers';

const NovNalog = () => {
  const imeOsebeRef = useRef<HTMLInputElement>(null);
  const opisNapakeRef = useRef<HTMLInputElement>(null);
  const lokacijaNapakeRef = useRef<HTMLInputElement>(null);
  const opisDelRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    imeOsebe: '',
    opisNapake: '',
    lokacijaNapake: '',
    opisDel: '',
  });

  const validateField = (fieldName: string, value: string) => {
    if (value === '') {
      console.log(fieldName);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `Polje ${capitalize(fieldName)} je potrebno`,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
    }
  };

  const StyledError = styled(Text)`
    color: ${(props) => props.theme.colors.error};
    margin-bottom: 1rem;
  `;

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const imeOsebeInput = imeOsebeRef.current?.value || '';
    const opisNapakeInput = opisNapakeRef.current?.value || '';
    const lokacijaNapakeInput = lokacijaNapakeRef.current?.value || '';
    const opisDelInput = opisDelRef.current?.value || '';

    validateField('imeOsebe', imeOsebeInput);
    validateField('opisNapake', opisNapakeInput);
    validateField('lokacijaNapake', lokacijaNapakeInput);
    validateField('opisDel', opisDelInput);

    console.log(errors);

    if (
      imeOsebeInput !== '' &&
      opisNapakeInput !== '' &&
      lokacijaNapakeInput !== '' &&
      opisDelInput !== ''
    ) {
      console.log('Success: ', errors);
      const nalog: INalog = {
        id: Date.now(),
        opisNapake: opisNapakeInput,
        imeStranke: imeOsebeInput,
        opisDel: opisDelInput,
        datumKreiranja: new Date(),
        status: 'ODPRTO',
        datumZaključka: null,
        lokacijaNapake: lokacijaNapakeInput,
      };
      console.log('Success');
      dispatch(dodajNalog(nalog));
      navigate('/nalogi');
    } else {
      console.log('Better luck next time');
    }
  };

  return (
    <>
      <HeaderComponent />
      <Container>
        <Form onSubmit={handleFormSubmit}>
          <label htmlFor='imeOsebe'>Ime osebe</label>
          <input
            type='text'
            id='imeOsebe'
            placeholder='Ime'
            ref={imeOsebeRef}
          />
          {errors.imeOsebe && <StyledError>{errors.imeOsebe}</StyledError>}
          <label htmlFor='opisNapake'>Opis napake</label>
          <input
            type='text'
            id='opisNapake'
            placeholder='Opis napake'
            ref={opisNapakeRef}
          />
          {errors.opisNapake && <StyledError>{errors.opisNapake}</StyledError>}
          <label htmlFor='lokacijaNapake'>Lokacija napake</label>
          <input
            type='text'
            id='lokacijaNapake'
            placeholder='Lokacija napake'
            ref={lokacijaNapakeRef}
          />
          {errors.lokacijaNapake && (
            <StyledError>{errors.lokacijaNapake}</StyledError>
          )}
          <label htmlFor='opisDel'>Opis del</label>
          <input
            type='text'
            id='opisDel'
            placeholder='Opis del'
            ref={opisDelRef}
          />
          {errors.opisDel && <StyledError>{errors.opisDel}</StyledError>}

          <input type='submit' value='Dodaj nalog' />
        </Form>
      </Container>
    </>
  );
};

export default NovNalog;
