import React from 'react';
import { compose } from 'redux';
import { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { storeNewMovie } from '../../../../redux/ducks/daftartontonan/action'

function ListData({ pecah, newWatchList }) {

    const setNewWatchList = (data) => {

        newWatchList(data)
    }

    const titleName = pecah.original_title !== undefined ? pecah.original_title : pecah.original_name
    const relese = pecah.release_date !== undefined ? pecah.release_date : pecah.first_air_date
    return (
        <div className="shadow-lg h-1/4 rounded-lg border  hover:border-emerald-300 cursor-pointer mb-5 hover:shadow-xl">
            <img src={`https://image.tmdb.org/t/p/w500/${pecah.backdrop_path}`} alt="" className="object-cover object-top h-48 md:h-60 lg:h-60 rounded-t-md w-full" />
            <div className="p-2">
                <p className="text-md dark:text-white font-semibold">{titleName}</p>
            </div>
            <div className="flex flex-row justify-between px-4">
                <div className="flex flex-col datos_col">
                    <div className="text-xs dark:text-white ">{pecah.popularity}</div>
                    <div className="text-xs text-gray-400 dark:text-white">Popularity:</div>
                </div>
                <div className="flex flex-col datos_col">
                    <div className="text-xs dark:text-white">{relese}</div>
                    <div className="text-xs text-gray-400 dark:text-white">{pecah.release_date !== undefined ? "Release Date" : "First Air Date"}</div>
                </div>
                <div className="flex flex-col datos_col">
                    <div className="text-xs dark:text-white">155 min</div>
                    <div className="text-xs text-gray-400 dark:text-white">Runtime:</div>
                </div>
            </div>
            <div className="flex flex-col overview px-4 mt-3 ">
                <div className="flex flex-col"></div>
                <div className="text-xs text-gray-400 mb-2 dark:text-white">Overview:</div>
                <p className="text-xs text-gray-500 mb-6 dark:text-white">
                    {pecah.overview}
                </p>
            </div>
            <div className="flex flex-row relative pb-10 space-x-4 z-10">
                <button
                    onClick={() => setNewWatchList(pecah)}
                    className="flex items-center py-2 px-4 rounded-full mx-auto text-white font-bold bg-emerald-400 hover:bg-red-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div className="text-sm text-white ml-2">Masukan Ke Daftar Tontonan</div>
                </button>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    state_watchlist: state.watchlist
});

const mapDispatchToProps = {
    newWatchList: storeNewMovie
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ListData)
