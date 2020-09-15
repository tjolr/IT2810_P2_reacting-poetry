import React from 'react';
import '../ColorPalette.css';
import '../Container.css';
import './GalleryPage.css';
import GalleryItem from './GalleryItem';

interface Poem {
  title: string;
  text: string;
}

const GalleryPage = () => {
  const poems: Poem[] = [
    {
      title: 'Hei',
      text: 'waodw jawdofwjkkkkggj wjd',
    },
    {
      title: 'Hei dwd ',
      text: 'waodw jawdojwfwaf wjd',
    },
    {
      title: 'Hedwdwi',
      text: 'waodw jawdogwgj wjd',
    },
    {
      title: 'Hwggeei',
      text: 'waodw jaghgegawdoj wjd',
    },
    {
      title: 'Hei',
      text: 'waodw jawdofwjkkkkggj wjd',
    },
    {
      title: 'Hei dwd ',
      text: 'waodw jawdojwfwaf wjd',
    },
    {
      title: 'Hedwdwi',
      text: 'waodw jawdogwgj wjd',
    },
    {
      title: 'Hwggeei',
      text: 'waodw jaghgegawdoj wjd',
    },
  ];

  const items = [];
  for (let i = 0; i < poems.length; i++) {
    items.push(<GalleryItem key={i} poem={poems[i]} />);
    console.log(poems[i]);
  }

  return (
    <div className="General-container">
      <h1 className="GalleryPage-title">Gallery</h1>
      <div className="GalleryPage-container">{items}</div>
    </div>
  );
};

export default GalleryPage;
