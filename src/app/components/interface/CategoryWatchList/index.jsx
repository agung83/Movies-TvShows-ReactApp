import { compose } from 'redux';
import { memo } from 'react';
import { connect } from 'react-redux';
import { setModeWatchList } from '../../../../redux/ducks/daftartontonan/action'


const CategoryWatchList = ({ list, changeTipe }) => {

    const SET_MODE = (tipe) => {
        changeTipe(tipe)
    }

    return (
        <div className='border w-full border-emerald-300 rounded-xl h-12 px-3 py-3 md:overflow-hidden overflow-y-auto'>
            <div className='flex gap-5'>
                {
                    list.map((value, key) => (

                        <button key={key} onClick={() => SET_MODE(value.value)} className='border border-emerald-500 px-3 rounded-full hover:bg-green-200  '>
                            <p className='text-sm  cursor-pointer font-semibold  text-emerald-500 truncate'>{value.title} ({value.total})</p>
                        </button>
                    ))
                }
            </div>
        </div>
    )
};



const mapDispatchToProps = {
    changeTipe: setModeWatchList
}


const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect, memo)(CategoryWatchList)

