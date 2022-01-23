


import { useState, useEffect, memo, Fragment } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom'
import { Switch, Transition } from '@headlessui/react'

export function Navbar({ setLightMode, setDarkMode, movieListState, tvListState }) {
    const totalWatchList = movieListState.length + tvListState.length

    const [enabled, setEnabled] = useState(false)
    const [isShowing, setIsShowing] = useState(false)

    let theme = localStorage.getItem('theme')
    useEffect(() => {
        if (theme === "light") {
            setEnabled(false)
            setLightMode()
        } else {
            setEnabled(true)
            setDarkMode()
        }
    }, [theme, setDarkMode, setEnabled, setLightMode])

    const switchChange = () => {
        if (theme === "dark") {
            setEnabled(false)
            setLightMode()
        } else {
            setEnabled(true)
            setDarkMode()
        }
    }




    return (
        <>
            <header className="bg-white dark:bg-gray-800 h-16 border-b  dark:border-emerald-300  sticky top-0 z-50">
                <div className="flex justify-between">
                    <div className="p-1 mx-3 inline-flex items-center">
                        <button type="button" onClick={() => setIsShowing((isShowing) => !isShowing)} className="md:hidden lg:hidden hover:text-green-600 dark:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <NavLink to={'/'}  >
                            <h1 className="text-emerald-400 text-xl  font-bold p-2">Movies & Tv Shows</h1>
                        </NavLink>

                    </div>
                    <div className="p-1 flex flex-row items-center">
                        <div>
                            <NavLink to={'/watchlist'} className='text-emerald-400 font-bold hidden md:block lg:block' >
                                <p className='pr-8'>Watch List <span className='text-red-400'>({totalWatchList})</span></p>
                            </NavLink>
                        </div>
                        <div className="pr-10">
                            <Switch
                                checked={true}
                                onChange={switchChange}
                                className={`${enabled ? 'bg-gray-700' : 'bg-gray-300'
                                    } relative inline-flex items-center h-6 rounded-full w-11`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block w-4 h-4 transform  rounded-full  bg-gray-100`}
                                />
                            </Switch>
                        </div>

                    </div>
                </div>
            </header>
            <Transition
                show={isShowing}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="md:hidden lg:hidden sticky top-0 z-50 dark:bg-gray-700 bg-gray-50 overflow-y-scroll h-32"
            >
                <NavLink to={'/'} className="text-emerald-400 font-bold ">
                    <h1 className="text-emerald-400 text-xl  font-bold p-2">Home</h1>
                </NavLink>
                <ul className="grid grid-cols-2 gap-4 mt-3">
                    <li className=" w-full h-full py-3 px-3">
                        <NavLink to={'/watchlist'} className="text-emerald-400 font-bold ">
                            <p className='pr-8'>Watch List <span className='text-red-400'>({totalWatchList})</span></p>
                        </NavLink>
                    </li>
                </ul>
            </Transition>
        </>
    )
}



const mapStateToProps = (state) => ({
    movieListState: state.watchlist.datamovie,
    tvListState: state.watchlist.datatv,
});

const mapDispatchToProps = (dispatch) => {
    return {
        setLightMode: () => dispatch({ type: "LIGHT" }),
        setDarkMode: () => dispatch({ type: "DARK" }),
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Navbar);
