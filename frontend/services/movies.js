import axios from 'axios'
baseUrl = 'http://localhost:5000/api/v1/'

class MovieDataService{
    getAll(page = 0){
        return axios.get(baseUrl + `movies?page=${page}`)
    }

    get(id){
        return axios.get(baseUrl + `movies/id/${id}`)
    }

    find(query, by = 'title', page = 0){
        return axios.get(baseUrl + `movies?${by}=${query}&page=${page}`)
    }

    createReview(data){
        return axios.post(baseUrl + `movies/review`, data)
    }

    updateReview(data){
        return axios.put(baseUrl + `movies/review`, data)
    }

    deleteReview(id, userId){
        return axios.delete(baseUrl + `movies/review`, {data:{review_id: id, user_id:userId}})
    }

    getRatings(){
        return axios.get(baseUrl + `movies/ratings`)
    }
}

export default new MovieDataService()