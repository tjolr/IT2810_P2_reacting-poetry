export enum FigureType {
  Rectangle = 'rectangle',
  Square = 'square',
  Circle = 'circle',
  Ellipse = 'ellipse',
}

export interface ColorThemeInterface {
  color1: string;
  color2: string;
}

export const ColorTheme = {
  theme1: {
    color1: '#fcc5c5',
    color2: '#D4AD9B',
  },
  theme2: {
    color1: '#BBEDD7',
    color2: '#86B094',
  },
  theme3: {
    color1: '#D9C0BF',
    color2: '#D6AF89',
  },
};
