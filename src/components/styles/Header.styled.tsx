import styled from 'styled-components';

export const Header = styled.header`
  font-size: large;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.primary};
`;
