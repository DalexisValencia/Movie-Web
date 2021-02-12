import axios from 'axios'
// import { ApiUrl } from '../settings'

export class Movies {
    constructor () {
        axios.defaults.headers.post['Content-Type'] = 'application/json'
        axios.defaults.headers.post['Accept-Language'] = 'es'
    }
    getCategories () {
        // const url = `${ApiUrl}/v1/user-address`
        // console.error(url, 'url') http://www.omdbapi.com/?s=super&apikey=34119215&plot=full
    }

    getMovieByLetter (letter) {
        return axios.get(`http://www.omdbapi.com/?s=${letter}&apikey=34119215`)
    }

    getMovie (imdbID) {
        return axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=34119215&&plot=full`)
    }
}