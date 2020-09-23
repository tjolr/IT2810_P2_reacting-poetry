export const ColorTheme: AllColorThemesInterface = {
  theme1: {
    color1: '#fcc5c5',
    color2: '#D4AD9B',
    complementary: '#c0ffd5',
    name: {
      english: 'Pink',
      norwegian: 'Rosa',
    },
  },
  theme2: {
    color1: '#BBEDD7',
    color2: '#7fddb3',
    complementary: '#edbbd1',
    name: {
      english: 'Green',
      norwegian: 'Grønn',
    },
  },
  theme3: {
    color1: '#add8e6',
    color2: '#72bcd4',
    complementary: '#e6d8ad',
    name: {
      english: 'Blue',
      norwegian: 'Blå',
    },
  },
};

interface AllColorThemesInterface {
  theme1: ColorThemeInterface;
  theme2: ColorThemeInterface;
  theme3: ColorThemeInterface;
}

export interface ColorThemeInterface {
  color1: string;
  color2: string;
  complementary: string;
  figureColor?: string;
  name: languageOptions;
}

export interface languageOptions {
  english: string;
  norwegian: string;
}

export enum Languages {
  EN = 'english',
  NO = 'norwegian',
}
