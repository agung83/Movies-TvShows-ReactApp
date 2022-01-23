import {
    FETCH_SEARCH_START,
    FECTH_SEARCH_SUCCESS,
    FETCH_SEARCH_FAILED
} from './types'
import { getSearchMovieApi } from '../../../service/search'

const getSearch = () => {

    return { type: FETCH_SEARCH_START }

}


const getSearchSuccess = (data) => {
    return { type: FECTH_SEARCH_SUCCESS, payload: data }
}


const getSearchFailed = () => {
    return { type: FETCH_SEARCH_FAILED }
}



const fetchSearch = (query) => async (dispatch, getState) => {
    dispatch(getSearch())
    const response = await getSearchMovieApi(query)
    console.log(response)
    if (response.status != "failed") {
        dispatch(getSearchSuccess(response.results))
    } else {
        dispatch(getSearchFailed())
    }

}





export {
    getSearch,
    getSearchSuccess,
    getSearchFailed,
    fetchSearch
}