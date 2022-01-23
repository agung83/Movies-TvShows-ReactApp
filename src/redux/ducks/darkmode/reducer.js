import { LIGHT, DARK } from './types'

const initialState = {
    theme: 'light',
};



export default function darkModeReducer(state = initialState, actions) {

    switch (actions.type) {
        case LIGHT:

            let htmllight = document.querySelector('html')
            localStorage.setItem('theme', 'light')
            htmllight.setAttribute('class', 'light')
            return {
                theme: 'light'
            }
        case DARK:

            let htmldark = document.querySelector('html')
            localStorage.setItem('theme', 'dark')
            htmldark.setAttribute('class', 'dark')
            return {
                theme: 'dark'
            }

        default:
            return state;
    }
}
