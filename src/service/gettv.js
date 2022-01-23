import HttpRequest from './index'

export const getTVApi = async (typetv) => {

    try {
        const { status, data } = await HttpRequest({
            method: "GET",
            url: `/tv/${typetv}`
        })

        if (status === 200) return { ...data, error: null };

    } catch (error) {
        return {
            status: "failed",
            error: error.message,
        };
    }


}

