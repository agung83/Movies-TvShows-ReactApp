import { compose } from 'redux';
import { memo } from 'react';
import { connect } from 'react-redux';
import { fetchDataMovie } from '../../../../redux/ducks/getmovie/action'
import { fetchDataTV } from '../../../../redux/ducks/gettv/action'


export function CategoryList({ listData, takeMovie, takeTv, movies }) {

    const onSet = (value) => {
        if (movies) {
            takeMovie(value)
        } else {
            takeTv(value)
        }
    }

    return (
        <div className='border w-full border-emerald-300 rounded-3xl h-12 px-3 py-3 md:overflow-hidden overflow-y-auto'>
            <div className='flex gap-5  '>
                {
                    listData.map((value, key) => (
                        <button key={key} onClick={() => onSet(value.value)} className='border border-emerald-500 px-3 rounded-full hover:bg-green-200  '>
                            <p className='text-sm  cursor-pointer font-semibold  text-emerald-500 truncate'>{value.title}</p>
                        </button>

                    ))
                }
            </div>
        </div>
    );
};



const mapDispatchToProps = {
    takeMovie: fetchDataMovie,
    takeTv: fetchDataTV
}


const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, memo)(CategoryList)


