import { CardWatchList, CategoryWatchList } from "../../interface";



const WatchListContent = ({ data = [], countMovie, countTv, title }) => {

  const list = [
    {
      title: "Movies",
      value: "movies",
      total: countMovie
    },
    {
      title: "Tv Shows",
      value: "tv_shows",
      total: countTv
    },
  ]



  return (
    <div>
      <CategoryWatchList list={list} />
      <div className='mt-3 mb-2'>
        <p className='text-xl text-emerald-500 font-bold pl-3'>{title}</p>
      </div>
      <div className='grid grid-rows-2 gap-5'>
        <CardWatchList data={data} />
      </div>
    </div>
  )
};

export default WatchListContent;
