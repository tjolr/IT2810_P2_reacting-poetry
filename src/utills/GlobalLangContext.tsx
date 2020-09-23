import React from 'react';
const GlobalLangContext = React.createContext('');
export const GlobalLangProvider = GlobalLangContext.Provider;
export default GlobalLangContext;

export const translations = {
  english: {
    gallery: 'Gallery',
    home: 'Home',
    theme: 'Theme',
    figAmount: 'Number of figures',
    fancyMode: 'Fancymode',
    off: 'off',
    on: 'on',
    close: 'Close',
    createdBy: 'Created by',
    project: 'project',
    welcomeText: 'Welcome to',
    toGallery: 'To gallery',
  },
  norwegian: {
    gallery: 'Galleri',
    home: 'Hjem',
    theme: 'Tema',
    figAmount: 'Antall figurer',
    fancyMode: 'Fancymodus',
    off: 'av',
    on: 'på',
    close: 'lukk',
    createdBy: 'Laget av',
    project: 'prosjekt',
    welcomeText: 'Velkommen til',
    toGallery: 'Til galleriet',
  },
};
