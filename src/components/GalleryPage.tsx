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

/* Henter inn og lagrer lydfilene som typen NodeRequire */
const mp3s: NodeRequire[] = [];
mp3s[0] = require('../assets/0_Oppvask.mp3');
mp3s[1] = require('../assets/1_Mikro.mp3');
mp3s[2] = require('../assets/2_Pasta.mp3');
mp3s[3] = require('../assets/3_Gardin.mp3');
mp3s[4] = require('../assets/4_Gitar.mp3');
mp3s[5] = require('../assets/5_Vind.mp3');
mp3s[6] = require('../assets/6_Vandring.mp3');
mp3s[7] = require('../assets/7_Bil.mp3');
mp3s[8] = require('../assets/8_Bok.mp3');
mp3s[9] = require('../assets/9_Gitter.mp3');

/* Interface til diktene */
interface Poem {
  title: string;
  author: string;
  lines: string[];
  isFavorite?: boolean;
  mp3_index?: number;
}

const GalleryPage = () => {
  const lang = useContext(GlobalLangContext);

  /* Her kommer det en del states som er lagret i web storage */

  /* Fargetema som velges lagres i Localstorage, dvs at dersom 
  bruker lukker fanen, eller går inn på en ny så er fortsatt
  fargetema beholdt */
  const [colorTheme, setColorTheme] = useWebStorage(
    'Theme',
    ColorTheme.theme1,
    StorageType.LocalStorage
  );
  /* FavorittDikt lagres bare i sessionstorage, dvs at de er lagret så
  lenge brukeren er inne på samme fane, og kan gå frem og tilbake i historien
  for å se ulike valg */
  const [favoritePoems, setFavoritePoems] = useWebStorage(
    'FavoritePoems',
    [],
    StorageType.SessionStorage
  );

  /* Antall figurer lagres som Session Storage */
  const [figureAmount, setFigureAmount] = useWebStorage(
    'FigureAmount',
    5,
    StorageType.SessionStorage
  );

  /* Komplementærtema som brukes når fancymodus er på er lagret
  som Session Storage */
  const [complementaryTheme, setComplementaryTheme] = useWebStorage(
    'ComplementaryTheme',
    false,
    StorageType.SessionStorage
  );

  /* Dikt som hentes fra PoetryDB legges i state */
  const [poems, setPoems] = useState<Poem[]>([]);
  /* Loading state for å kunne vise ventetekst mens data hentes fra api */
  const [loading, setLoading] = useState(false);
  /* Når bruker trykker på hjertesymbolet vises favorittene */
  const [showFavorites, setShowFavorites] = useState(false);

  /* useEffect - hooken som nå kjøres kun ved første innlasting av komponenten
  på grunn av en tom avhengighetsliste [].  */
  useEffect(() => {
    /* Setter loading til sant når den starter */
    setLoading(true);
    fetch('https://poetrydb.org/linecount,poemcount/8;10')
      .then((res: Response) => res.json())
      /* Oppdaterer lokal state med diktene som er hentet */

      .then((poemData: Poem[]) => {
        poemData.map((poem, index) => (poem.mp3_index = index));
        setPoems(poemData);
      })
      /* Henting av data er ferdig, og da er og lasting ferdig */

      .then(() => setLoading(false));
  }, []);

  /* InputSlider, oppdatarer hvor mange figurer  som vises på hver dikt komponent*/

  const updateFigureAmount = (
    /* Tar inn både MouseEvent og TouchEvent for at den skal fungere bra
    på både maskin med musepeker og touch-enheter*/
    event: MouseEvent<HTMLInputElement> | TouchEvent<HTMLInputElement>
  ) => {
    /* Pga. ulike eventtyper må target castes som samme element-type */
    const target = event.target as HTMLInputElement;
    setFigureAmount(target.valueAsNumber);
  };

  /* Toggle av fancymodus */
  const onComplementaryToggle = () => {
    setComplementaryTheme(!complementaryTheme);
  };

  /* Toggle av favoritter */
  const onFavoriteToggle = () => {
    setShowFavorites(!showFavorites);
  };

  /* Legger til valgt dikt-objekt som favoritt dikt */
  const addFavoritePoem = (poem: Poem) => {
    /* Dersom det ikke er favoritt, legg til, ellers om bruker 
    ønsker å fjerne det fra favoritt dikt: fjern */
    poem.isFavorite = poem.isFavorite ? false : true;

    /* Dersom det er nytt dikt så legges det til
    Dersom det er dikt som har vært favoritt så oppdateres 
    bare isFavorite attributtet i den listen av favoritter
    som allerede finnes */
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
      {/* Dersom galleri laster inn data, så vises en laste-seksjon */}
      {loading ? (
        <div className="GalleryPage-loading-section">
          <p className="GalleryPage-loading-text">
            {translations[lang].galleryLoading}
          </p>
        </div>
      ) : (
        <div className="General-container">
          <h1 className="GalleryPage-title">{translations[lang].gallery}</h1>

          {/* Div som inneholder handlingene som parametriserer utstillingen */}
          <div className="GalleryPage-actions">
            {/* Dropdown for å velge fargetema */}
            <div className="GalleryPage-dropdown">
              <button
                className="GalleryPage-dropbtn"
                style={{ background: colorTheme.color1 }}
              >
                {translations[lang].theme}: {colorTheme.name[lang]}
              </button>
              {/* Når et fargetema er valgt oppdaterer state ColorTheme, som igjen rendrer 
              komponenten på nytt med valgte fargetema */}
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

            {/* Hjerteikonet velges for å vise/skjule favoritt-dikt */}
            <div>
              <span
                className="GalleryPage-favorite-btn"
                onClick={onFavoriteToggle}
              >
                {/* Når favoritter vises er hjertet fylt, men ellers har det bare en rød kantlinje */}
                <i className={`${showFavorites ? 'fas' : 'far'} fa-heart`}></i>
              </span>
            </div>

            {/* Fancymodus av/på: */}
            <div>
              <button
                className={`GalleryPage-complementary-btn ${
                  /* Når fancyModus er valgt så legges det til en klasse
                  som endrer bakgrunnsfarge på knappen
                  og kjører en animasjon */
                  complementaryTheme
                    ? 'GalleryPage-complementary-btn-fancy'
                    : ''
                }`}
                onClick={onComplementaryToggle}
              >
                {/* Viser tekst som passer til valgt språk */}
                {translations[lang].fancyMode}:{' '}
                {complementaryTheme
                  ? translations[lang].on
                  : translations[lang].off}
              </button>
            </div>

            {/* Slider der man velger hvor mange figurer som skal vises på hvert dikt */}
            <div>
              <p className="text-center GalleryPage-figure-amount-meta">
                {translations[lang].figAmount}:
              </p>
              <input
                type="range"
                className="GalleryPage-slider"
                min={5}
                max={25}
                defaultValue={figureAmount}
                /* Hvert steg skal endre med verdien 5 */
                step={5}
                /* Legger til to ulike eventer for at touch og musepeker-enheter
                skal kunne bruke sliderene godt */
                onMouseUp={updateFigureAmount}
                onTouchEnd={updateFigureAmount}
              />
              <span className="GalleryPage-figure-amount"> {figureAmount}</span>
            </div>
          </div>

          {/* Seksjon hvor diktene vises */}
          <div className="GalleryPage-container">
            {/* Dersom visFavoritter er valgt så filtreres ut diktene som ikke er favoritter */}
            {poems ? (
              (showFavorites
                ? favoritePoems.filter((poem) => poem.isFavorite)
                : poems
              )
                /* Kjører gjennom alle dikt-objektene som er valgt ut så langt
                og lager en ny GalleryItem komponent som blir tilpasset med props
                fra det gjeldende diktet */
                .map((poemObj: Poem) => (
                  <GalleryItem
                    key={poemObj.title}
                    poem={poemObj}
                    colorTheme={colorTheme}
                    complementaryTheme={complementaryTheme}
                    amount={figureAmount}
                    onChange={addFavoritePoem}
                    mp3={
                      poemObj.mp3_index !== undefined
                        ? mp3s[poemObj.mp3_index]
                        : null
                    }
                  />
                ))
            ) : (
              <p>nothing here</p>
            )}
            {/* Dersom ingen favorittdikt er lagt til når man er på favorittsiden så vises
            en tilbakemelding til brukeren om dette */}
            {showFavorites ? (
              favoritePoems.filter((poem) => poem.isFavorite).length >
              0 ? null : (
                <h3>{translations[lang].noFavorites}</h3>
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
