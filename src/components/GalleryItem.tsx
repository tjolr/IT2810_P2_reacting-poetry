import React, { useState, useContext } from 'react';
import '../ColorPalette.css';
import '../Container.css';
import './GalleryItem.css';
import { FigureType } from './FigureType.dto';
import { ColorThemeInterface } from '../utills/GalleryTheme';
import GlobalLangContext, { translations } from '../utills/GlobalLangContext';

const GalleryItem = (props: any) => {
  /* Henter inn globalt language fra Context */
  const lang = useContext(GlobalLangContext);

  /* Vise eller gjemme modal som viser valgt dikt med tekst */
  const [showModal, setShowModal] = useState(false);

  const onItemClick = () => {
    /* Brukes kun for å sette show fra false til true. 
    Motsatt vei gjøres ved lukk-knappen */
    if (!showModal) {
      setShowModal(true);
    }
  };
  const onItemClose = () => setShowModal(false);

  const onFavoriteClick = () => {
    if (!props.poem.isFavorite) {
    }
    /* Ved dikt satt som favoritt kalles callback-funksjonen som er sendt
    med som prop til GalleryItem. I forelderkomponenten kalles onChange funksjonen som
    endrer sin egen state med favorittdikt */
    props.onChange(props.poem);
  };

  const figures: any = [];
  /* Funksjon for å generere tilfeldige rektangler
  Tar inn parametrene antallFigurer og fargeTema som
  er valgt i parametriseringen */
  const generateRectangles = (
    amount: number,
    colorTheme: ColorThemeInterface
  ) => {
    for (let i = 1; i <= amount; i++) {
      figures.push(
        <svg
          key={i}
          className="svg"
          /* Style: genererer tilfeldig lengde, forsinkelse, posisjon, bredde, høyde
          Setter bakgrunn til fargetema */
          style={{
            animationDuration: `${Math.random() * 17 + 12}s`,
            animationDelay: `${Math.random() * 10}s`,
            left: `${Math.random() * 100}%`,
            top: '25rem',
            width: `${Math.random() * 3 + 1.5}rem`,
            height: `${Math.random() * 3 + 1.5}rem`,
            borderRadius: '5px',
            background: colorTheme.figureColor,
          }}
        >
          <rect width="100%" height="100%" x="0" y="0" />
        </svg>
      );
    }
  };

  const generateSquares = (amount: number, colorTheme: ColorThemeInterface) => {
    for (let i = 1; i <= amount; i++) {
      /* Lages på samme måte som rektangler, men sidelengdene er like
      og lager derfor en const her som definerer sidelengde */
      const sideLength: number = Math.random() * 3 + 1.5;

      figures.push(
        <svg
          key={i}
          className="svg"
          style={{
            animationDuration: `${Math.random() * 26 + 10}s`,
            animationDelay: `${Math.random() * 10}s`,
            left: `${Math.random() * 100}%`,
            top: '25rem',
            width: `${sideLength}rem`,
            height: `${sideLength}rem`,
            borderRadius: '5px',
            background: colorTheme.figureColor,
          }}
        >
          <rect width="100%" height="100%" x="0" y="0" />
        </svg>
      );
    }
  };

  /* Genererer ellipsefigurer */
  const generateEllipses = (
    amount: number,
    colorTheme: ColorThemeInterface
  ) => {
    for (let i = 1; i <= amount; i++) {
      figures.push(
        <svg
          key={i}
          className="svg"
          style={{
            animationDuration: `${Math.random() * 20 + 7}s`,
            animationDelay: `${Math.random() * 10}s`,
            left: `${Math.random() * 100}%`,
            top: '25rem',
            width: `${Math.random() * 3 + 1.5}rem`,
            height: `${Math.random() * 3 + 1.5}rem`,
            borderRadius: '100%',
            background: colorTheme.figureColor,
          }}
        >
          <ellipse cx="50%" cy="50%" rx="100%" ry="50%" />
        </svg>
      );
    }
  };

  /* Genereer sirkler */
  const generateCircles = (amount: number, colorTheme: ColorThemeInterface) => {
    for (let i = 1; i <= amount; i++) {
      const sideLength: number = Math.random() * 3 + 1.5;

      figures.push(
        <svg
          key={i}
          className="svg"
          style={{
            animationDuration: `${Math.random() * 10 + 9}s`,
            animationDelay: `${Math.random() * 10}s`,
            left: `${Math.random() * 100}%`,
            top: '25rem',
            width: `${sideLength}rem`,
            height: `${sideLength}rem`,
            borderRadius: '100%',
            background: colorTheme.figureColor,
          }}
        >
          <circle cx="50%" cy="50%" r="45%" />
        </svg>
      );
    }
  };

  // Code snippet from https://stackblitz.com/edit/typescript-random-enum-value
  const randomEnumValue = (enumeration: any) => {
    const values = Object.keys(enumeration);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return enumeration[enumKey];
  };
  // End code snippet

  const generateFigures = (amount: number, colorTheme: ColorThemeInterface) => {
    /* Velger en tilfeldig enum fra de forhåndsdefinerte figuretypene */
    const currentFigureType: FigureType = randomEnumValue(FigureType);

    /* Når Fancymodus er aktivert så brukes komlpementærfargene */
    colorTheme.figureColor = props.complementaryTheme
      ? colorTheme.complementary
      : colorTheme.color1;

    /* Generer tilsvarende figurer fra valgt figurtype */
    if (currentFigureType === FigureType.Rectangle) {
      generateRectangles(amount, colorTheme);
    } else if (currentFigureType === FigureType.Square) {
      generateSquares(amount, colorTheme);
    } else if (currentFigureType === FigureType.Circle) {
      generateCircles(amount, colorTheme);
    } else if (currentFigureType === FigureType.Ellipse) {
      generateEllipses(amount, colorTheme);
    }
  };

  generateFigures(props.amount, props.colorTheme);

  return (
    <div
      className={
        !showModal
          ? `GalleryItem-item GalleryItem-item-no-modal ${props.colorTheme}`
          : `GalleryItem-item ${props.colorTheme}`
      }
      style={{
        background: `linear-gradient(130deg,${props.colorTheme.color1}, ${props.colorTheme.color2})`,
      }}
      /* Vis modal med dikt ved klikk */
      onClick={onItemClick}
    >
      <h2 className="GalleryItem-title">{props.poem.title}</h2>
      {/* Setter inn figurene som er generert */}
      {figures}
      {showModal ? (
        <div className="GalleryItem-modal">
          <div
            className="GalleryItem-modal-content"
            style={{
              background: `linear-gradient(200deg,${props.colorTheme.color1}, ${props.colorTheme.color2})`,
            }}
          >
            <span className="GalleryItem-close" onClick={onItemClose}>
              {translations[lang].close}
            </span>
            <h1 className="GalleryItem-poem-title">{props.poem.title}</h1>
            {/* Looper igjennom hver linje av tekst fra diktet */}
            {props.poem.lines
              ? props.poem.lines.map((line) => (
                  <p
                    className="GalleryItem-poem-text"
                    /* Generer en unik nøkkel ved å legge til linje og et tilfeldig desimaltall */
                    key={line + Math.random()}
                  >
                    {line}
                  </p>
                ))
              : null}
            <p className="GalleryItem-poem-author">- {props.poem.author}</p>
            <span
              className="GalleryPage-favorite-btn"
              onClick={onFavoriteClick}
            >
              {/* Dersom dikt er favorittdikt så vises et fylt hjerte */}
              <i
                className={`${props.poem.isFavorite ? 'fas' : 'far'} fa-heart`}
              ></i>
            </span>
          </div>
          {/* Spill av lyd! */}
          <audio autoPlay loop>
            <source src={props.mp3} type="audio/mpeg"></source>
          </audio>
        </div>
      ) : null}
    </div>
  );
};

export default GalleryItem;
