import styled from 'styled-components';
import { TTextSizes } from '../../config/types';

export const Text = styled.p<{ size?: TTextSizes }>`
  font-size: ${(props) =>
    props.size
      ? props.theme.textSizes[props.size]
      : props.theme.textSizes.medium};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;
