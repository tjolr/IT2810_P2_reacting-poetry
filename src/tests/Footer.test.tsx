import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';
import GlobalLangContext from '../utills/GlobalLangContext';
import { Languages } from '../utills/GalleryTheme';

test('it renders correctly', () => {
  const tree = renderer
    .create(
      <GlobalLangContext.Provider value={Languages.EN}>
        <Footer />
      </GlobalLangContext.Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
