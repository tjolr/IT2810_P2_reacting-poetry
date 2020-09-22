import React from 'react';
import renderer from 'react-test-renderer';
import GalleryPage from '../components/GalleryPage';

test('it renders correctly', () => {
  const tree = renderer.create(<GalleryPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
