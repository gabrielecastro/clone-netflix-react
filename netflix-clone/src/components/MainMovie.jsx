import React, { Component } from 'react';

import { AiFillCaretRight, AiOutlineExclamationCircle } from "react-icons/ai";

class MainMovie extends Component {
  render() { 
    const { title, sinopse, linkTrailer, linkInfos, mainMovie } = this.props;
    return (
      <main>
        <div className={ mainMovie }>
          <div className="container-main-movie">
            <h3 className="title">{ title }</h3>
            <p className="sinopse">{ sinopse }</p>
            <div className="buttons">
              <a
                class="button button-1"
                href={ linkTrailer }
                target="_blank" rel="noreferrer"
              >
                <span className="icons"><AiFillCaretRight /></span>
                Assistir trailer
              </a>
              <a
                class="button"
                href={ linkInfos }
                target="_blank" rel="noreferrer"
              >
                <span className="icons"><AiOutlineExclamationCircle /></span>
                Mais informações
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
 
export default MainMovie;