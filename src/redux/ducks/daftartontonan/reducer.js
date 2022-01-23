import * as types from "./types";

const initialState = {
    tipe_data_dipilih: "MOVIES",
    datamovie: [],
    datatv: []
};


export default function watchListReducer(state = initialState, actions) {

    switch (actions.type) {
        case types.INITIAL_DATA:
            let dataPersistMovie = localStorage.getItem('datamovie')
            let dataPersistTv = localStorage.getItem('datatv')
            return {
                ...state,
                tipe_data_dipilih: "MOVIES",
                datamovie: dataPersistMovie !== null ? JSON.parse(dataPersistMovie) : [],
                datatv: dataPersistTv !== null ? JSON.parse(dataPersistTv) : []

            }
        case types.SET_NEW_MOVIE:
            localStorage.setItem('datamovie', JSON.stringify(actions.payload.movie))
            localStorage.setItem('datatv', JSON.stringify(actions.payload.tv))
            return {
                ...state,
                tipe_data_dipilih: "MOVIES",
                datamovie: actions.payload.movie,
                datatv: actions.payload.tv

            }
        case types.SET_TV:
            return {
                ...state,
                tipe_data_dipilih: "TV",
                datamovie: state.datamovie,
                datatv: state.datatv

            }
        case types.SET_MOVIE:
            return {
                ...state,
                tipe_data_dipilih: "MOVIES",
                datamovie: state.datamovie,
                datatv: state.datatv

            }
        case types.DELETED:
            localStorage.setItem('datamovie', JSON.stringify(actions.payload.movie))
            localStorage.setItem('datatv', JSON.stringify(actions.payload.tv))
            return {
                ...state,
                tipe_data_dipilih: state.tipe_data_dipilih,
                datamovie: actions.payload.movie,
                datatv: actions.payload.tv

            }
        default:
            return state;
    }

}