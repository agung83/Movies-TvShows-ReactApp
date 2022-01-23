import * as types from "./types";

const initialState = {
    loading: true,
    error: false,
    message: "",
    tipe: "",
    datatv: []
};


export default function tvReducer(state = initialState, actions) {

    switch (actions.type) {

        case types.FETCH_TV_START:
            return {
                ...state,
                loading: true,
                tipe: "",
                datatv: []
            }
        case types.FECTH_TV_SUCCESS:
            return {
                ...state,
                loading: false,
                message: "Data TV",
                tipe: actions.payload.tipe,
                datatv: actions.payload.data.reverse()
            }
        case types.FETCH_TV_FAILED:
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