import { useState } from 'react';
import '../../styles/Components.scss';
import arrowIcone from '../../assets/icones/arrow.svg';

export default function Carousel(props) {
  const pictures = props.logement.pictures;

  const [index, setIndex] = useState(0);

  function next() {
    if (index + 1 >= pictures.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function prev() {
    if (index <= 0) setIndex(pictures.length - 1);
    else {
      setIndex(index - 1);
    }
  }

  if (pictures.length < 2) {
    return (
      <div className="carousel">
        <img src={pictures} alt="" className="picture" />
      </div>
    );
  }
  return (
    <div className="carousel-parent">
      <div className="carousel">
        <button className="prevBtn" onClick={prev}>
          <img src={arrowIcone} alt="arrow left" />
        </button>
        <img src={pictures[index]} alt="" className="picture" />
        <button className="nextBtn" onClick={next}>
          <img src={arrowIcone} alt="aroow right" />
        </button>
      </div>
      <p>
        {index + 1} / {pictures.length}
      </p>
    </div>
  );
}
