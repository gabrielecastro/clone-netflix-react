import React, { Component } from 'react';
import NavBar from '../components/NavBar';

/* import { AiOutlineInfoCircle} from 'react-icons/fa'; */

class Home extends Component {
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
                <button class="button">
                  Assistir agora
                </button>
                <button class="button">
                  Mais Informações
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;