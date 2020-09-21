import React, {useState, MouseEvent, TouchEvent} from 'react';
import '../ColorPalette.css';
import '../Container.css';
import './GalleryPage.css';
import '../General.css';
import GalleryItem from './GalleryItem';
import {ColorTheme} from './GalleryItem.dto';

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

  const poems: Poem[] = [
    {
      author: 'Shakespeare',
      title: 'Lorem ipsuuuum 2',
      lines: [
        'From fairest creatures we desire increase,',
        "That thereby beauty's rose might never die,",
        'But as the riper should by time decease,',
        'His tender heir might bear his memory:',
        'But thou contracted to thine own bright eyes,',
        "Feed'st thy light's flame with self-substantial fuel,",
        'Making a famine where abundance lies,',
        'Thy self thy foe, to thy sweet self too cruel:',
        "Thou that art now the world's fresh ornament,",
      ],
    },
    {
      author: 'Shakespeare',
      title: 'Lorem ipsuuuum 3',
      lines: [
        'From fairest creatures we desire increase,',
        "That thereby beauty's rose might never die,",
        'But as the riper should by time decease,',
        'His tender heir might bear his memory:',
        'But thou contracted to thine own bright eyes,',
        "Feed'st thy light's flame with self-substantial fuel,",
        'Making a famine where abundance lies,',
        'Thy self thy foe, to thy sweet self too cruel:',
        "Thou that art now the world's fresh ornament,",
        'And only herald to the gaudy spring,',
        'Within thine own bud buriest thy content,',
        "And tender churl mak'st waste in niggarding:",
        '  Pity the world, or else this glutton be,',
        "  To eat the world's due, by the grave and thee.",
      ],
    },
    {
      author: 'Shakespeare',
      title: 'Lorem ipsuum 5',
      lines: [
        'From fairest creatures we desire increase,',
        "That thereby beauty's rose might never die,",
        'But as the riper should by time decease,',
        'His tender heir might bear his memory:',
        'But thou contracted to thine own bright eyes,',
        "Feed'st thy light's flame with self-substantial fuel,",
        'Making a famine where abundance lies,',
        'Thy self thy foe, to thy sweet self too cruel:',
        "Thou that art now the world's fresh ornament,",
        'And only herald to the gaudy spring,',
        'Within thine own bud buriest thy content,',
        "And tender churl mak'st waste in niggarding:",
        '  Pity the world, or else this glutton be,',
        "  To eat the world's due, by the grave and thee.",
      ],
    },
    {
      author: 'Shakespeare',
      title: 'Lorem ipsuuuum 7',
      lines: [
        'From fairest creatures we desire increase,',
        "That thereby beauty's rose might never die,",
        'But as the riper should by time decease,',
        'His tender heir might bear his memory:',
        'But thou contracted to thine own bright eyes,',
        "Feed'st thy light's flame with self-substantial fuel,",
        'Making a famine where abundance lies,',
        'Thy self thy foe, to thy sweet self too cruel:',
        "Thou that art now the world's fresh ornament,",
        'And only herald to the gaudy spring,',
        'Within thine own bud buriest thy content,',
        "And tender churl mak'st waste in niggarding:",
        '  Pity the world, or else this glutton be,',
        "  To eat the world's due, by the grave and thee.",
      ],
    },
    {
      author: 'Shakespeare',
      title: 'Lorem ipsuuuum',
      lines: [
        'From fairest creatures we desire increase,',
        "That thereby beauty's rose might never die,",
        'But as the riper should by time decease,',
        'His tender heir might bear his memory:',
        'But thou contracted to thine own bright eyes,',
        "Feed'st thy light's flame with self-substantial fuel,",
        'Making a famine where abundance lies,',
        'Thy self thy foe, to thy sweet self too cruel:',
        "Thou that art now the world's fresh ornament,",
        'And only herald to the gaudy spring,',
        'Within thine own bud buriest thy content,',
        "And tender churl mak'st waste in niggarding:",
        '  Pity the world, or else this glutton be,',
        "  To eat the world's due, by the grave and thee.",
      ],
    },
    {
      author: 'Shakespeare',
      title: 'Lorem ipsuuuum',
      lines: [
        'From fairest creatures we desire increase,',
        "That thereby beauty's rose might never die,",
        'But as the riper should by time decease,',
        'His tender heir might bear his memory:',
        'But thou contracted to thine own bright eyes,',
        "Feed'st thy light's flame with self-substantial fuel,",
        'Making a famine where abundance lies,',
        'Thy self thy foe, to thy sweet self too cruel:',
        "Thou that art now the world's fresh ornament,",
        'And only herald to the gaudy spring,',
        'Within thine own bud buriest thy content,',
        "And tender churl mak'st waste in niggarding:",
        '  Pity the world, or else this glutton be,',
        "  To eat the world's due, by the grave and thee.",
      ],
    },
    {
      author: 'Shakespeare',
      title: 'Lorem ipsu 9',
      lines: [
        'From fairest creatures we desire increase,',
        "That thereby beauty's rose might never die,",
        'But as the riper should by time decease,',
        'His tender heir might bear his memory:',
        'But thou contracted to thine own bright eyes,',
        "Feed'st thy light's flame with self-substantial fuel,",
        'Making a famine where abundance lies,',
        'Thy self thy foe, to thy sweet self too cruel:',
        "Thou that art now the world's fresh ornament,",
        'And only herald to the gaudy spring,',
        'Within thine own bud buriest thy content,',
        "And tender churl mak'st waste in niggarding:",
        '  Pity the world, or else this glutton be,',
        "  To eat the world's due, by the grave and thee.",
      ],
    },
    {
      author: 'Shakespeare',
      title: 'Lorem ipsuuuum',
      lines: [
        'From fairest creatures we desire increase,',
        "That thereby beauty's rose might never die,",
        'But as the riper should by time decease,',
        'His tender heir might bear his memory:',
        'But thou contracted to thine own bright eyes,',
        "Feed'st thy light's flame with self-substantial fuel,",
        'Making a famine where abundance lies,',
        'Thy self thy foe, to thy sweet self too cruel:',
        "Thou that art now the world's fresh ornament,",
        'And only herald to the gaudy spring,',
        'Within thine own bud buriest thy content,',
        "And tender churl mak'st waste in niggarding:",
        '  Pity the world, or else this glutton be,',
        "  To eat the world's due, by the grave and thee.",
      ],
    },
    {
      author: 'Shakespeare',
      title: 'Lorem ipsuuuum',
      lines: [
        'From fairest creatures we desire increase,',
        "That thereby beauty's rose might never die,",
        'But as the riper should by time decease,',
        'His tender heir might bear his memory:',
        'But thou contracted to thine own bright eyes,',
        "Feed'st thy light's flame with self-substantial fuel,",
        'Making a famine where abundance lies,',
        'Thy self thy foe, to thy sweet self too cruel:',
        "Thou that art now the world's fresh ornament,",
        'And only herald to the gaudy spring,',
        'Within thine own bud buriest thy content,',
        "And tender churl mak'st waste in niggarding:",
        '  Pity the world, or else this glutton be,',
        "  To eat the world's due, by the grave and thee.",
      ],
    },

    {
      author: 'Shakespeare',
      title: 'Lorem ipsuuuum',
      lines: [
        'From fairest creatures we desire increase,',
        "That thereby beauty's rose might never die,",
        'But as the riper should by time decease,',
        'His tender heir might bear his memory:',
        'But thou contracted to thine own bright eyes,',
        "Feed'st thy light's flame with self-substantial fuel,",
        'Making a famine where abundance lies,',
        'Thy self thy foe, to thy sweet self too cruel:',
        "Thou that art now the world's fresh ornament,",
        'And only herald to the gaudy spring,',
        'Within thine own bud buriest thy content,',
        "And tender churl mak'st waste in niggarding:",
        '  Pity the world, or else this glutton be,',
        "  To eat the world's due, by the grave and thee.",
      ],
    },
    {
      author: 'Shakespeare',
      title: 'Lorem ipsuuuum',
      lines: [
        'From fairest creatures we desire increase,',
        "That thereby beauty's rose might never die,",
        'But as the riper should by time decease,',
        'His tender heir might bear his memory:',
        'But thou contracted to thine own bright eyes,',
        "Feed'st thy light's flame with self-substantial fuel,",
        'Making a famine where abundance lies,',
        'Thy self thy foe, to thy sweet self too cruel:',
        "Thou that art now the world's fresh ornament,",
        'And only herald to the gaudy spring,',
        'Within thine own bud buriest thy content,',
        "And tender churl mak'st waste in niggarding:",
        '  Pity the world, or else this glutton be,',
        "  To eat the world's due, by the grave and thee.",
      ],
    },
    {
      author: 'Shakespeare',
      title: 'Lorem ipsuuuum',
      lines: [
        'From fairest creatures we desire increase,',
        "That thereby beauty's rose might never die,",
        'But as the riper should by time decease,',
        'His tender heir might bear his memory:',
        'But thou contracted to thine own bright eyes,',
        "Feed'st thy light's flame with self-substantial fuel,",
        'Making a famine where abundance lies,',
        'Thy self thy foe, to thy sweet self too cruel:',
        "Thou that art now the world's fresh ornament,",
        'And only herald to the gaudy spring,',
        'Within thine own bud buriest thy content,',
        "And tender churl mak'st waste in niggarding:",
        '  Pity the world, or else this glutton be,',
        "  To eat the world's due, by the grave and thee.",
      ],
    },
  ];

  const items = [] as any;
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
  }

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
          <button className="dropbtn" style={{background: colorTheme.color1}}>
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
      <div className="GalleryPage-container">{items}</div>
    </div>
  );
};

export default GalleryPage;
