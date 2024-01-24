type TStatus = 'ZAPRTO' | 'ODPRTO';

export interface ISize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface ITextSizes {
  small: string;
  medium: string;
  large: string;
  xl: string;
}

export type TTextSizes = 'small' | 'medium' | 'large' | 'xl';

export interface INalog {
  id: number;
  imeStranke: string;
  opisNapake: string;
  lokacijaNapake: string;
  opisDel: string;
  datumKreiranja: Date;
  datumZaključka: Date | null;
  status: TStatus;
}

export interface INalogSprememba {
  idNaloga: number;
  opisDel: string;
  datumZaključka: Date | null;
  status: TStatus;
}
