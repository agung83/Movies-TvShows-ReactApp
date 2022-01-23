import HttpRequest from './index'

export const getSearchMovieApi = async (query) => {

    try {
        const { status, data } = await HttpRequest({
            method: "GET",
            url: `/search/movie?query=${query}`
        })

        if (status === 200) return { ...data, error: null };
    } catch (error) {
        return {
            status: "failed",
            error: error.message,
        };
    }


}

