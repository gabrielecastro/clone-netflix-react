import React, { Component } from 'react';
import NavBar from '../components/NavBar';

import { AiFillCaretRight, AiOutlineExclamationCircle } from "react-icons/ai";

class Home extends Component {
  /* constructor() {
    super();

  }

  onClickButtonAssist = (event) => {
    event.preventDefault();
  } */

  render() {
    return (
      <div>
        <NavBar />
        <main>
          <div class="main-movie">
            <div class="container-main-movie">
              <h3 class="title">Perdidos no Espaço</h3>
              <p class="sinopse">Após um pouso forçado em um planeta desconhecido, a família Robinson tenta sobreviver aos perigos que encontra neste novo mundo.</p>
              <div class="buttons">
                <a 
                  class="button button-1"
                  href="https://youtu.be/GYn4r6nV0tw"
                  target="_blank" rel="noreferrer"
                  >
                    <span className="icons"><AiFillCaretRight /></span>
                  Assistir trailer
                </a>
                <a
                  class="button"
                  href="https://www.themoviedb.org/tv/75758-lost-in-space?language=pt-BR"
                  target="_blank" rel="noreferrer"
                  >
                    <span className="icons"><AiOutlineExclamationCircle /></span>
                  Mais informações
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;