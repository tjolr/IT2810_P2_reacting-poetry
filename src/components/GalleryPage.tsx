import React, {useState} from 'react';
import '../ColorPalette.css';
import '../Container.css';
import './GalleryPage.css';
import GalleryItem from './GalleryItem';
import {ColorTheme, ColorThemeInterface} from './GalleryItem.dto';

interface Poem {
  title: string;
  text: string;
}

enum FigureAmount {
  Few = 5,
  Normal = 10,
  Many = 20,
}

interface Settings {
  amount: FigureAmount;
  colorTheme: ColorThemeInterface;
}

const GalleryPage = () => {
  const [figureAmount, setFigureAmount] = useState(5);
  const [colorTheme, setColorTheme] = useState(ColorTheme.theme1);

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
    items.push(
      <GalleryItem
        key={i}
        poem={poems[i]}
        colorTheme={colorTheme}
        amount={figureAmount}
        figureType={null}
      />
    );
    console.log(poems[i]);
  }

  const updateFigureAmount = (e: any) => {
    setFigureAmount(e.target.value);
  };

  return (
    <div className="General-container">
      <h1 className="GalleryPage-title">Gallery</h1>
      <div className="GalleryPage-actions">
        <div className="dropdown">
          <a className="dropbtn" style={{background: colorTheme.color1}}>
            Color Theme
          </a>
          <div className="dropdown-content">
            <a href="#" onClick={() => setColorTheme(ColorTheme.theme1)}>
              Theme 1
            </a>
            <a href="#" onClick={() => setColorTheme(ColorTheme.theme2)}>
              Theme 2
            </a>
            <a href="#" onClick={() => setColorTheme(ColorTheme.theme3)}>
              Theme 3
            </a>
          </div>
        </div>

        <div>
          <input
            id="typeinp"
            type="range"
            className="slider"
            min={FigureAmount.Few}
            max={FigureAmount.Many}
            defaultValue={figureAmount}
            step={5}
            onMouseUp={updateFigureAmount}
            onTouchEnd={updateFigureAmount}
          />
          <span> {figureAmount}</span>
        </div>
      </div>
      <div className="GalleryPage-container">{items}</div>
    </div>
  );
};

export default GalleryPage;
