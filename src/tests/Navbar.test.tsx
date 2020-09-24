import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import GlobalLangContext from '../utills/GlobalLangContext';
import { Languages } from '../utills/GalleryTheme';

test('it renders correctly', () => {
  const tree = renderer
    .create(
      <GlobalLangContext.Provider value={Languages.EN}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </GlobalLangContext.Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
