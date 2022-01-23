import React from 'react';
import Modal from '../Modal'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchSearch } from '../../../../redux/ducks/search/action'
import CardList from '../CardList';

const Header = ({ searchData, searchState }) => {

    let [isOpen, setIsOpen] = React.useState(false)
    let [isSearch, setIsSearch] = React.useState("")
    let [isValidasi, setValidasi] = React.useState("")

    const closeModal = React.useCallback(() => setIsOpen(false), [])
    const openModal = React.useCallback(() => setIsOpen(true), [])


    const onSearch = () => {
        if (isSearch === "") {
            setValidasi("Masukan dulu judul film favorit kamu")
            return ""
        }
        searchData(isSearch)
        setIsOpen(true)
        setValidasi("")
    }

    return (
        <>
            <section className="container px-4 py-7 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center ">
                <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
                    <h1 className="text-3xl leading-snug text-emerald-400  md:text-4xl">
                        <span className="font-semibold ">Cari Film Terbaik Mu</span>
                    </h1>

                    <p className="mt-4 text-lg text-gray-500 dark:text-emerald-400">
                        Film, acara TV tak terbatas, dan lebih banyak lagi.
                        Tonton di mana pun. Batalkan kapan pun.
                    </p>

                    <div className="mt-6 bg-transparent border rounded-md dark:border-gray-700 lg:w-2/3 focus-within:border-teal-500 focus-within:ring focus-within:ring-primary dark:focus-within:border-teal-500 focus-within:ring-opacity-40">
                        <div className="flex flex-wrap justify-between md:flex-row">
                            <input onChange={(e) => setIsSearch(e.target.value)} type="search" name="query" className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0 border-emerald-600" placeholder="Masukan Judul Favorit Mu" required />

                            <button type='button' onClick={onSearch} className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-200  rounded-md lg:w-12 lg:h-12 lg:p-0 bg-emerald-500 hover:bg-emerald-300 focus:outline-none focus:bg-emerald-300">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <p className='text-sm text-emerald-500'>{isValidasi}</p>
                </div>

                <div className="w-full mt-4 lg:mt-0 lg:w-1/2">

                    <img src="/static/images/movie.svg" alt="huhu" />
                </div>
            </section>

            <Modal
                withButton={true}
                titleButton="Create Todo"
                openModal={openModal}
                styleButton="px-2 py-2 bg-green-200 rounded dark:text-white dark:bg-gray-400"
                closeModal={closeModal}
                isOpen={isOpen}
            >

                <CardList dataCard={searchState.datasearch} tipe={'Movies'} loading={searchState.loading} />

            </Modal>

        </>
    )
};


const mapStateToProps = (state) => ({
    searchState: state.search
});

const mapDispatchToProps = {
    searchData: fetchSearch
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, React.memo)(Header)


