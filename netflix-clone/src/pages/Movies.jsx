import Carousel from "../components/carousel";
import MainMovie from "../components/MainMovie";
import movies from "../data/movies";

function Movies() {
  return (
    <>
      <MainMovie
        mainMovie="main-movie main-movie-film"
        title="Alerta Vermelho"
        sinopse="No mundo do crime internacional, a INTERPOL lança um Alerta Vermelho, o que inicia uma caçada para capturar a mais notória ladra de artes do globo."
        linkTrailer="https://youtu.be/5JQuYpBZarc"
        linkInfos="https://www.themoviedb.org/movie/512195-red-notice?language=pt-BR"
      />
      <Carousel 
        title="Filmes" 
        type={movies}
      />
    </>
  );
}

export default Movies;