import {SHORTMOVIESDURATIONINMINUTES} from './constants';

export function filterShortMovies(movies) {
  return movies.filter((movie) => {
    const result = (movie.duration <= SHORTMOVIESDURATIONINMINUTES);
    return result;
  })
}

export function filterByTitleMovies(movies, searchQuery) {
  return movies.filter((movie) => {
    const result = movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase());
    return result;
  })
}