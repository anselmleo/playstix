import axios from 'axios';
import http from './baseUrl';

const getAllMovies=()=>{
    return http.get("")
}

export default{
    getAllMovies
}