import styled from 'styled-components';

type TButtonColors = 'primary' | 'accent';

export const Button = styled.button<{ color?: TButtonColors }>`
  background-color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.accent};
  color: ${(props) =>
    props.color === 'accent' || props.color === null
      ? props.theme.colors.secondary
      : props.theme.colors.text};
  padding: 0.375rem 0.5rem;
  border-radius: 0.125rem;

  & a,
  a:visited {
    color: ${(props) =>
      !props.color
        ? props.theme.colors.secondary
        : props.color === 'accent'
        ? props.theme.colors.secondary
        : props.theme.colors.text};
  }
`;
