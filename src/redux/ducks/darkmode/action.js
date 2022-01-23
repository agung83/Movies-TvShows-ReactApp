import { LIGHT, DARK } from "./types";


const light = () => {
    return { type: LIGHT }
}

const dark = () => {
    return { type: DARK }
}


export {
    light,
    dark
}