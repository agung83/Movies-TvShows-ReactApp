import axios from "axios";


// const { REACT_APP_BASE_URL } = process.env
let instance = axios;

const initialHeader = {
    "Content-Type": "application/json",
    Authorization: ""
};

export function setUpAxios() {
    instance.interceptors.request.use((req) => {

        console.log('axios request')
        return req;
    });
    instance.interceptors.response.use((res) => {

        // console.log(res)

        return res;
    }, (err) => {
        console.log(err)

        return Promise.reject(err)
    })
}


export default function HttpRequest(config) {

    const baseURL = `https://api.themoviedb.org/3`;

    const headers = {
        ...initialHeader,
    };

    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTIyNDYwNjdlYmU0Yzc3OTQyN2Y1MWNlMzcyYzQ0MSIsInN1YiI6IjYxZWFjYTlkNTM0NjYxMDA0M2MyMWU3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fvOlD57i1YNCggLZ3YbVAS_VApzDe8IRI7zzZJy8Y5M";
    headers.Authorization = `Bearer ${token}`;

    const finalConfig = {
        baseURL,
        headers,
        ...config,
    };

    return instance.request(finalConfig);
}