
import { compose } from 'redux';
import { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { setDataWhenRefresh } from "../../../redux/ducks/daftartontonan/action"
import { Layout } from '../../components'
import { WatchListContent } from '../../components/organism';


const WatchList = ({ movieListState, tvListState, category_tipe, setDataWhenRefresh }) => {
    const countMovie = movieListState.length
    const countTv = tvListState.length

    useEffect(() => {
        setDataWhenRefresh()
    }, [setDataWhenRefresh]);



    return (
        <Layout Layout title={'WatchList'} >
            <WatchListContent
                data={category_tipe === "MOVIES" ? movieListState : tvListState}
                countMovie={countMovie}
                countTv={countTv}
                title={category_tipe}
            />
        </Layout >
    )
};


const mapStateToProps = (state) => ({
    category_tipe: state.watchlist.tipe_data_dipilih,
    movieListState: state.watchlist.datamovie,
    tvListState: state.watchlist.datatv,
});

const mapDispatchToProps = {
    setDataWhenRefresh
}



const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, memo)(WatchList)
