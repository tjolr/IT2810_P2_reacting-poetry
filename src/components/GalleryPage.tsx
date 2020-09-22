import React, { useState, MouseEvent, TouchEvent, useEffect } from 'react';
import '../ColorPalette.css';
import '../Container.css';
import './GalleryPage.css';
import '../General.css';
import GalleryItem from './GalleryItem';
import { ColorTheme } from './GalleryItem.dto';

interface Poem {
  title: string;
  author: string;
  lines: string[];
}

enum FigureAmount {
  Few = 5,
  Many = 20,
}

const GalleryPage = () => {
  const [figureAmount, setFigureAmount] = useState<FigureAmount | number>(
    FigureAmount.Few
  );
  const [colorTheme, setColorTheme] = useState(ColorTheme.theme1);
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

  return (
    <div className="General-container">
      <h1 className="GalleryPage-title">Gallery</h1>
      <div className="GalleryPage-actions">
        <div className="dropdown">
          <button className="dropbtn" style={{ background: colorTheme.color1 }}>
            Theme: {colorTheme.name}
          </button>
          <div className="dropdown-content">
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
          <p className="text-center">Number of figures:</p>
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
          <span className="GalleryPage-figure-amount"> {figureAmount}</span>
        </div>
      </div>
      <div className="GalleryPage-container">
        {poems ? (
          poems.map((d) => (
            <GalleryItem
              key={d.title}
              poem={d}
              colorTheme={colorTheme}
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
