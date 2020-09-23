import React, {
  useState,
  MouseEvent,
  TouchEvent,
  useEffect,
  useContext,
} from 'react';
import '../ColorPalette.css';
import '../Container.css';
import './GalleryPage.css';
import '../General.css';
import '../assets/css/all.css';
import GalleryItem from './GalleryItem';
import { useWebStorage, StorageType } from '../utills/WebStorage';
import { ColorTheme } from '../utills/GalleryTheme';
import GlobalLangContext, { translations } from '../utills/GlobalLangContext';

const mp3s: NodeRequire[] = [];
mp3s[0] = require('../assets/testing.mp3');
mp3s[1] = require('../assets/testing.mp3');
mp3s[2] = require('../assets/testing.mp3');
mp3s[3] = require('../assets/testing.mp3');
mp3s[4] = require('../assets/testing.mp3');
mp3s[5] = require('../assets/testing.mp3');
mp3s[6] = require('../assets/testing.mp3');
mp3s[7] = require('../assets/testing.mp3');
mp3s[8] = require('../assets/testing.mp3');
mp3s[9] = require('../assets/testing.mp3');

interface Poem {
  title: string;
  author: string;
  lines: string[];
  isFavorite?: boolean;
}

const GalleryPage = () => {
  const lang = useContext(GlobalLangContext);

  const [colorTheme, setColorTheme] = useWebStorage(
    'Theme',
    ColorTheme.theme1,
    StorageType.LocalStorage
  );
  const [favoritePoems, setFavoritePoems] = useWebStorage(
    'FavoritePoems',
    [],
    StorageType.SessionStorage
  );
  const [figureAmount, setFigureAmount] = useWebStorage(
    'FigureAmount',
    5,
    StorageType.SessionStorage
  );

  const [complementaryTheme, setComplementaryTheme] = useWebStorage(
    'ComplementaryTheme',
    false,
    StorageType.SessionStorage
  );

  const [poems, setPoems] = useState<Poem[]>([]);
  const [loading, setLoading] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://poetrydb.org/linecount,poemcount/8;10')
      .then((res: Response) => res.json())
      .then((poemData: Poem[]) => setPoems(poemData))
      .then(() => setLoading(false));
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

  const onFavoriteClick = () => {
    setShowFavorites(!showFavorites);
  };

  const addFavoritePoem = (poem: Poem) => {
    poem.isFavorite = poem.isFavorite ? false : true;
    const currentPoemIndex = favoritePoems.indexOf(poem);
    if (currentPoemIndex === -1) {
      setFavoritePoems([...favoritePoems, poem]);
    } else {
      let tmpFavoritePoems = [...favoritePoems];
      tmpFavoritePoems[currentPoemIndex] = poem;
      setFavoritePoems(tmpFavoritePoems);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="GalleryPage-loading-section">
          <p className="GalleryPage-loading-text">Gallery is loading...</p>
        </div>
      ) : (
        <div className="General-container">
          <h1 className="GalleryPage-title">{translations[lang].gallery}</h1>
          <div className="GalleryPage-actions">
            <div className="GalleryPage-dropdown">
              <button
                className="GalleryPage-dropbtn"
                style={{ background: colorTheme.color1 }}
              >
                {translations[lang].theme}: {colorTheme.name[lang]}
              </button>
              <div className="GalleryPage-dropdown-content">
                <button onClick={() => setColorTheme(ColorTheme.theme1)}>
                  {ColorTheme.theme1.name[lang]}
                </button>
                <button onClick={() => setColorTheme(ColorTheme.theme2)}>
                  {ColorTheme.theme2.name[lang]}
                </button>
                <button onClick={() => setColorTheme(ColorTheme.theme3)}>
                  {ColorTheme.theme3.name[lang]}
                </button>
              </div>
            </div>

            <div>
              <span
                className="GalleryPage-favorite-btn"
                onClick={onFavoriteClick}
              >
                <i className={`${showFavorites ? 'fas' : 'far'} fa-heart`}></i>
              </span>
            </div>
            <div>
              <button
                className={`GalleryPage-complementary-btn ${
                  complementaryTheme
                    ? 'GalleryPage-complementary-btn-fancy'
                    : ''
                }`}
                onClick={onComplementaryToggle}
              >
                {translations[lang].fancyMode}:{' '}
                {complementaryTheme
                  ? translations[lang].on
                  : translations[lang].off}
              </button>
            </div>
            <div>
              <p className="text-center GalleryPage-figure-amount-meta">
                {translations[lang].figAmount}:
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
          </div>

          <div className="GalleryPage-container">
            {poems ? (
              (showFavorites
                ? favoritePoems.filter((poem) => poem.isFavorite)
                : poems
              ).map((poemObj, index) => (
                <GalleryItem
                  key={poemObj.title}
                  poem={poemObj}
                  colorTheme={colorTheme}
                  complementaryTheme={complementaryTheme}
                  amount={figureAmount}
                  figureType={null}
                  onChange={addFavoritePoem}
                  mp3={mp3s[index]}
                />
              ))
            ) : (
              <p>nothing here</p>
            )}
            {showFavorites ? (
              favoritePoems.filter((poem) => poem.isFavorite).length >
              0 ? null : (
                <h3>You don't have any favorites yet!</h3>
              )
            ) : null}
          </div>
        </div>
      )}
      );
    </div>
  );
};

export default GalleryPage;
