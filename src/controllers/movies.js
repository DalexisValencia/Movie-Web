import { Movies } from '../services/movies'
const MoviesService = new Movies()

export class MoviesController {
    async getMovies (letter) {
        try {
            const movies = await MoviesService.getMovieByLetter(letter)
            return movies.status == 200 ? movies.data : []
            } catch (e) {
            return e.response.data
        }
    }

    async getMovieById (imdbID) {
        try {
            const movie = await MoviesService.getMovie(imdbID)
            return movie.status == 200 ? movie.data : []
            } catch (e) {
            return e.response.data
        }
    }
}