import axios from 'axios'
import { ApiUrl } from '../config'

export class Movies {
    constructor () {
        axios.defaults.headers.post['Content-Type'] = 'application/json'
        axios.defaults.headers.post['Accept-Language'] = 'es'
    }

    getMovieByLetter (letter) {
        return axios.get(`${ApiUrl}&s=${letter}`)
    }

    getMovie (imdbID) {
        return axios.get(`${ApiUrl}&i=${imdbID}&plot=full`)
    }
}