const getFilms = async () => {
  const request = await fetch(`https://api.themoviedb.org/3/genre/movie/listapi_key=6a0374fed0e07df5dbc34ca7eec26ca2`);
  const requestJson = await request.json();
  console.log(requestJson);
};

export default getFilms;
