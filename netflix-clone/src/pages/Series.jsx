import NavBar from "../components/NavBar";
import { useRef } from 'react';
import Serie from "../data/serie";

import { VscChevronLeft ,VscChevronRight } from "react-icons/vsc";
import { AiFillCaretRight, AiOutlineExclamationCircle } from "react-icons/ai";

function Series() {
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
      <div>
        <NavBar />
        <main>
        <div class="main-movie main-serie">
          <div class="container-main-movie">
            <h3 class="title">The Witcher</h3>
            <p class="sinopse">O mutante Geralt de Rívia é um caçador de monstros que luta para encontrar seu lugar num mundo onde as pessoas muitas vezes são mais perversas que as criaturas selvagens.</p>
            <div class="buttons">
              <a
                class="button button-1"
                href="https://youtu.be/tjujvMkqWe4"
                target="_blank" rel="noreferrer"
              >
                <span className="icons"><AiFillCaretRight /></span>
                Assistir trailer
              </a>
              <a
                class="button"
                href="https://www.themoviedb.org/tv/71912-the-witcher?language=pt-BR"
                target="_blank" rel="noreferrer"
              >
                <span className="icons"><AiOutlineExclamationCircle /></span>
                Mais informações
              </a>
            </div>
          </div>
        </div>
      </main>
        <section>
          <div className="container container-2">
            <div className="title title-2">
              <h3>Séries</h3>
            </div>
            <div className="carousel" ref={ carousel }>
              {Serie.map((item) => (
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
      </div>
    );
  }
 
export default Series;