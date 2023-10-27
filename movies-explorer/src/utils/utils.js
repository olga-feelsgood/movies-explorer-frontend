export function filterMovies(movies, isShort, searchQuery) {
  return movies.filter((movie) => {
    if (isShort) {
      const result = (movie.nameRU.includes(searchQuery) && (movie.duration <= 40)) ||
        (movie.nameEN.includes(searchQuery) && (movie.duration <= 40))
      return result
    } else {
      const result = movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
      return result
    }
  })
}