import React from 'react';
import '../ColorPalette.css';
import '../Container.css';
import './GalleryItem.css';
import {FigureType, ColorThemeInterface} from './GalleryItem.dto';

const GalleryItem = (props: any) => {
  const figures: any = [];

  const generateRectangles = (
    amount: number,
    colorTheme: ColorThemeInterface
  ) => {
    for (let i = 1; i <= amount; i++) {
      figures.push(
        <svg
          className="svg"
          style={{
            animationDuration: `${Math.random() * 17 + 12}s`,
            animationDelay: `${Math.random() * 10}s`,
            left: `${Math.random() * 100}%`,
            top: '25rem',
            width: `${Math.random() * 3 + 1.5}rem`,
            height: `${Math.random() * 3 + 1.5}rem`,
            borderRadius: '5px',
            background: colorTheme.color1,
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
          className="svg"
          style={{
            animationDuration: `${Math.random() * 26 + 10}s`,
            animationDelay: `${Math.random() * 10}s`,
            left: `${Math.random() * 100}%`,
            top: '25rem',
            width: `${sideLength}rem`,
            height: `${sideLength}rem`,
            borderRadius: '5px',
            background: colorTheme.color1,
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
          className="svg"
          style={{
            animationDuration: `${Math.random() * 20 + 7}s`,
            animationDelay: `${Math.random() * 10}s`,
            left: `${Math.random() * 100}%`,
            top: '25rem',
            width: `${Math.random() * 3 + 1.5}rem`,
            height: `${Math.random() * 3 + 1.5}rem`,
            borderRadius: '100%',
            background: colorTheme.color1,
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
          className="svg"
          style={{
            animationDuration: `${Math.random() * 10 + 9}s`,
            animationDelay: `${Math.random() * 10}s`,
            left: `${Math.random() * 100}%`,
            top: '25rem',
            width: `${sideLength}rem`,
            height: `${sideLength}rem`,
            borderRadius: '100%',
            background: colorTheme.color1,
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
    colorTheme: any,
    figureType = null
  ) => {
    let chosenFigureType: FigureType | null;
    if (figureType === null) {
      chosenFigureType = randomEnumValue(FigureType);
    } else {
      chosenFigureType = figureType;
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
      className={`GalleryItem-item ${props.colorTheme}`}
      style={{
        background: `linear-gradient(130deg,${props.colorTheme.color1}, ${props.colorTheme.color2})`,
      }}
    >
      <h2 className="GalleryItem-title">{props.poem.title}</h2>
      {figures}
    </div>
  );
};

export default GalleryItem;
