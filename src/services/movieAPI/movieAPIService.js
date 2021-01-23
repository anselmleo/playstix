import http from "./baseUrl";
console.log("http", http);
const getAllMovies = () => {
  return http.get(
    "https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=c42f83c039e74a26d1c66145a0ada872"
  );
};

const getAllMovieImages = (name) => {
  return http.get(`https://image.tmdb.org/t/p/w200/${name}`);
};

export default {
  getAllMovies,
  getAllMovieImages,
};
