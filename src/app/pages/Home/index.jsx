
import { compose } from 'redux';
import { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDataMovie } from '../../../redux/ducks/getmovie/action'
import { setDataWhenRefresh } from '../../../redux/ducks/daftartontonan/action'
import { fetchDataTV } from '../../../redux/ducks/gettv/action'
import { Layout } from '../../components'
import { Header } from '../../components/interface';
import { CardContent } from '../../components/organism';


const categoryMovie = [
    {
        title: "Popular Movie",
        value: "popular"
    },
    {
        title: "Upcoming Movie",
        value: "upcoming"
    },
    {
        title: "Now Playing",
        value: "now_playing"
    },
    {
        title: "Top Rated Movie",
        value: "top_rated"
    },
]

const categoryTv = [
    {
        title: "Popular Tv",
        value: "popular"
    },
    {
        title: "On The Air Tv",
        value: "on_the_air"
    },
    {
        title: "Airing Today",
        value: "airing_today"
    },
    {
        title: "Top Rated Tv",
        value: "top_rated"
    },
]


const Home = ({ takeMovie, movieState, takeTv, tvState, watchListSetOnRefresh }) => {


    useEffect(() => {
        takeMovie("popular")
        takeTv("on_the_air")
        watchListSetOnRefresh()
    }, [takeMovie, takeTv, watchListSetOnRefresh]);



    return (
        <Layout title={'Movies & Tv Shows'}  >
            <Header />
            <CardContent title={"Movies"} movies={true} data={movieState.datamovie} tipe={movieState.tipe} loading={movieState.loading} category={categoryMovie} />
            <CardContent title={"Tv Shows"} movies={false} data={tvState.datatv} tipe={tvState.tipe} loading={tvState.loading} category={categoryTv} />
        </Layout>
    )
};



const mapStateToProps = (state) => ({
    movieState: state.movie,
    tvState: state.tvshow
});

const mapDispatchToProps = {
    takeMovie: fetchDataMovie,
    takeTv: fetchDataTV,
    watchListSetOnRefresh: setDataWhenRefresh,
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Home)

