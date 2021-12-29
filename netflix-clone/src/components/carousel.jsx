import Series from '../data/series';
import { useRef } from 'react';

import { VscChevronLeft ,VscChevronRight } from "react-icons/vsc";

function Carousel() {

  const carousel = useRef(null);

  const handleLeftClick = (event) => {
    event.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    
  }

  const handleRightClick = (event) => {
    event.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

    return (
      <section>
          <div className="container">
            <div className="title">
              <h3>Séries</h3>
            </div>
            <div className="carousel" ref={ carousel }>
              {Series.map((item) => (
                <div className="item">
                  <div className="image">
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>
              ))}
            </div>
            <div className="buttons">
              <button onClick={handleLeftClick}><VscChevronLeft /></button>
              <button onClick={handleRightClick}><VscChevronRight /></button>
            </div>
          </div>
        </section>
    );
  }
 
export default Carousel;