import { Home, WatchList } from "../pages";



const routes = [
    {
        key: 'page-home',
        name: 'page-home',
        Component: Home,
        path: '/',
    },
    {
        key: 'page-watchlist',
        name: 'page-watchlist',
        Component: WatchList,
        path: '/watchlist',
    },

];

export default routes;