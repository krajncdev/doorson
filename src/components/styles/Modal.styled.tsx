import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 1rem;
  border-radius: 0.5rem;
  border: thin solid ${(props) => props.theme.colors.back};
  width: 30rem;
`;
