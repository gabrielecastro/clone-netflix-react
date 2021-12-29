import NavBar from "../components/NavBar";
import { useRef } from 'react';

import { VscChevronLeft ,VscChevronRight } from "react-icons/vsc";
import { AiFillCaretRight, AiOutlineExclamationCircle } from "react-icons/ai";
import movies from "../data/movies";

function Movies() {
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
        <div class="main-movie main-movie-2">
          <div class="container-main-movie">
            <h3 class="title">Alerta Vermelho</h3>
            <p class="sinopse">No mundo do crime internacional, a INTERPOL lança um Alerta Vermelho, o que inicia uma caçada para capturar a mais notória ladra de artes do globo.</p>
            <div class="buttons">
              <a
                class="button button-1"
                href="https://youtu.be/5JQuYpBZarc"
                target="_blank" rel="noreferrer"
              >
                <span className="icons"><AiFillCaretRight /></span>
                Assistir trailer
              </a>
              <a
                class="button"
                href="https://www.themoviedb.org/movie/512195-red-notice?language=pt-BR"
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
              <h3>Filmes</h3>
            </div>
            <div className="carousel" ref={ carousel }>
              {movies.map((item) => (
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
 
export default Movies;