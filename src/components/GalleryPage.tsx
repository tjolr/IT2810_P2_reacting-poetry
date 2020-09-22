import React, { useState, MouseEvent, TouchEvent, useEffect } from 'react';
import '../ColorPalette.css';
import '../Container.css';
import './GalleryPage.css';
import '../General.css';
import GalleryItem from './GalleryItem';
import { ColorTheme } from './GalleryItem.dto';
import { useWebStorage, StorageType } from '../utills/LocalStorage';

interface Poem {
  title: string;
  author: string;
  lines: string[];
}

const GalleryPage = () => {
  const [figureAmount, setFigureAmount] = useWebStorage(
    'FigureAmount',
    5,
    StorageType.SessionStorage
  );

  const [colorTheme, setColorTheme] = useWebStorage(
    'Theme',
    ColorTheme.theme1,
    StorageType.LocalStorage
  );
  const [complementaryTheme, setComplementaryTheme] = useWebStorage(
    'ComplementaryTheme',
    true,
    StorageType.LocalStorage
  );

  const [poems, setPoems] = useState<Poem[]>([]);

  useEffect(() => {
    fetch('https://poetrydb.org/linecount,poemcount/8;10')
      .then((res: Response) => res.json())
      .then((poemData: Poem[]) => setPoems(poemData));
  }, []);

  const updateFigureAmount = (
    event: MouseEvent<HTMLInputElement> | TouchEvent<HTMLInputElement>
  ) => {
    const target = event.target as HTMLInputElement;
    setFigureAmount(target.valueAsNumber);
  };

  const onComplementaryToggle = () => {
    setComplementaryTheme(!complementaryTheme);
  };

  return (
    <div className="General-container">
      <h1 className="GalleryPage-title">Gallery</h1>
      <div className="GalleryPage-actions">
        <div className="GalleryPage-dropdown">
          <button
            className="GalleryPage-dropbtn"
            style={{ background: colorTheme.color1 }}
          >
            Theme: {colorTheme.name}
          </button>
          <div className="GalleryPage-dropdown-content">
            <button onClick={() => setColorTheme(ColorTheme.theme1)}>
              {ColorTheme.theme1.name}
            </button>
            <button onClick={() => setColorTheme(ColorTheme.theme2)}>
              {ColorTheme.theme2.name}
            </button>
            <button onClick={() => setColorTheme(ColorTheme.theme3)}>
              {ColorTheme.theme3.name}
            </button>
          </div>
        </div>

        <div>
          <p className="text-center GalleryPage-figure-amount-meta">
            Number of figures:
          </p>
          <input
            id="typeinp"
            type="range"
            className="GalleryPage-slider"
            min={5}
            max={25}
            defaultValue={figureAmount}
            step={5}
            onMouseUp={updateFigureAmount}
            onTouchEnd={updateFigureAmount}
          />
          <span className="GalleryPage-figure-amount"> {figureAmount}</span>
        </div>
        <div>
          <button
            className={`GalleryPage-complementary-btn ${
              complementaryTheme ? 'GalleryPage-complementary-btn-fancy' : ''
            }`}
            onClick={onComplementaryToggle}
          >
            Fancymode: {complementaryTheme ? 'on' : 'off'}
          </button>
        </div>
      </div>
      <div className="GalleryPage-container">
        {poems ? (
          poems.map((d) => (
            <GalleryItem
              key={d.title}
              poem={d}
              colorTheme={colorTheme}
              complementaryTheme={complementaryTheme}
              amount={figureAmount}
              figureType={null}
            />
          ))
        ) : (
          <p>nothing here</p>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
