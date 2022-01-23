import { Fragment, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer';




const Layout = ({ children, title }) => {
    let theme = localStorage.getItem('theme');
    useEffect(() => {
        document.title = `${title === undefined ? `TestCase Elemes Movie` : title}`
        let html = document.querySelector('html')
        html.setAttribute('class', theme)
        window.scrollTo(0, 0);
    }, [theme, title])

    return (
        <Fragment>
            <div className="mx-auto bg-grey-400">
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <div className="flex flex-1">
                        <main className="overflow-hidden" />
                        <div className="container py-5 px-3">
                            {children}
                        </div>
                        <main />
                    </div>
                    <Footer />
                </div>
            </div>
        </Fragment>
    )
}

export default Layout
