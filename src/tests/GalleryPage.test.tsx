import React from 'react';
import renderer from 'react-test-renderer';
import GalleryPage from '../components/GalleryPage';
import GlobalLangContext from '../utills/GlobalLangContext';
import { Languages } from '../utills/GalleryTheme';

test('it renders correctly', () => {
  const tree = renderer
    .create(
      <GlobalLangContext.Provider value={Languages.EN}>
        <GalleryPage />
      </GlobalLangContext.Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
