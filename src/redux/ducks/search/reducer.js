import * as types from "./types";

const initialState = {
    loading: true,
    error: false,
    message: "",
    success: false,
    datasearch: []
};


export default function searchReducer(state = initialState, actions) {

    switch (actions.type) {

        case types.FETCH_SEARCH_START:
            return {
                ...state,
                loading: true,
                success: false,
                datasearch: []
            }
        case types.FECTH_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                message: "Data Search",
                success: true,
                datasearch: actions.payload
            }
        case types.FETCH_SEARCH_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                error: true,
                message: "error ni",
            }

        default:
            return state;
    }

}