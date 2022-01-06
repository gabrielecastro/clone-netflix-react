import Carousel from '../components/carousel';
import MainMovie from '../components/MainMovie';
import serie from '../data/serie';

function Series() {
    return (
      <>
      <MainMovie
        mainMovie="main-movie main-movie-serie"
        title="The Witcher "
        sinopse="O mutante Geralt de Rívia é um caçador de monstros que luta para encontrar seu lugar num mundo onde as pessoas muitas vezes são mais perversas que as criaturas selvagens."
        linkTrailer="https://youtu.be/tjujvMkqWe4"
        linkInfos="https://www.themoviedb.org/tv/71912-the-witcher?language=pt-BR"
      />
      <Carousel 
        title="Séries" 
        type={serie}  
      />
      </>
    );
  }
 
export default Series;