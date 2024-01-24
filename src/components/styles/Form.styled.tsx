import styled from 'styled-components';

export const Form = styled.form`
  & input[type='text'],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  & input[type='submit'] {
    width: 100%;
    background-color: ${(props) => props.theme.colors.accent};
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  & input[type='submit']:hover {
    background-color: ${(props) => props.theme.colors.accentHover};
  }

  & label {
    display: inline-block;
  }

  & input {
    outline: none;
  }

  & input:focus {
    outline-style: solid;
    outline-color: ${(props) => props.theme.colors.accent};
    outline-width: thin;
  }

  & div.react-datepicker-wrapper {
    width: 100%;
  }
`;
