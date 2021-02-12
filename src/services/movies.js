import axios from 'axios'
// import { ApiUrl } from '../settings'

export class Movies {
    constructor () {
        axios.defaults.headers.post['Content-Type'] = 'application/json'
        axios.defaults.headers.post['Accept-Language'] = 'es'
    }
    getCategories () {
        // const url = `${ApiUrl}/v1/user-address`
        // console.error(url, 'url')
    }

    getMovieTest () {
        return axios.get('http://www.omdbapi.com/?i=tt3896198&s=Batman&apikey=34119215')
    }

    getMovie (imdbID) {
        return axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=34119215`)
    }
}