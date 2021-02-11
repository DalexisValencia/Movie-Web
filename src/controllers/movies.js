import { Movies } from '../services/movies'


export class MoviesController {
    async getMovies () {
        try {
            const MoviesService = new Movies()
            const movies = await MoviesService.getMovieTest()
            return movies.status == 200 ? movies.data : []
            } catch (e) {
            return e.response.data
        }
        
    }
}