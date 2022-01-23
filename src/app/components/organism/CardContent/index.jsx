import { CardList, CategoryList } from "../../interface";
import PropTypes from "prop-types";



export default function CardContent({ title, data = [], tipe, category = [], loading, movies }) {
    return (
        <section className='dark:border dark:rounded-2xl dark:border-emerald-300 dark:px-1 dark:py-5 mb-10'>
            <h1 className='px-5 text-emerald-400 text-3xl font-bold mb-3'>{title}</h1>
            <CategoryList listData={category} movies={movies} />
            <CardList dataCard={data} loading={loading} tipe={tipe} />
        </section>
    )
}


CardContent.propTypes = {
    title: PropTypes.string,
    tipe_movie: PropTypes.string
}

CardContent.defaultProps = {
    title: "Masukan Title Card",
    title: "Masukan Tipe movie Card"
}
