import ListData from "./ListData";

const CardWatchList = ({ data }) => {
    return (
        <>
            {
                data.length === 0 ?
                    <div className="mx-auto">
                        <img src="/static/images/empty.svg" className="h-60" />
                        <p className="text-xl text-gray-500 dark:text-white">Kamu belum mengisi watch list</p>
                    </div> :
                    data.map((value, key) => (
                        <ListData key={key} item={value} />
                    ))
            }
        </>
    )

};

export default CardWatchList;
