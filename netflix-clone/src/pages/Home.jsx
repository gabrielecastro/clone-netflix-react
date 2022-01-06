import Carousel from '../components/carousel';
import MainMovie from '../components/MainMovie';
import Main from '../data/main';

function Home() {
  return (
    <div>
      <MainMovie
        mainMovie="main-movie main-movie-home"
        title="Perdidos no Espaço"
        sinopse="Após um pouso forçado em um planeta desconhecido, a família Robinson tenta sobreviver aos perigos que encontra neste novo mundo."
        linkTrailer="https://youtu.be/GYn4r6nV0tw"
        linkInfos="https://www.themoviedb.org/tv/75758-lost-in-space?language=pt-BR"
      />
      <Carousel 
        title="Em alta" 
        type={Main}  
      />
    </div>
  );
}

export default Home;
