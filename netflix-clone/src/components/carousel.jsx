import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { VscChevronLeft ,VscChevronRight } from "react-icons/vsc";

function Carousel(props) {

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
              <h3>{props.title}</h3>
            </div>
            <div className="carousel" ref={ carousel }>
              {props.type.map((item) => (
                <div key={ item.id } className="item">
                  <div className="image">
                    <Link className="link-image-carousel" to={ `card-details/${item.id}` }>
                      <img src={item.image} alt={item.name} />
                    </Link>
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