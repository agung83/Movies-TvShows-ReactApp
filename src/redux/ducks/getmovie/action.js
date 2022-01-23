import { FETCH_MOVIE_FAILED, FECTH_MOVIE_SUCCESS, FETCH_MOVIE_START } from './types'
import { getMovieApi } from '../../../service/getMovie'

const getMovie = () => {

    return { type: FETCH_MOVIE_START }

}


const getMovieSuccess = (data) => {
    return { type: FECTH_MOVIE_SUCCESS, payload: data }
}


const getMovieFailed = () => {
    return { type: FETCH_MOVIE_FAILED }
}



const fetchDataMovie = (typemovie) => async (dispatch, getState) => {
    dispatch(getMovie())
    const response = await getMovieApi(typemovie)

    if (response.status != "failed") {
        const temp = {
            tipe: typemovie,
            data: response.results
        }
        dispatch(getMovieSuccess(temp))
    } else {
        dispatch(getMovieFailed())
    }

}





export {
    getMovie,
    getMovieSuccess,
    getMovieFailed,
    fetchDataMovie
}