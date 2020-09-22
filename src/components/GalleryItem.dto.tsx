export enum FigureType {
  Rectangle = 'rectangle',
  Square = 'square',
  Circle = 'circle',
  Ellipse = 'ellipse',
}

export interface ColorThemeInterface {
  color1: string;
  color2: string;
  complementary: string;
  figureColor?: string;
  name: string;
}

export const ColorTheme = {
  theme1: {
    color1: '#fcc5c5',
    color2: '#D4AD9B',
    complementary: '#c0ffd5',
    name: 'Pink',
  },
  theme2: {
    color1: '#BBEDD7',
    color2: '#7fddb3',
    complementary: '#edbbd1',
    name: 'Green',
  },
  theme3: {
    color1: '#add8e6',
    color2: '#72bcd4',
    complementary: '#e6d8ad',
    name: 'Blue',
  },
};
