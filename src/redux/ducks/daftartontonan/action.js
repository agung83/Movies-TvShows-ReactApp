import * as types from './types'


const setDataWhenRefresh = () => {
    return {
        type: types.INITIAL_DATA
    }
}

const setNewMovie = (payload) => {
    return {
        type: types.SET_NEW_MOVIE, payload
    }
}

const setDeletedData = (payload) => {
    return {
        type: types.DELETED, payload
    }
}

const deleteWatchList = (data) => async (dispatch, getState) => {
    let state = getState()
    const dataMovieNow = state.watchlist.datamovie
    const dataTvNow = state.watchlist.datatv

    if (data.original_title === undefined) { //berarti bukan movie atau ini tv shows
        const result = dataTvNow.filter(check => check.id !== data.id);
        dispatch(setDeletedData({ movie: dataMovieNow, tv: result }))
    }

    if (data.original_name === undefined) { // berarti movie
        const result = dataMovieNow.filter(check => check.id !== data.id);
        dispatch(setDeletedData({ movie: result, tv: dataTvNow }))
    }
}

const setModeWatchList = (tipe) => async (dispatch, getState) => {

    if (tipe === "movies") {
        dispatch({ type: types.SET_MOVIE })
    }

    if (tipe === "tv_shows") {
        dispatch({ type: types.SET_TV })
    }
}


const storeNewMovie = (data) => async (dispatch, getState) => {
    let state = getState()
    const dataMovieNow = state.watchlist.datamovie
    const dataTvNow = state.watchlist.datatv

    if (data.original_title === undefined) { //berarti bukan movie
        const result = dataTvNow.filter(check => check.id === data.id);
        if (result[0] !== undefined) {
            if (result[0].id !== data.id) {
                let dataTemp = [...state.watchlist.datatv, data]
                dispatch(setNewMovie({ movie: dataMovieNow, tv: dataTemp }))
            }
        } else {
            let dataTemp = [...state.watchlist.datatv, data]
            dispatch(setNewMovie({ movie: dataMovieNow, tv: dataTemp }))
        }
    }

    if (data.original_name === undefined) { // berarti movie
        // pengecekan data duplicate

        // pertama kita filter state movie apakah ada data yang sama
        const result = dataMovieNow.filter(check => check.id === data.id);

        //kedua kita check apakah hasil dari result 
        if (result[0] !== undefined) { //logikan result karna ketika refresh state akan kosong, ini berarti hasil dari result ada
            if (result[0].id !== data.id) { // makan kita check apakah title movie di state sama dengan yang di pilih, berarti pada block ini title tidak sama dengan yang di inputkan
                let dataTemp = [...state.watchlist.datamovie, data]
                dispatch(setNewMovie({ movie: dataTemp, tv: dataTvNow }))
            }

        } else { // jika halaman di refresh kita ulang dari awal masukan ke state
            let dataTemp = [...state.watchlist.datamovie, data]
            dispatch(setNewMovie({ movie: dataTemp, tv: dataTvNow }))
        }

    }

}


export {
    setNewMovie,
    storeNewMovie,
    setModeWatchList,
    setDataWhenRefresh,
    deleteWatchList
}
