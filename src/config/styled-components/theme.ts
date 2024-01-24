import { DefaultTheme } from 'styled-components';
import { device } from '../constants';

export const theme: DefaultTheme = {
  colors: {
    primary: '#1A1B1D',
    secondary: '#F3F3F4',
    text: '#2B2E34',
    back: '#d3d3d3',
    accent: '#FF7D23',
    accentHover: '#F5821F',
    error: '#cc0000',
  },
  device: device,
  textSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
    xl: '1.25rem',
  },
};
