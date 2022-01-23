import { compose } from 'redux';
import { memo } from 'react';
import { connect } from 'react-redux';
import { deleteWatchList } from "../../../../redux/ducks/daftartontonan/action"

const ListData = ({ item, deleteWatchList }) => {
    const titleName = item.original_title !== undefined ? item.original_title : item.original_name
    const release = item.release_date !== undefined ? item.release_date : item.first_air_date
    return (
        <div className="bg-white dark:bg-gray-800 border border-emerald-300 shadow overflow-hidden sm:rounded-lg">
            <div className='flex flex-row justify-between'>
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium dark:text-emerald-500 text-gray-900">{titleName}</h3>
                    <p className="mt-1 max-w-2xl text-md text-gray-500 dark:text-emerald-500">
                        Rating  : <span className='text-yellow-600 text-xl font-bold'>{item.vote_average}</span>
                    </p>
                </div>
                <div className='px-4 py-5 sm:px-6 text-red-500'>
                    <button onClick={() => deleteWatchList(item)}>Delete</button>
                </div>
            </div>
            <div className="border-t border-gray-200 dark:border-emerald-400">
                <dl>
                    <div className="bg-white dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-emerald-500">Poster</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-emerald-500 sm:mt-0 sm:col-span-2">
                            {/* <div className='h-32 bg-green-500 w-32'></div> */}
                            <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" className="object-cover object-top h-48 md:h-32 lg:h-32 md:w-32 lg:w-32 rounded-t-md w-full" />
                        </dd>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-emerald-500">Orginal Title</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-emerald-500 sm:mt-0 sm:col-span-2">
                            {titleName}
                        </dd>
                    </div>
                    <div className="bg-white dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-emerald-500">Popularity</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-emerald-500 sm:mt-0 sm:col-span-2">
                            {item.popularity}
                        </dd>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-emerald-500">
                            {item.release_date !== undefined ? "Release Date" : "First Air Date"}
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-emerald-500 sm:mt-0 sm:col-span-2">{release}</dd>
                    </div>
                    <div className="bg-white dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-emerald-500">Vote Average</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-emerald-500 sm:mt-0 sm:col-span-2">{item.vote_average}</dd>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-emerald-500">Overview</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-emerald-500 sm:mt-0 sm:col-span-2">
                            {item.overview}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
};




const mapDispatchToProps = {
    deleteWatchList
}



const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect, memo)(ListData)


