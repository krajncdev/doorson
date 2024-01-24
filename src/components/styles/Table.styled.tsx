import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  border: thin solid lightgray;

  & th {
    padding-top: 0.5rem;
  }

  & tbody tr:hover {
    background-color: ${(props) => props.theme.colors.back};
  }

  & tbody tr {
    cursor: pointer;
  }

  & th img {
    display: inline-block;
  }

  & td {
    text-align: center;
    padding: 0.25rem;
  }
`;
