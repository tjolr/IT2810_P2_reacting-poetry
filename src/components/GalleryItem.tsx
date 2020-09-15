import React from 'react';
import '../ColorPalette.css';
import '../Container.css';
import './GalleryItem.css';

const GalleryItem = (props: any) => {
  const figures: any = [];

  const generateRectangles = () => {
    for (let i = 1; i <= 10; i++) {
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
          }}
        >
          <rect width="100%" height="100%" x="0" y="0" />
        </svg>
      );
    }
  };

  const generateSquares = () => {
    for (let i = 1; i <= 10; i++) {
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
          }}
        >
          <rect width="100%" height="100%" x="0" y="0" />
        </svg>
      );
    }
  };

  const generateEllipses = () => {
    for (let i = 1; i <= 10; i++) {
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
          }}
        >
          <ellipse cx="50%" cy="50%" rx="100%" ry="50%" />
        </svg>
      );
    }
  };

  const generateCircles = (amount: number) => {
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
          }}
        >
          <circle cx="50%" cy="50%" r="45%" />
        </svg>
      );
    }
  };

  const randomFigureIndex: number = Math.floor(Math.random() * 4);
  const amountOfFigures: number = Math.floor(Math.random() * 8) + 5;
  if (randomFigureIndex === 0) {
    generateEllipses();
  } else if (randomFigureIndex === 1) {
    generateRectangles();
  } else if (randomFigureIndex === 2) {
    generateSquares();
  } else if (randomFigureIndex === 3) {
    generateCircles(amountOfFigures);
  }

  return (
    <div className="GalleryItem-item">
      <h2 className="GalleryItem-title">{props.poem.title}</h2>
      {figures}
    </div>
  );
};

export default GalleryItem;
