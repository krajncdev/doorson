import 'styled-components';
import { ISize, ITextSizes } from '../types';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      back: string;
      text: string;
      accent: string;
      accentHover: string;
      error: string;
    };
    device: ISize;
    textSizes: ITextSizes;
  }
}
