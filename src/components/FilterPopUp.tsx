import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { TFilter } from './NalogiTable';
import CheckMarkIcon from '../assets/checkmark.svg';
import { Text } from './styles';

const PopUp = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid black;
  top: 90px;
  right: 50px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: fit-content;
  padding: 0.5rem;
`;
const CheckBox = styled.div`
  height: 12px;
  width: 12px;
  border: 1px solid lightgray;
  border-radius: 0.1rem;
  padding: 0.125rem;
`;

const PopUpRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`;

interface IFilterPopUpProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  filter: TFilter;
  setFilter: Dispatch<SetStateAction<TFilter>>;
}

type TFilterOptions = 'ODPRTO' | 'ZAPRTO' | null;

const FilterPopUp = (props: IFilterPopUpProps) => {
  const { isOpen, setIsOpen, filter, setFilter } = props;
  const handlePopUpChange = (change: TFilterOptions) => {
    setFilter(change);
    setIsOpen(false);
  };
  return (
    isOpen && (
      <PopUp>
        <PopUpRow
          onClick={() =>
            filter === 'ZAPRTO' || filter === null
              ? handlePopUpChange('ODPRTO')
              : handlePopUpChange(null)
          }
        >
          <CheckBox>
            {filter === 'ODPRTO' && (
              <img src={CheckMarkIcon} alt='checkmarkicon' />
            )}
          </CheckBox>
          <Text>Odprto</Text>
        </PopUpRow>
        <PopUpRow
          onClick={() =>
            filter === 'ODPRTO' || filter === null
              ? handlePopUpChange('ZAPRTO')
              : handlePopUpChange(null)
          }
        >
          <CheckBox>
            {filter === 'ZAPRTO' && (
              <img src={CheckMarkIcon} alt='checkmarkicon' />
            )}
          </CheckBox>
          <Text>Zaprto</Text>
        </PopUpRow>
      </PopUp>
    )
  );
};

export default FilterPopUp;
