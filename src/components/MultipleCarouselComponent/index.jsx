import React from 'react';
import './carousel.css';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

export default function MultipleCarouselComponent(props) {
  const { children, show } = props;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  // const [length, setLength] = React.useState(children.length);
  const cumputeRound = (showone) => Math.ceil(children.length / showone) - 1;

  const next = () => {
    if (currentIndex < cumputeRound(show)) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  //   React.useEffect(() => {
  //     setLength(children.length);
  //   }, [children]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <Button onClick={prev} className="left-arrow">
            &lt;
          </Button>
        )}
        <div className="carousel-content-wrapper">
          <div
            className={`carousel-content show-${show}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        {currentIndex < cumputeRound(show) && (
          <Button onClick={next} className="right-arrow">
            &gt;
          </Button>
        )}
      </div>
    </div>
  );
}

MultipleCarouselComponent.propTypes = {
  children: PropTypes.string.isRequired,
  show: PropTypes.number.isRequired,
};
