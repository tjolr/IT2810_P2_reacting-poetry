import React from 'react';

/* Oppretter en Context for Global Language */
const GlobalLangContext = React.createContext('');
/* Eksporterer Context Provider som den som eier context skal bruke */
export const GlobalLangProvider = GlobalLangContext.Provider;

/* Eksporterer context som forbrukerne bruker med useContext
-hooken */
export default GlobalLangContext;

/* Translations const!  */
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
    noFavorites: 'You do not have any favorites yet!',
    galleryLoading: 'Gallery is loading...',
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
    noFavorites: 'Du har ikke lagt til noen favoritter enda!',
    galleryLoading: 'Laster inn galleri...',
  },
};
