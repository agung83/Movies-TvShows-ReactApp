import HttpRequest from './index'

export const getMovieApi = async (typemovie) => {

    try {
        const { status, data } = await HttpRequest({
            method: "GET",
            url: `/movie/${typemovie}`
        })

        if (status === 200) return { ...data, error: null };

    } catch (error) {
        return {
            status: "failed",
            error: error.message,
        };
    }


}

