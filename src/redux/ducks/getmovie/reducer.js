import * as types from "./types";

const initialState = {
    loading: true,
    error: false,
    message: "",
    tipe: "",
    datamovie: []
};


export default function movieReducer(state = initialState, actions) {

    switch (actions.type) {

        case types.FETCH_MOVIE_START:
            return {
                ...state,
                loading: true,
                tipe: "",
                datamovie: []
            }
        case types.FECTH_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                message: "Data Movie",
                tipe: actions.payload.tipe,
                datamovie: actions.payload.data
            }
        case types.FETCH_MOVIE_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                message: "error ni",
            }

        default:
            return state;
    }

}