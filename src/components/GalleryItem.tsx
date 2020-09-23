import React, { useState, useEffect } from 'react';
import '../ColorPalette.css';
import '../Container.css';
import './GalleryItem.css';
import { FigureType, ColorThemeInterface } from './GalleryItem.dto';

const mp3_file = require('../assets/testing.mp3');

const GalleryItem = (props: any) => {
  const [showModal, setShowModal] = useState(false);

  const onItemClick = () => {
    if (!showModal) {
      setShowModal(true);
    }
  };
  const onItemClose = () => setShowModal(false);

  const figures: any = [];

  const generateRectangles = (
    amount: number,
    colorTheme: ColorThemeInterface
  ) => {
    for (let i = 1; i <= amount; i++) {
      figures.push(
        <svg
          key={i}
          className="svg"
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

  const generateFigures = (
    amount: number,
    colorTheme: ColorThemeInterface,
    figureType = null
  ) => {
    let chosenFigureType: FigureType | null;
    if (figureType === null) {
      chosenFigureType = randomEnumValue(FigureType);
    } else {
      chosenFigureType = figureType;
    }

    if (!props.complementaryTheme) {
      colorTheme.figureColor = colorTheme.color1;
    } else if (props.complementaryTheme) {
      colorTheme.figureColor = colorTheme.complementary;
    }

    if (chosenFigureType === FigureType.Rectangle) {
      generateRectangles(amount, colorTheme);
    } else if (chosenFigureType === FigureType.Square) {
      generateSquares(amount, colorTheme);
    } else if (chosenFigureType === FigureType.Circle) {
      generateCircles(amount, colorTheme);
    } else if (chosenFigureType === FigureType.Ellipse) {
      generateEllipses(amount, colorTheme);
    }
  };

  generateFigures(props.amount, props.colorTheme, props.figureType);

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
      onClick={onItemClick}
    >
      <h2 className="GalleryItem-title">{props.poem.title}</h2>
      {figures}
      {showModal ? (
        <div id="myModal" className="GalleryItem-modal">
          <div
            className="GalleryItem-modal-content"
            style={{
              background: `linear-gradient(200deg,${props.colorTheme.color1}, ${props.colorTheme.color2})`,
            }}
          >
            <span className="GalleryItem-close" onClick={onItemClose}>
              lukk
            </span>
            <h1 className="GalleryItem-poem-title">{props.poem.title}</h1>
            {props.poem.lines
              ? props.poem.lines.map((line) => (
                  <p
                    className="GalleryItem-poem-text"
                    key={line + Math.random()}
                  >
                    {line}
                  </p>
                ))
              : null}
            <p className="GalleryItem-poem-author">- {props.poem.author}</p>
          </div>
          <audio autoPlay loop>
            <source src={props.mp3} type="audio/mpeg"></source>
          </audio>
        </div>
      ) : null}
    </div>
  );
};

export default GalleryItem;
