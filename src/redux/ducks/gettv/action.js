import { FETCH_TV_FAILED, FECTH_TV_SUCCESS, FETCH_TV_START } from './types'
import { getTVApi } from '../../../service/gettv'

const getTV = () => {

    return { type: FETCH_TV_START }

}


const getTVSuccess = (data) => {
    return { type: FECTH_TV_SUCCESS, payload: data }
}


const getTVFailed = () => {
    return { type: FETCH_TV_FAILED }
}



const fetchDataTV = (typeTV) => async (dispatch, getState) => {
    dispatch(getTV())
    const response = await getTVApi(typeTV)

    if (response.status !== "failed") {
        const temp = {
            tipe: typeTV,
            data: response.results
        }
        dispatch(getTVSuccess(temp))
    } else {
        dispatch(getTVFailed())
    }

}





export {
    getTV,
    getTVSuccess,
    getTVFailed,
    fetchDataTV
}